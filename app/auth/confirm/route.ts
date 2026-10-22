import { type NextRequest, NextResponse } from 'next/server'
import { logSupabaseAuthError } from '@/lib/supabase/auth-errors'
import { createClient } from '@/lib/supabase/server'

const emailOtpTypes = new Set([
  'signup',
  'invite',
  'magiclink',
  'recovery',
  'email_change',
  'email',
])

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const tokenHash = searchParams.get('token_hash')
  const type = searchParams.get('type')
  const code = searchParams.get('code')
  const loginUrl = new URL('/login?error=confirmation', request.url)

  // Use fixed local destinations so callback parameters cannot redirect users off-site.
  const accountUrl = new URL('/account', request.url)

  if (code) {
    const supabase = await createClient()
    // Support the PKCE authorization-code links produced by Supabase.
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) {
      return NextResponse.redirect(accountUrl)
    }

    // Never log callback codes or token hashes; report only sanitized error details.
    logSupabaseAuthError('email confirmation', error)
    if ((error.status ?? 0) >= 500) {
      loginUrl.searchParams.set('error', 'auth-service-unavailable')
    }
  } else if (tokenHash && type && emailOtpTypes.has(type)) {
    const supabase = await createClient()
    // Supabase email templates can instead send a one-time token hash.
    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash: tokenHash,
    })

    if (!error) {
      return NextResponse.redirect(accountUrl)
    }

    logSupabaseAuthError('email confirmation', error)
    if ((error.status ?? 0) >= 500) {
      loginUrl.searchParams.set('error', 'auth-service-unavailable')
    }
  }

  return NextResponse.redirect(loginUrl)
}