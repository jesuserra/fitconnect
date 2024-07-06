import React, { ReactElement, useState } from 'react'
import BorderArrow from './Icons/BorderArrow'
import SolidArrow from './Icons/SolidArrow'

export default function UpButton ({ clicked, onClick }: { clicked: boolean, onClick?: () => void }): ReactElement {
  const [hover, setHover] = useState(clicked ? 'var(--green)' : 'white')
  return (
    <button
      className='hover:bg-[var(--light-green)] p-2 rounded-xl text-white w-auto'
      onMouseEnter={() => setHover('var(--green)')}
      onMouseLeave={() => setHover('white')}
      onClick={onClick}
    >
      {clicked
        ? <SolidArrow color={hover} />
        : <BorderArrow color={hover} />}
    </button>
  )
}
