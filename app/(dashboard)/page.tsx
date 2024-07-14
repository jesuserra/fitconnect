import Container from '../components/Container'
import MyCarousel from '../components/Carousel/MyCarousel'
import Stats from '../components/Stats'
import Image from 'next/image'
import ButtonCalendar from '../components/ButtonCalendar'
import { Trophy } from 'lucide-react'

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
        <div className='left-0 border mt-10 border-l-0 border-r-0 py-6'>
          <div className='flex flex-rop gap-4 items-center'><Trophy /><h2>Compite con tus amigos</h2></div>
          <div className='flex flex-rop gap-4 items-center right-0'><Trophy /><h2>Obten puntos al cumpliendo desafíos</h2></div>
          <div className='flex flex-rop gap-4 items-center'><Trophy /><h2>Obten un puesto en la clasificación global</h2></div>
          <div className='flex flex-rop gap-4 items-center'><Trophy /><h2>Ten siempre retos a tu alcance</h2></div>
        </div>
        <h1 className='text-4xl font-bold text-white mb-4 my-10'>
          Retos recomendados
        </h1>
        <MyCarousel />
        <div className='flex justify-between items-center mt-10'>
          <ButtonCalendar title='Añadir entrenamiento' />
        </div>
      </>
    </Container>
  )
}
