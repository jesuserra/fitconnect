import { signOut } from 'next-auth/react'
import React from 'react'
import Button from './Button'

export default function LogoutButton () {
  const handleLogout = async () => {
    await signOut({
      redirect: true,
      callbackUrl: '/'
    })
  }

  return (
    <Button onClick={handleLogout}>Cerrar sesion</Button>
  )
}
