import React, { ReactElement } from 'react'

interface ButtonProps {
  children: string
  onClick?: () => void
}

export default function Button ({ children, onClick }: ButtonProps): ReactElement {
  return (
    <button className='flex justify-center custom-line bg-[--black] hover:bg-[--black-hover] rounded-xl overflow-hidden px-4 py-2 w-40 text-white' onClick={onClick}>{children}</button>
  )
}
