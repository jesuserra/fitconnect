import Container from '../components/Container'
import MyCarousel from '../components/Carousel/MyCarousel'

export default function Home () {
  function Button ({ title }: { title: string }) {
    return (
      <button className='text-white font-bold rounded-xl w-48 h-48 relative overflow-hidden'>
        <img src='/calendar.webp' alt='Añadir entrenamiento' className='w-full h-full absolute top-0 left-0 object-cover' />
        <div className='bg-black flex opacity-50 w-full h-full  justify-center items-center hover:opacity-35 text-white'><span className='text-xl font-bold'>{title}</span></div>
      </button>
    )
  }

  return (
    <Container>
      <>
        <h1 className='text-4xl font-bold text-white mb-4'>Retos recomendados</h1>
        <MyCarousel />
        <div className='flex justify-between items-center mt-10'>
          <Button title='Añadir entrenamiento' />
        </div>
      </>
    </Container>
  )
}
