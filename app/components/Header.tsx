import React from 'react'
import ItemHeader from './ItemHeader'
import User from './User'

const routes = [
  { name: 'Home', path: '/' },
  { name: 'Retos', path: '/challenges' },
  { name: 'Rutinas', path: '/routines' },
  { name: 'Atletas', path: '/athletes' },
  { name: 'Clasificación', path: '/classification' },
  { name: 'Contacta', path: '/contact' }
]
export default function Header () {
  return (
    <div className='px-8 top-0 z-10 w-full items-center justify-between font-mono text-sm fixed h-14 border-b border-gray-300 backdrop-blur-3xl flex'>
      <ul className='flex justify-center gap-6 h-14 items-center'>
        {routes.map((route) => (
          <ItemHeader title={route.name} href={route.path} key={route.path} />
        ))}
      </ul>
      <User />
    </div>
  )
}
