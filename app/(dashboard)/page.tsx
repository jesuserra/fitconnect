'use client'

import Container from '../components/Container'
import Stats from '../components/Stats'
import Image from 'next/image'
import { Trophy } from 'lucide-react'
import HomeCard from '../components/Cards/HomeCard'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Button from '../components/Button'

export default function Home () {
  return (
    <Container>
      <>
        <div className='flex flex-row relative'>
          <h1 className='text-[140px] font-bold'>FitConnect</h1>
          <div
            className='flex justify-between items-center w-[700px] h-96 absolute right-0'
            style={{
              maskImage: 'linear-gradient(black 80%, transparent), linear-gradient(to right, transparent, black 80% ), linear-gradient(to top, black 80%, transparent)',
              maskComposite: 'intersect'
            }}
          >
            <Image src='/challenges/23.png' alt='home' className='w-full h-full object-cover' width={700} height={400} />
          </div>
        </div>
        <Stats />
        <div className='left-0 border mt-10 border-l-0 border-r-0 py-6 border-slate-400'>
          <div className='flex flex-rop gap-4 items-center'><Trophy /><h2>Compite con tus amigos</h2></div>
          <div className='flex flex-rop gap-4 items-center right-0'><Trophy /><h2>Obten puntos al cumpliendo desafíos</h2></div>
          <div className='flex flex-rop gap-4 items-center'><Trophy /><h2>Obten un puesto en la clasificación global</h2></div>
          <div className='flex flex-rop gap-4 items-center'><Trophy /><h2>Ten siempre retos a tu alcance</h2></div>
        </div>
        <div className='left-0 border-b mt-10  py-6 border-slate-400 grid grid-cols-4 gap-4'>
          <HomeCard title='Registra tus entrenamientos' description='Observa de un vistazo tus entrenamientos' image='/calendarExample.png' />
          <HomeCard title='Ten siempre rutinas disponibles' description='Mas de 100 rutinas disponibles gratuitamente' image='/challenges/21.jpg' />
          <HomeCard title='Aparece en la clasificación global' description='Demuestra lo que vales, gana puntos y obten un puesto en la clasificación global' image='/challenges/22.jpg' />
          <HomeCard title='Retos semanales' description='Cada semana un nuevo reto a completar' image='/challenges/19.jpg' />
        </div>
        <div className='w-full flex flex-col items-center'>

          <form onSubmit={() => console.log('submit')} className='w-[750px] flex flex-col gap-4'>
            <h1 className='text-4xl font-bold text-white mb-4 my-10'>
              ¿Quieres ponerte en contacto con nosotros?
            </h1>
            <div className='flex flex-col gap-4'>
              <div className='flex flex-row gap-4'>
                <Input placeholder='Tu nombre' />
                <Input placeholder='Tu email' />
              </div>
              <Textarea placeholder='Tu mensaje' />
            </div>
            <Button type='submit'>Enviar</Button>
          </form>
        </div>
      </>
    </Container>
  )
}
