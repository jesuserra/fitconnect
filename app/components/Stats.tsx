import React, { ReactElement } from 'react'

export default function Stats (): ReactElement {
  return (
    <div className='flex flex-col items-start justify-start w-[600px]'>
      <div className='flex flex-row items-center justify-center w-full gap-4'>
        <h2 className='flex justify-center text-4xl font-bold text-white mt-4 w-1/3'>70 +</h2>
        <h2 className='flex justify-center text-4xl font-bold text-white mt-4 w-1/3'>100 +</h2>
        <h2 className='flex justify-center text-4xl font-bold text-white mt-4 w-1/3'>30 +</h2>
      </div>
      <div className='flex flex-row items-center justify-center w-full gap-4'>
        <p className='flex justify-center text-[28px] w-1/3 text-center'>retos publicados</p>
        <p className='flex justify-center text-[28px] w-1/3 text-center'>rutinas</p>
        <p className='flex justify-center text-[28px] w-1/3 text-center'>30 atletas</p>
      </div>
    </div>
  )
}
