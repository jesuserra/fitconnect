import { ReactElement } from 'react'
import AddTrain from './Modals/AddTrain'
import Image from 'next/image'

export default function ButtonCalendar ({ title }: { title: string }): ReactElement {
  const openModal = () => {
    const modal = document.getElementById('createTrainModal') as HTMLDialogElement
    modal?.showModal()
  }

  return (
    <>
      <AddTrain />
      <button className='text-white font-bold rounded-xl w-48 h-48 relative overflow-hidden' onClick={openModal}>
        <Image src='/calendar.webp' alt='Añadir entrenamiento' className='absolute top-0 left-0 object-cover w-48 h-48' width={192} height={192} />
        <div className='bg-black flex opacity-50 w-full h-full  justify-center items-center hover:opacity-35 text-white'>
          <span className='text-xl font-bold'>{title}</span>
        </div>
      </button>
    </>
  )
}
