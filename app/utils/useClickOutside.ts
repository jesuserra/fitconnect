import { Dispatch, RefObject, SetStateAction, useEffect, useRef } from 'react'

export const useClickOutside = <T extends HTMLDivElement | HTMLLIElement = HTMLDivElement>(setOpen: Dispatch<SetStateAction<boolean>>): RefObject<T> => {
  const popoverRef = useRef<T>(null)

  useEffect(() => {
    // Agregar un manejador de eventos para cerrar el popover al hacer clic fuera de él
    const handleClickOutside = (event: MouseEvent): void => {
      if (popoverRef.current?.contains(event.target as Node) === false) {
        setOpen(false)
      }
    }

    // Agregar el manejador de eventos al documento
    document.addEventListener('mousedown', handleClickOutside)
    // Limpiar el manejador de eventos al desmontar el componente
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [popoverRef, setOpen])

  return popoverRef
}

// COMO USAR
// import { useClickOutside } from '@/lib/hooks/useClickOutside'
// const popoverRef = useClickOutside(setIsOpen)
// <div className={styles.dropdowncontent} ref={popoverRef}>
