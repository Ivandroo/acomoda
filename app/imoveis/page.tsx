import Imoveis from '@/components/Imoveis'
import PageTitle from '@/components/PageTitle'
import React from 'react'

export default function page() {
  return (
    <div>
      <PageTitle title='Imoveis' subtitle='Encontre os melhores imoveis para lugar' />
      <Imoveis />
    </div>
  )
}
