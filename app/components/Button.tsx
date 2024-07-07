import React, { ReactElement } from 'react'

interface ButtonProps {
  children: string
  onClick?: () => void
  secondary?: boolean
}

export default function Button ({ children, onClick, secondary }: ButtonProps): ReactElement {
  if (secondary === true) {
    return (
      <button className='flex justify-center bg-[#e007] hover:bg-[#e005] border border-[--white] rounded-xl overflow-hidden px-4 py-2 w-40 text-white' onClick={onClick}>{children}</button>
    )
  }
  return (
    <button className='flex justify-center custom-line bg-[--black] hover:bg-[--black-hover] rounded-xl overflow-hidden px-4 py-2 w-40 text-white' onClick={onClick}>{children}</button>
  )
}
