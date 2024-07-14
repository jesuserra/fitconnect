import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import { ReactNode } from 'react'
import { FilterProvider } from '../components/userContext'

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
        <FilterProvider>
          <Header />
          {children}
        </FilterProvider>
      </body>
    </html>
  )
}
