'use client'

import { ReactElement, useContext } from 'react'
import { FilterContext } from './userContext'

export default function Authenticated ({ children }: { children: ReactElement }): ReactElement {
  const { state } = useContext(FilterContext)
  console.log(state)
  if (state.userId !== undefined && state.userId !== null && state.userId !== '') {
    return (
      <>{children}</>
    )
  } else {
    return (
      <></>
    )
  }
}
