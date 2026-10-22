'use server'

import { revalidatePath } from 'next/cache'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

import { logSupabaseAuthError } from '@/lib/supabase/auth-errors'
import { createClient } from '@/lib/supabase/server'

const signupErrorsByCode: Record<string, string> = {
  weak_password: 'weak-password',
  email_address_invalid: 'invalid-email',
  user_already_exists: 'account-exists',
  redirect_not_allowed: 'redirect-not-allowed',
  signup_disabled: 'signup-disabled',
  over_email_send_rate_limit: 'email-rate-limit',
}

function getCredentials(formData: FormData) {
  const email = formData.get('email')
  const password = formData.get('password')

  // FormData can contain files or missing values, so validate before calling Supabase.
  if (typeof email !== 'string' || typeof password !== 'string') {
    return null
  }

  const normalizedEmail = email.trim()
  if (!normalizedEmail || !password) {
    return null
  }

  return { email: normalizedEmail, password }
}

export async function login(formData: FormData) {
  const credentials = getCredentials(formData)
  if (!credentials) {
    redirect('/login?error=invalid-input')
  }

  const supabase = await createClient()
  const { error } = await supabase.auth.signInWithPassword(credentials)

  if (error) {
    // Log only Supabase's diagnostic code and HTTP status, never credentials or tokens.
    logSupabaseAuthError('sign-in', error)
    redirect(
      (error.status ?? 0) >= 500
        ? '/login?error=auth-service-unavailable'
        : error.code === 'email_not_confirmed'
          ? '/login?error=email-not-confirmed'
          : '/login?error=login'
    )
  }

  revalidatePath('/', 'layout')
  redirect('/account')
}

export async function signup(formData: FormData) {
  const credentials = getCredentials(formData)
  if (!credentials) {
    redirect('/login?error=invalid-input')
  }

  const origin = (await headers()).get('origin')
  if (!origin) {
    redirect('/login?error=configuration')
  }

  const supabase = await createClient()
  const { data, error } = await supabase.auth.signUp({
    ...credentials,
    options: {
      // Send email-confirmation links through the existing OTP verification route.
      emailRedirectTo: new URL('/auth/confirm', origin).toString(),
    },
  })

  if (error) {
    // The code distinguishes common setup and validation problems without exposing
    // Supabase's raw response or the submitted email to the browser.
    logSupabaseAuthError('sign-up', error)

    // Supabase returns this when its configured mail provider cannot send the confirmation.
    const signupError = error.message
      .toLowerCase()
      .includes('error sending confirmation email')
      ? 'email-delivery-failed'
      : (error.status ?? 0) >= 500
        ? 'auth-service-unavailable'
        : signupErrorsByCode[error.code ?? ''] ?? 'signup'

    redirect(`/login?error=${signupError}`)
  }

  revalidatePath('/', 'layout')

  // When email confirmation is enabled, Supabase creates the user without a session.
  if (!data.session) {
    redirect('/login?message=check-email')
  }

  redirect('/account')
}
