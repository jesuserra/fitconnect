import { ReactElement } from 'react'

export default function ButtonCalendar ({ title }: { title: string }): ReactElement {
  return (
    <button className='text-white font-bold rounded-xl w-48 h-48 relative overflow-hidden'>
      <img src='/calendar.webp' alt='Añadir entrenamiento' className='w-full h-full absolute top-0 left-0 object-cover' />
      <div className='bg-black flex opacity-50 w-full h-full  justify-center items-center hover:opacity-35 text-white'><span className='text-xl font-bold'>{title}</span></div>
    </button>
  )
}
