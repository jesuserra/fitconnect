import React, { InputHTMLAttributes } from 'react'

interface InputProps {
  type?: InputHTMLAttributes<HTMLInputElement>['type']
  placeholder: string
  value: string
  onChange: (value: string) => void
  error?: boolean
}

export default function Input ({ type, placeholder, value, onChange, error }: InputProps) {
  return (
    <input type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className={`bg-transparent text-gray-300 w-full px-2 py-[4px] border-[1px] rounded ${error ? 'border-red-500' : 'border-gray-300'}`}
    />
  )
}
