import { Button } from '@/components/ui/button'
import { signOut } from 'next-auth/react'
import React from 'react'

export default function LogoutButton () {
  const handleLogout = async () => {
    await signOut({
      redirect: true,
      callbackUrl: '/'
    })
  }

  return (
    <Button onClick={handleLogout}>Cerrar session</Button>
  )
}
