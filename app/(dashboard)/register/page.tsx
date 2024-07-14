'use client'

import Button from '@/app/components/Button'
import Container from '@/app/components/Container'
import { ICreateAthlete } from '@/app/models/Athlete'
import { createAthlete } from '@/app/services/athleteServices'
import { countries } from '@/app/utils/Helpers'
import { Input } from '@/components/ui/input'
import { FormEvent, ReactElement, useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

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
    e.preventDefault()
    createAthlete(athlete)
  }

  return (
    <Container>
      <>
        <form className='flex flex-col' onSubmit={handleSubmitAthlete}>
          Usuario:
          <Input type='text' placeholder='Username' value={athlete.username} onChange={e => setAthlete({ ...athlete, username: e.target.value })} />
          Name:
          <Input type='text' placeholder='Nombre' value={athlete.name} onChange={e => setAthlete({ ...athlete, name: e.target.value })} />
          Apellidos:
          <Input type='text' placeholder='Apellido' value={athlete.surnames} onChange={e => setAthlete({ ...athlete, surnames: e.target.value })} />
          Email:
          <Input type='email' placeholder='Email' value={athlete.email} onChange={e => setAthlete({ ...athlete, email: e.target.value })} />
          Edad:
          <Input type='number' placeholder='Edad' onChange={e => setAthlete({ ...athlete, age: Number(e.target.value) })} value={athlete.age.toString()} />
          ¿A qué país quieres representar?:
          {/* <FlagDropdown onChange={e => setAthlete({ ...athlete, country: e })} options={countries} /> */}
          <Select onValueChange={e => setAthlete({ ...athlete, country: e })}>
            <SelectTrigger>
              <SelectValue placeholder='Selecciona tu país' />
            </SelectTrigger>
            <SelectContent>
              {countries.map((country, index) => (
                <SelectItem key={index} value={country.id}>
                  <div className='flex items-center gap-2'>
                    <img className='w-6 h-4' src={`https://flagcdn.com/${country.id}.svg`} alt='User Country Flag' />
                    {country.value}
                  </div>
                </SelectItem>
              ))}

            </SelectContent>
          </Select>
          Contraseña
          <Input type='password' placeholder='Contraseña' value={athlete.password} onChange={e => setAthlete({ ...athlete, password: e.target.value })} />
          <Button type='submit'>Enviar</Button>
        </form>
      </>
    </Container>
  )
}
