import PageTitle from "@/components/PageTitle"

export default function ErrorPage() {
  return (
    <main className="flex flex-col p-1 gap-3 sm:p-2">
        <PageTitle title="Erro" subtitle="Página de erro" />
        <section className="p-1 sm:p-2 rounded-4xl bg-fundo text-white">
            <div className="min-h-[50vh] flex items-center justify-center">
                <p>Erro, página não encontrada! </p>
            </div>
        </section>
    </main>
  )
}