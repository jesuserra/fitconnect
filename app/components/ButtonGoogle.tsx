import React, { ReactElement } from 'react'
import { FaGoogle } from 'react-icons/fa6'

interface ButtonProps {
  children: string
  onClick?: () => void
  type?: 'submit' | 'button'
}

export default function Button ({ children, onClick, type }: ButtonProps): ReactElement {
  return (
    <button type={type === 'submit' ? 'submit' : 'button'} className='items-center flex justify-center custom-line bg-[--black] hover:bg-[--black-hover] rounded-xl overflow-hidden px-4 py-2 w-40 gap-2 text-white h-full' onClick={onClick}>
      <FaGoogle className='mr-2 h-4 w-4' />
      {children}
    </button>
  )
}
