'use client'

import Input from '@/app/components/Input'
import { FormEvent, ReactElement, useState } from 'react'
import Container from '@/app/components/Container'
import Button from '@/app/components/Button'
import { login } from '@/app/services/athleteServices'

export default function LoginPage (): ReactElement {
  const [athlete, setAthlete] = useState({
    username: '',
    password: ''
  })

  const handleSubmitAthlete = async (e: FormEvent) => {
    e.preventDefault()
    login(athlete.username, athlete.password)
  }

  return (
    <Container>
      <>
        <form className='flex flex-col' onSubmit={handleSubmitAthlete}>
          Usuario:
          <Input type='text' placeholder='Username' value={athlete.username} onChange={e => setAthlete({ ...athlete, username: e })} />
          Contraseña
          <Input type='password' placeholder='Contraseña' value={athlete.password} onChange={e => setAthlete({ ...athlete, password: e })} />
          <Button type='submit'>Enviar</Button>
        </form>
      </>
    </Container>
  )
}
