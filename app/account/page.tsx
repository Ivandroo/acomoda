import AccountForm from './account-form'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function Account() {
  const supabase = await createClient()

  const { data: claimsData } = await supabase.auth.getClaims()

  // Do not render account controls until the server has verified an authenticated user.
  if (!claimsData?.claims) {
    redirect('/login?error=unauthorized')
  }

  return <AccountForm claims={claimsData.claims} />
}