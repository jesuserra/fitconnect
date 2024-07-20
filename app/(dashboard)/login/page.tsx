'use client'

import Button from '@/app/components/Button'
import { login } from '@/app/services/athleteServices'
import { Input } from '@/components/ui/input'
import { FormEvent, useState, ReactElement, useContext } from 'react'
import Container from '@/app/components/Container'
import { FilterContext } from '@/app/components/userContext'

export default function LoginPage (): ReactElement {
  const [athlete, setAthlete] = useState({
    username: '',
    password: ''
  })

  const filterContext = useContext(FilterContext)
  const { setState } = filterContext

  const handleSubmitAthlete = async (e: FormEvent) => {
    e.preventDefault()
    const id = await login(athlete)
    console.log(id)
    if (id.message !== 'Athlete not found' && id.message !== 'Invalid password') {
      setState({ userId: id.message })
    }
  }

  return (
    <Container>
      <form className='flex flex-col' onSubmit={handleSubmitAthlete}>
        Usuario:
        <Input type='text' placeholder='Username' value={athlete.username} onChange={e => setAthlete({ ...athlete, username: e.target.value })} />
        Contraseña
        <Input type='password' placeholder='Contraseña' value={athlete.password} onChange={e => setAthlete({ ...athlete, password: e.target.value })} />
        <Button type='submit'>Enviar</Button>
      </form>
    </Container>
  )
}
