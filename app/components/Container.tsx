import { ReactElement } from 'react'

export default function Container ({ children }: { children: ReactElement }): ReactElement {
  return (
    <div className='max-w-[1440px] flex flex-col mx-auto mt-14 p-8 min-h-[calc(100vh-56px)]'>
      {children}
    </div>
  )
}
