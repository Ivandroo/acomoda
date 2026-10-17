import PageTitle from '@/components/PageTitle'
import Sobre from '@/components/Sobre'
import React from 'react'

export default function page() {
  return (
    <main>
      <PageTitle title='Sobre' subtitle='Venha saber mais sobre a Acomoda' />
      <Sobre />
    </main>
  )
}
