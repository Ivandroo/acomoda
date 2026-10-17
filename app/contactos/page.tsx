import Contacto from '@/components/Contacto'
import PageTitle from '@/components/PageTitle'
import React from 'react'

export default function page() {
  return (
    <div>
      <PageTitle title='Contacto' subtitle='Fale conosco a fim de tirar suas dúvidas' />
      <Contacto />
    </div>
  )
}
