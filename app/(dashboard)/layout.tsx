import { ReactNode } from 'react'
import Header from '../components/Header'
import { auth } from '@/auth'

export default async function RootLayout ({ children }: Readonly<{ children: ReactNode }>) {
  const session = await auth()

  return (
    <>
      <Header athlete={session?.user} />
      {children}
    </>
  )
}
