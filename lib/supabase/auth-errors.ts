type AuthErrorDetails = {
  name: string
  code?: string
  status?: number
  message: string
}

export function logSupabaseAuthError(
  operation: string,
  error: AuthErrorDetails
) {
  // Keep the provider's diagnostic message while redacting common sensitive values.
  const safeMessage = error.message
    .replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi, '[email redacted]')
    .replace(/\bBearer\s+\S+/gi, 'Bearer [redacted]')
    .replace(/\bsb_(?:publishable|secret)_[A-Za-z0-9_-]+/gi, '[key redacted]')
    .slice(0, 200)

  console.error(
    `Supabase ${operation} failed (${error.name}; code=${error.code ?? 'unknown'}; status=${error.status ?? 'unknown'}; message=${safeMessage})`
  )
}
