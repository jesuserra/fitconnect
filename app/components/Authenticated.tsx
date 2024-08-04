'use client'

import { useState, useEffect, ReactElement } from 'react'
import { Session } from 'next-auth'
import { getSession } from 'next-auth/react'

export default function Authenticated ({ children }: { children: ReactElement }) {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    getSession()
      .then((session) => {
        setSession(session)
      })
      .catch((error) => {
        console.error(error)
        setSession(null)
      })
  }, [])

  if (session != null) {
    return (
      <>
        {children}
      </>
    )
  } else {
    return (
      <></>
    )
  }
}
