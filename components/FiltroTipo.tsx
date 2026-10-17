"use client"

import { BedDouble, Building, Hotel, House, Houses } from 'lucide-react'
import React from 'react'

type Tipo = "todos" | "apartamento" | "residencia" | "quarto" | "hotel"
const opcoes: {label: string, value: Tipo, icon: React.ReactNode}[] = [
    {
        label: "Todos",
        value: "todos",
        icon: <Houses />
    },
    {
        label: "Apartamentos",
        value: "apartamento",
        icon: <Building />
    },
    {
        label: "Residencia",
        value: "residencia",
        icon: <House />
    },
    {
        label: "Quartos",
        value: "quarto",
        icon: <BedDouble />
    },
    {
        label: "Hotel",
        value: "hotel",
        icon: <Hotel />
    },
]

export default function FiltroTipo({ ativo, onChange }: { ativo: Tipo, onChange: (t: Tipo) => void}) {
  return (
    <div className='flex items-center gap-4 bg-fundo/25 text-white py-2 px-4 rounded-2xl placeholder:text-cinza-ink border border-white/15 focus:outline-none focus:ring-2 focus:ring-destaque'>
        <div className='hidden md:flex gap-2'>
            {opcoes.map(op => (
                <button key={op.value} onClick={() => onChange(op.value)} className={ativo === op.value ? "flex items-center bg-destaque rounded-lg py-1 px-2 text-white" : "flex items-center bg-cinza rounded-lg text-gray-700 py-1 px-2 "}>
                    <span className='text-xs'>{op.label}</span>
                </button>
            ))}
        </div>
        <div className='md:hidden relative'>
            <select name="" id="" value={ativo} onChange={(e) => onChange(e.target.value as Tipo)} className='font-serif'>
                {opcoes.map(op => (
                    <option key={op.value} value={op.value} className={ativo === op.value ? "flex items-center bg-destaque rounded-xl py-1 px-2 text-white" : "flex items-center bg-cinza rounded-xl text-gray-700 py-1 px-2 "}>{op.label}</option>
                ))}
            </select>
        </div>
      
    </div>
  )
}
