import PageTitle from '@/components/PageTitle'

const errorMessages: Record<string, string> = {
  'invalid-input': 'Informe um email e uma senha.',
  login: 'Email ou senha incorretos. Se acabou de se cadastrar, confirme o email.',
  'email-not-confirmed': 'Confirme seu email pelo link enviado antes de entrar.',
  signup: 'Não foi possível criar a conta. Verifique o email e os requisitos da senha.',
  'weak-password': 'A senha não atende aos requisitos do Supabase. Escolha uma senha mais forte.',
  'invalid-email': 'Informe um endereço de email válido.',
  'account-exists': 'Já existe uma conta com esse email. Tente entrar.',
  'redirect-not-allowed':
    'O Supabase bloqueou o endereço de confirmação. Adicione a URL /auth/confirm à lista de redirecionamentos permitidos do projeto.',
  'signup-disabled': 'O cadastro por email está desativado nas configurações do Supabase.',
  'email-rate-limit':
    'O Supabase limitou temporariamente o envio de emails. Aguarde e tente novamente.',
  'email-delivery-failed':
    'O Supabase recusou o envio do email. O SMTP padrão só envia para emails da equipe do projeto e tem limite de 2 emails por hora. Para enviar a outros usuários, configure um SMTP personalizado; se já o fez, consulte Authentication > Logs no Supabase e os logs do provedor.',
  'auth-service-unavailable':
    'O serviço de autenticação do Supabase respondeu com erro. Aguarde e tente novamente; se persistir, verifique Authentication > Logs no painel do Supabase.',
  confirmation: 'O link de confirmação é inválido ou expirou. Tente cadastrar-se novamente.',
  configuration:
    'Não foi possível iniciar o cadastro. Verifique a configuração de URL do Supabase.',
  unauthorized: 'Entre na sua conta para continuar.',
}

const statusMessages: Record<string, string> = {
  'check-email': 'Cadastro iniciado. Verifique seu email e confirme o endereço antes de entrar.',
}

type LoginPageProps = {
  searchParams: Promise<{ error?: string; message?: string }>
}

async function Login () {
  'use server'
  alert('Esse modal não se encontra ativo')
}

async function Signup () {
  'use server'
  alert('Esse modal não se encontra ativo')
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams
  // Only known status codes are rendered; query-string input is never shown as HTML.
  const errorMessage =
    typeof params.error === 'string' ? errorMessages[params.error] : undefined
  const statusMessage =
    typeof params.message === 'string' ? statusMessages[params.message] : undefined

  return (
    <main className="flex flex-col gap-3 p-1 sm:p-2">
      <PageTitle title="login" subtitle="Login" />
      <section className="rounded-4xl bg-fundo p-1 text-white sm:p-2">
        <div className="flex flex-col gap-6 p-6 sm:gap-12 sm:p-10 md:grid md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-medium uppercase text-destaque">
              Login
            </span>
            <h1 className="font-serif text-3xl leading-tight sm:text-4xl">
              Faça o login e acesse o portal
            </h1>

            {errorMessage && (
              <p
                className="rounded-2xl border border-red-300/40 bg-red-950/30 p-3 text-sm text-red-100"
                role="alert"
              >
                {errorMessage}
              </p>
            )}
            {statusMessage && (
              <p
                className="rounded-2xl border border-green-300/40 bg-green-950/30 p-3 text-sm text-green-100"
                role="status"
              >
                {statusMessage}
              </p>
            )}

            <form className="flex flex-col gap-3">
              <fieldset className="flex flex-col gap-1">
                <label
                  htmlFor="email"
                  className="text-xs font-normal text-cinza-ink"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  className="rounded-2xl border border-white/15 bg-fundo/25 px-4 py-2 font-serif text-white placeholder:text-cinza-ink focus:outline-none focus:ring-2 focus:ring-destaque"
                  placeholder="Ex. EuclidesCapemba@gmail.com"
                  required
                />
              </fieldset>
              <fieldset className="flex flex-col gap-1">
                <label
                  htmlFor="password"
                  className="text-xs font-normal text-cinza-ink"
                >
                  Senha
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  autoComplete="current-password"
                  className="rounded-2xl border border-white/15 bg-fundo/25 px-4 py-2 font-serif text-white placeholder:text-cinza-ink focus:outline-none focus:ring-2 focus:ring-destaque"
                  placeholder="**********"
                  required
                />
              </fieldset>
              <button
                type="submit"
                formAction={Login}
                className="w-full rounded-2xl bg-blue-500 px-4 py-2 font-medium text-white transition-colors duration-300 hover:bg-blue-500/90"
              >
                Entrar
              </button>
              <button
                type="submit"
                formAction={Signup}
                className="w-full rounded-2xl px-4 py-2 font-medium text-white"
              >
                Criar conta
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
