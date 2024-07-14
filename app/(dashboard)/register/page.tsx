'use client'

import Button from '@/app/components/Button'
import Container from '@/app/components/Container'
import FlagDropdown from '@/app/components/FlagDropdown'
import Input from '@/app/components/Input'
import { ICreateAthlete } from '@/app/models/Athlete'
import { createAthlete } from '@/app/services/athleteServices'
import { countryMap } from '@/app/utils/Helpers'
import { FormEvent, ReactElement, useState } from 'react'

export default function RegisterPage (): ReactElement {
  const [athlete, setAthlete] = useState<ICreateAthlete>({
    username: '',
    name: '',
    surnames: '',
    age: 0,
    country: '',
    email: '',
    password: ''
  })

  const handleSubmitAthlete = async (e: FormEvent) => {
    createAthlete(athlete)
  }

  const countries = Object.keys(countryMap)

  return (
    <Container>
      <>
        <form className='flex flex-col' onSubmit={handleSubmitAthlete}>
          Usuario:
          <Input type='text' placeholder='Username' value={athlete.username} onChange={e => setAthlete({ ...athlete, username: e })} />
          Name:
          <Input type='text' placeholder='Nombre' value={athlete.name} onChange={e => setAthlete({ ...athlete, name: e })} />
          Apellidos:
          <Input type='text' placeholder='Apellido' value={athlete.surnames} onChange={e => setAthlete({ ...athlete, surnames: e })} />
          Email:
          <Input type='email' placeholder='Email' value={athlete.email} onChange={e => setAthlete({ ...athlete, email: e })} />
          Edad:
          <Input type='number' placeholder='Edad' onChange={e => setAthlete({ ...athlete, age: Number(e) })} value={athlete.age.toString()} />
          ¿A qué país quieres representar?:
          <FlagDropdown onChange={e => setAthlete({ ...athlete, country: e })} options={countries} />
          Contraseña
          <Input type='password' placeholder='Contraseña' value={athlete.password} onChange={e => setAthlete({ ...athlete, password: e })} />
          <Button type='submit'>Enviar</Button>
        </form>
      </>
    </Container>
  )
}
