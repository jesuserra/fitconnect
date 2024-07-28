import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fitconnect',
  description: 'Lleva al máximo tus entrenamientos'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang='es'>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
