'use client'

import React, { useContext, useEffect, useState } from 'react'
import ItemHeader from './ItemHeader'
import User from './User'
import Authenticated from './Authenticated'
import { FilterContext } from './userContext'
import Button from './Button'
import { getAthleteById } from '../services/athleteServices'
import { IAthlete } from '../models/Athlete'

const routes = [
  { name: 'Home', path: '/' },
  { name: 'Retos', path: '/challenges' },
  { name: 'Rutinas', path: '/routines' },
  { name: 'Atletas', path: '/athletes' },
  { name: 'Clasificación', path: '/classification' }
]
export default function Header () {
  const { state, setState } = useContext(FilterContext)
  const [athlete, setAthlete] = useState<IAthlete>({
    username: '',
    name: '',
    surnames: '',
    age: 0,
    country: '',
    email: '',
    password: '',
    _id: '',
    createdAt: '',
    updatedAt: '',
    description: '',
    image: '',
    points: 0
  })

  useEffect(() => {
    getAthleteById(state.userId)
      .then((athlete) => {
        console.log(athlete)
        setAthlete(athlete)
      })
  },
  [state.userId])

  const handleLogout = () => {
    setState({ userId: '' })
  }

  return (
    <div className='px-8 top-0 z-10 w-full items-center justify-between font-mono text-sm fixed h-14 border-b border-gray-300 backdrop-blur-3xl flex'>
      <ul className='flex justify-center gap-6 h-14 items-center'>
        {routes.map((route) => (
          <ItemHeader title={route.name} href={route.path} key={route.path} />
        ))}
        <Button onClick={handleLogout}>Logout</Button>
      </ul>
      <Authenticated><>Hola {athlete.name}<User /></></Authenticated>
    </div>
  )
}
