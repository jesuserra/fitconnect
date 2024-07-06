import { ReactElement, ReactNode } from 'react'
import Close from '../Icons/Close'

interface DialogProps {
  id: string
  children: ReactNode
  handleClose?: () => void
}

export default function Dialog ({ id, children, handleClose }: DialogProps): ReactElement {
  return (
    // Borrar los datos del modal al cerrar
    <dialog id={id} className='p-2 border-2xl bg-background rounded-3xl'>
      <button onClick={handleClose} className='w-full flex justify-end items-center mb-2'>
        <Close color='var(--black)' />
      </button>
      <div className='justify-end flex flex-col w-full items-end p-2'>
        {children}
      </div>
    </dialog>
  )
}
