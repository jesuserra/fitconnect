'use client'

import { useState, CSSProperties } from 'react'
import { useClickOutside } from '../utils/useClickOutside'

interface IOption {
  id: string
  value: string
}
interface DropdownProps {
  options: IOption[]
  style?: CSSProperties
  error?: boolean
  onChange: (option: IOption) => void
  defaultValue?: IOption
}

export default function Dropdown ({ options, style, error, onChange, defaultValue = { id: '0', value: 'Todos' } }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const popoverRef = useClickOutside(setIsOpen)

  const [value, setValue] = useState(defaultValue)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option: IOption) => {
    setValue(option)
    setIsOpen(false)
    onChange(option)
  }

  return (
    <div ref={popoverRef} className='relative text-left w-64 z-20 h-full' style={style}>
      <button
        onClick={toggleDropdown}
        className={` px-2 py-[4px] border-[1px] rounded w-full  border-gray-200 text-gray-400 inline-flex justify-between items-center dark:bg-[#20293A] dark:border-slate-700 ${error !== undefined ? 'border-red-500' : ' border-gray-300'}`}
      >
        <span className='text-base'>{value.value}</span>
        <svg className='ml-2 h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7' />
        </svg>
      </button>

      <div className={`${isOpen ? 'bg-background z-20 ease-out duration-300 opacity-100 scale-100' : 'hidden transition ease-in duration-150 opacity-0 scale-95'} absolute z-50 mt-2 w-full rounded-md shadow-lg bg-white border border-gray-200 dark:bg-[#20293A] dark:border-slate-700`}>
        <div className='py-1 text-sm' role='menu' aria-orientation='vertical' aria-labelledby='options-menu'>
          {options.map((option, index) => (
            <a href='#' key={index} onClick={() => handleOptionClick(option)}>
              <div key={index} className='items-center gap-2 flex px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#161d2a] pointer Dialog Dialog text-gray-400'>
                <span className='text-base'>{option.value}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
