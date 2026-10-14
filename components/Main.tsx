import React from 'react'
import Link from 'next/link'
import { CircleUser, ShieldCheck, Award, ArrowRight, Star, Sofa, Wifi, Maximize2, Sparkles, Palette } from 'lucide-react'
import Image from 'next/image'

const proposito = [
    {
        icone: <CircleUser size={20} />,
        nome: "Cliente Primeiro",
        desc: "Colocamos o cliente em primeiro lugar em tudo o que fazemos."
    },
    {
        icone: <ShieldCheck size={20}/>,
        nome: "Segurança",
        desc: "Priorizamos a segurança e o bem estar dos nossos clientes"
    },
    {
        icone: <Award size={20} />,
        nome: "Experiencia ",
        desc: "Procuramos a melhor experiencia para os nossos clientes, desde a reserva até o check-out."
    },
]

const valores = [
    {
        icone: <Sofa />,
        nome: "Conforto",
        desc: "Oferecemos um ambiente confortável para os nossos hóspedes."
    },
    {
        icone: <Wifi />,
        nome: "Internet",
        desc: "Acesso a internet de alta velocidade em todos os imóveis."
    },
    {
        icone: <Maximize2 />,
        nome: "Espaço",
        desc: "Espaços bem dimensionados para uma estadia agradável."
    },
    {
        icone: <Star />,
        nome: "Qualidade",
        desc: "Compromisso com a qualidade em todos os aspectos do nosso serviço."
    },
    {
        icone: <Sparkles />,
        nome: "Simplicidade",
        desc: "Simplicidade em cada detalhe da nossa experiência."
    },
    {
        icone: <Palette />,
        nome: "Design",
        desc: "Design moderno e funcional em todos os nossos imóveis."
    },
]

export default function Main() {
  return (
    <main className="p-1 sm:p-2">
        <section className="p-1 sm:p-2 rounded-4xl bg-fundo text-white">
            {/* Primeira parte da secção */}
            <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2 sm:gap-12 p-6 sm:p-10 ">
                <div className="flex flex-col gap-4 ">
                    <span className='text-destaque text-xs'> Sobre a Acomoda </span>
                    <h1 className='font-serif text-3xl leading-tight sm:text-4xl'>Acomode-se em Lugares Lindos sem sair de Angola</h1>
                    <p className='text-cinza font-serif'>A <span>Acomoda</span> é uma plataforma que conecta hóspedes a imóveis para alugueis de curta estadia. Totalmente nacional, veio como forma de modernizar o mercado de turismo em Angola e demonstrar a nossa essencia.</p>
                    <div className='flex flex-col gap-2 sm:flex-row'>
                        {proposito.map((item, index) => (
                            <div key={index} className='flex flex-col gap-1 sm:gap-1 p-2 sm:p-2 rounded-2xl'>
                                <span className='text-destaque'>{item.icone}</span>
                                <h2 className='font-serif text-base '>{item.nome}</h2>
                                <p className='text-cinza font-serif text-xs'>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <Link href=""><button className='mt-6 inline-flex items-center gap-3 rounded-full py-2 pl-6 pr-2 text-sm font-medium text-white border border-cinza-ink cursor-pointer'>Mais sobre <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-fundo"><ArrowRight size={16} /></span></button></Link>
                </div>
                <div>
                    <div className="relative overflow-hidden rounded-2xl">
                        <Image
                            src="/house.jpg"
                            alt="Imagem representativa"
                            width={500}
                            height={300}
                            className="h-auto w-full rounded-2xl"
                        />
                        <div className="absolute inset-x-0 bottom-0 z-10 bg-linear-to-t from-black/70 to-transparent p-4 sm:p-6">
                            <div className="max-w-xs rounded-2xl border border-white/15 bg-white/10 p-4 text-white backdrop-blur-md">
                                <p className="font-serif text-sm">Apostamos no seu</p>
                                <h2 className=" text-2xl font-semibold text-destaque">Conforto sempre.</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Segunda parte da secção */}
            <div className='flex flex-col gap-4 p-6 sm:p-10 '>
                <div className='w-full h-0.5 border-t border-cinza-ink'></div>
                <span className='text-destaque text-xs'>Valores</span>
                <h1 className='font-serif text-3xl leading-tight sm:text-4xl max-w-xl'>O que os nossos imoveis podem entregar.</h1>
                <div>
                    <div className='flex flex-col gap-2 sm:grid sm:grid-cols-3 sm:gap-6'>
                        {valores.map((item, index) => (
                            <div key={index} className='flex flex-col gap-1 sm:gap-1 p-4 rounded-2xl  border-white/15 bg-white/5 text-white backdrop-blur-md'>
                                <span className='text-destaque'>{item.icone}</span>
                                <h2 className='font-serif text-base '>{item.nome}</h2>
                                <p className='text-cinza font-serif text-xs'>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}
