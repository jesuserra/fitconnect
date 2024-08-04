'use client'

import { useEffect, useState } from 'react'
import ItemHeader from './ItemHeader'
import User from './User'
import Authenticated from './Authenticated'
import { IAthlete } from '../models/Athlete'
import LogoutButton from './LogoutButton'
import { useRouter } from 'next/navigation'
import Button from './Button'

const routes = [
  { name: 'Home', path: '/', authenticated: false },
  { name: 'Retos', path: '/challenges', authenticated: false },
  { name: 'Rutinas', path: '/routines', authenticated: false },
  { name: 'Atletas', path: '/athletes', authenticated: false },
  { name: 'Clasificación', path: '/classification', authenticated: false },
  { name: 'Calendario', path: '/calendar', authenticated: true }
]
export default function Header ({ athlete }: { athlete?: IAthlete }) {
  const [_athlete, setAthlete] = useState<IAthlete | null>(athlete ?? null)
  const router = useRouter()
  useEffect(() => {
    if (athlete !== undefined) {
      setAthlete(athlete)
      return
    }
    console.log(_athlete)
  }, [_athlete])

  const handleClick = () => {
    router.push('/login')
  }

  return (
    <div className='px-8 top-0 z-10 w-full items-center justify-between font-mono text-sm fixed h-14 border-b border-gray-300 backdrop-blur-3xl flex'>
      <ul className='flex justify-center gap-6 h-14 items-center'>
        {routes.map((route) => {
          if (!route.authenticated) {
            return <ItemHeader title={route.name} href={route.path} key={route.path} />
          } else {
            return (
              <Authenticated key={route.path}>
                <ItemHeader title={route.name} href={route.path} />
              </Authenticated>
            )
          }
        })}
      </ul>
      <div className='flex flex-row gap-12 items-center'>
        <Authenticated>
          <div className='flex flex-row gap-2 items-center'>Bienvenido {_athlete?.name}
            {_athlete?.image !== undefined && <User imageUrl={_athlete?.image} />}
          </div>
        </Authenticated>
        {(_athlete !== null)
          ? <LogoutButton />
          : <Button onClick={handleClick}>Iniciar sesión</Button>}
      </div>
    </div>
  )
}
