'use client'

import { signIn } from 'next-auth/react'
import ButtonGoogle from '@/app/components/ButtonGoogle'

export default function LoginFormGoogle () {
  const handleGoogleSignIn = async () => {
    await signIn('google', {
      redirect: true,
      callbackUrl: '/dashboard'
    })
  }

  return (
    <ButtonGoogle type='button' onClick={handleGoogleSignIn}>
      Google
    </ButtonGoogle>
  )
}
