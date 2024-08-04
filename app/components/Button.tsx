import React, { ReactElement } from 'react'

interface ButtonProps {
  children: string
  onClick?: () => void
  secondary?: boolean
  type?: 'submit' | 'button'
}

export default function Button ({ children, onClick, secondary, type }: ButtonProps): ReactElement {
  if (secondary === true) {
    return (
      <button type={type === 'submit' ? 'submit' : 'button'} className='flex justify-center bg-[#e007] hover:bg-[#e005] border border-[--white] rounded-xl overflow-hidden  py-2 w-40 text-white' onClick={onClick}>{children}</button>
    )
  }
  return (
    <button type={type === 'submit' ? 'submit' : 'button'} className='flex justify-center custom-line bg-[--black] hover:bg-[--black-hover] rounded-xl overflow-hidden py-2 w-40 text-white' onClick={onClick}>{children}</button>
  )
}
