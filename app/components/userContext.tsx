'use client'
import { createContext, ReactNode, useEffect, useState } from 'react'

interface FilterState {
  userId: string
}

interface FilterContextProps {
  state: FilterState
  setState: (state: FilterState) => void
}

export const FilterContext = createContext<FilterContextProps>('' as unknown as FilterContextProps)

export function FilterProvider ({ children }: { children: ReactNode }) {
  const [state, setState] = useState<FilterState>({
    userId: ''
  })

  useEffect(() => {
    console.log(state)
  }, [state])

  return (
    <FilterContext.Provider value={{ state, setState }}>
      {children}
    </FilterContext.Provider>
  )
}
