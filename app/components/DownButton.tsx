import React, { ReactElement, useState } from 'react'
import BorderArrow from './Icons/BorderArrow'
import SolidArrow from './Icons/SolidArrow'

interface DownButtonProps {
  clicked: boolean
  onClick?: () => void
}

export default function DownButton ({ clicked, onClick }: DownButtonProps): ReactElement {
  const [hover, setHover] = useState(clicked ? 'var(--red)' : 'white')
  return (
    <button
      className='rotate-180 hover:bg-[var(--light-red)] p-2 rounded-xl text-white w-auto'
      onMouseEnter={() => setHover('var(--red)')}
      onMouseLeave={() => setHover('white')}
      onClick={onClick}
    >
      {clicked
        ? <SolidArrow color={hover} />
        : <BorderArrow color={hover} />}
    </button>
  )
}
