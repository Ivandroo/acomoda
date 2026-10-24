"use client"
import { Search } from 'lucide-react'
import React, { useState, useMemo } from 'react'
import { imoveis, TipoImovel } from '@/data/imoveis'
import FiltroTipo from './FiltroTipo'
import Image from 'next/image'
import Link from 'next/link'

type Filtro = "todos" | TipoImovel

export default function Imoveis() {
  const [filtroAtivo, setFiltroAtivo] = useState<Filtro>("todos")
  const [busca, setBusca] = useState("")

  const resultados = useMemo(() => {
    return imoveis.filter(imovel => {
        const passaTipo = filtroAtivo === "todos" || imovel.tipo === filtroAtivo
        const passaBusca = imovel.titulo.toLowerCase().includes(busca.toLowerCase()) || imovel.local.toLowerCase().includes(busca.toLowerCase())

        return passaTipo && passaBusca
    })
  }, [filtroAtivo, busca])


  return (
    <main className="p-1 sm:p-2">
      <section className="p-1 sm:p-2 rounded-4xl bg-white text-fundo">
        <div className="flex flex-col gap-4 sm:gap-6 p-6 sm:p-10">
            <span className='text-destaque text-xs uppercase font-medium'> Acomodações </span>
            <div className="flex flex-col sm:flex-row items-center gap-4">
                <label htmlFor="" className='flex w-full items-center justify-center gap-2'>
                    <input type="text" name="" id="" value={busca} placeholder={`Busque por titulo...`} onChange={e => setBusca(e.target.value)} className='w-full bg-branco text-white py-2 px-4 rounded-2xl font-serif placeholder:text-cinza-ink border border-white/15 focus:outline-none focus:ring-1 focus:ring-destaque'/>
                </label>
                <div>
                    <FiltroTipo ativo={filtroAtivo} onChange={setFiltroAtivo} />
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <p className='text-xs text-cinza-ink'>{resultados.length} alojamentos encontrados</p>
                <div className='flex flex-col items-center justify-center gap-4 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    {resultados.map(item => (
                        <Link key={item.id} href={`/imoveis/${item.id}`} className='p-1 hover:border hover:border-destaque rounded-xl transition-opacity '>
                            <div className='flex flex-col gap-2'>
                                <div>
                                    <Image src={item.imagem} alt={item.titulo} width={300} height={200} className='w-72 rounded-lg'/>
                                </div>
                                <div className='flex flex-col px-1'>
                                    <h3 className='flex gap-1 text-sm capitalize text-fundo font-serif font-bold'>{item.tipo}, <p>{item.local}</p></h3>
                                    <span className='font-serif text-xs text-cinza-ink'>{item.preco} kz por noite</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                {resultados.length === 0 && (
                    <p className='font-serif text-branco text-sm'>Nenhum resultado encontrado</p>
                )}
            </div>
        </div>
      </section>
    </main>
  )
}
