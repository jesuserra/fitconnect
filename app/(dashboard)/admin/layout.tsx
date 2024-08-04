'use client'
import Container from '@/app/components/Container'
import { ReactNode } from 'react'

export default function layout ({ children }: { children: ReactNode }) {
  // Sacar ruta
  const path = window.location.pathname
  console.log(path)
  return (
    <Container>
      <>
        <div className='flex flex-row gap-4 mb-4'>
          <MyButtonLink active={path === '/admin/challenges'} text='Retos' href='/admin/challenges' />
          <MyButtonLink active={path === '/admin/statsChallenge'} text='Estadísticas' href='/admin/statsChallenge' />
        </div>
        {children}
      </>
    </Container>
  )
}

export function MyButtonLink ({ active, text, href }: { active: boolean, text: string, href: string }) {
  return (
    <a
      href={href} className={`h-8 rounded-md px-3 text-xs inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50
          ${active ? 'bg-white text-black shadow hover:bg-[#E2E2E2]' : 'hover:bg-[#272728] hover:text-white'}`}
    >{text}
    </a>
  )
}
