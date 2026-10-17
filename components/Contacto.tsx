import React from 'react'

export default function Contacto() {
  return (
    <main className="flex flex-col p-1 gap-3 sm:p-2">
      <section className="p-1 sm:p-2 rounded-4xl bg-fundo text-white">
        <div className="flex flex-col gap-6 md:grid md:grid-cols-2 sm:gap-12 p-6 sm:p-10 ">
            <div className="flex flex-col gap-4 ">
                <span className="text-destaque text-xs uppercase font-medium">
                    Entre em contato
                </span>
                <h1 className="font-serif text-3xl leading-tight sm:text-4xl">
                    Estamos aqui para ajudar
                </h1>
                <form action="" className='flex flex-col gap-3'>
                    <fieldset className="flex flex-col gap-1">
                        <label htmlFor="nome" className="text-cinza-ink text-xs font-normal">
                            Nome
                        </label>
                        <input type="text" id="nome" className="bg-fundo/25 text-white py-2 px-4 rounded-2xl font-serif placeholder:text-cinza-ink border border-white/15 focus:outline-none focus:ring-2 focus:ring-destaque" placeholder="Ex. Euclides Capemba" />
                    </fieldset>
                    <fieldset className="flex flex-col gap-1">
                        <label htmlFor="email" className="text-cinza-ink text-xs font-normal">
                            Email
                        </label>
                        <input type="email" id="email" className="bg-fundo/25 text-white py-2 px-4 rounded-2xl font-serif placeholder:text-cinza-ink border border-white/15 focus:outline-none focus:ring-2 focus:ring-destaque" placeholder="Ex. euclides@capemba.com" />
                    </fieldset>
                    <fieldset className="flex flex-col gap-1">
                        <label htmlFor="mensagem" className="text-cinza-ink font-normal text-xs">
                            Mensagem
                        </label>
                        <textarea id="mensagem" className="bg-fundo/25 text-white py-2 px-4 font-serif rounded-2xl placeholder:text-cinza-ink border border-white/15 focus:outline-none focus:ring-2 focus:ring-destaque resize-none" placeholder="Ex. Sua mensagem" rows={4} />
                    </fieldset>
                    <button type="submit" className="bg-destaque text-white w-full hover:bg-destaque/90 py-2 px-4 rounded-2xl font-medium transition-colors duration-300">
                        Enviar mensagem
                    </button>
                </form>
            </div>
        </div>
      </section>
    </main>
  )
}
