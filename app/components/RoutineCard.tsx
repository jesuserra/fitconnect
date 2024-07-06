'use client'

import { useState } from 'react'
import Button from './Button'
import UpButton from './UpButton'
import DownButton from './DownButton'
import CommentModal from './Modals/CommentModal'
import { useRouter } from 'next/navigation'
import { IRoutine } from '@/models/Routines'

export default function RoutineCard ({ routine }: { routine: IRoutine }) {
  const router = useRouter()
  const [showActions, setShowActions] = useState(false)

  const openModal = (id: string) => {
    // Añadir a los params el id del reto
    router.push(`/routines?id=${id}`)
    // url.searchParams.append('routine', id)
    const modal = document.getElementById('commentModal') as HTMLDialogElement
    if (modal !== null) modal?.showModal()
  }

  const closeModal = () => {
    const modal = document.getElementById('commentModal') as HTMLDialogElement
    if (modal !== null) modal.close()
  }

  const handleLeave = () => {
    const modal = document.getElementById('commentModal') as HTMLDialogElement
    if (!modal.open) {
      setShowActions(false)
    }
  }
  return (
    <div onMouseEnter={() => setShowActions(true)} onMouseLeave={handleLeave} className='w-[576px] relative flex flex-col items-center '>
      <div className='overflow-hidden rounded-2xl border border-[--border] hover:border-[--border-hover]'>
        <a
          href={`/routines/${routine.id}`}
          className='flex flex-col items-center md:flex-row md:max-w-xl'
        >
          <img
            className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg'
            src={`routines/${routine.image}`}
            alt={`Imagen de ${routine.title}`}
          />
          <div className='flex flex-col justify-between p-4 leading-normal'>
            <h5 className='truncate-1-line mb-2 text-2xl font-bold tracking-tight text-white' title={routine.title}>
              {routine.title}
            </h5>
            <p className='truncate-2-lines mb-3 font-normal text-white truncate-2-lines'>
              {routine.description}
            </p>
            <div className='flex justify-end items-center'>
              <Button onClick={() => console.log('Llamada añadir a mis retos')}>
                Añadir a mis rutinas
              </Button>
            </div>
          </div>
        </a>
        {showActions && (
          <div className='flex items-center opacity-75 bg-black mx-9 w-[504px] absolute bottom-[-30px] gap-4 p-2 rounded-xl z-2'>
            <div>
              <UpButton clicked={false} />
              <DownButton clicked={false} />
            </div>
            <span className='font-bold text-white'>
              <button onClick={() => openModal(routine.id)}>Ver comentarios</button>
              <CommentModal handleClose={closeModal} />
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
{
  /*
    <div classNameName='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <a href='#'>
        <img
          classNameName='rounded-t-lg w-full'
          src='/Murph.jpg'
          alt='product image'
        />
      </a>
      <div classNameName='px-5 pb-5'>
        <a href='#'>
          <h5 classNameName='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
            {title}
          </h5>
        </a>
        <div classNameName='flex items-center mt-2.5 mb-5'>
          <div classNameName='flex items-center space-x-1 rtl:space-x-reverse'>
            <svg
              classNameName='w-4 h-4 text-yellow-300'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 22 20'
            >
              <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
            </svg>
            <svg
              classNameName='w-4 h-4 text-yellow-300'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 22 20'
            >
              <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
            </svg>
            <svg
              classNameName='w-4 h-4 text-yellow-300'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 22 20'
            >
              <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
            </svg>
            <svg
              classNameName='w-4 h-4 text-yellow-300'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 22 20'
            >
              <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
            </svg>
            <svg
              classNameName='w-4 h-4 text-gray-200 dark:text-gray-600'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 22 20'
            >
              <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
            </svg>
          </div>
          <span classNameName='bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3'>
            5.0
          </span>
        </div>
        <div classNameName='flex items-center justify-between'>
          <span classNameName='text-3xl font-bold text-gray-900 dark:text-white'>
            $599
          </span>
          <a
            href='#'
            classNameName='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Añadir a mis retos
          </a>
        </div>
      </div>
    </div> */
}
