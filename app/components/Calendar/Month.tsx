import { ReactElement } from 'react'
import Day from './Day'

export interface IDate {
  date: string
  description: string
}

interface MonthProps {
  month: string
  days: number
  year: number
  firstDay: number
  numberMonth: number
  trains: IDate[]
  resourceId?: string
  onDayClick: (month: number, day: number, description?: string) => void
  handleAddTraining: (month: number, day: number, train: string) => void
}

export default function Month ({ trains, numberMonth, year, month, days, firstDay, onDayClick, handleAddTraining }: MonthProps): ReactElement {
  const daysHeader1 = ['L', 'M', 'X', 'J', 'V', 'S', 'D']
  let isWeekend = false

  const today = new Date()

  return (
    <div className='mb-6'>
      <span className='text-base'>{month}</span>
      <div className='flex flex-row gap-[10px]'>
        {/* Header L M X J V S D */}
        {daysHeader1.map((day, index) => (
          <span className='flex justify-center items-center w-7 h-7' key={index}>{day}</span>
        ))}
      </div>
      <div className='flex flex-row gap-[10px] flex-wrap w-[270px]'>
        {/* Primeros días del mes que no se pintan */}
        {Array.from({ length: firstDay === 0 ? 6 : firstDay - 1 }).map((_, i) => (
          <div className='flex justify-center items-center w-7 h-7 cursor-default select-none' key={i} />
        ))}
        {/* Resto días del mes */}
        {Array.from({ length: days }).map((_, i) => {
          const dayOfMonth = i + 1
          isWeekend = new Date(year, numberMonth, dayOfMonth).getDay() === 0 || new Date(year, numberMonth, dayOfMonth).getDay() === 6
          const paddedDay = dayOfMonth.toString().padStart(2, '0')
          const paddedMonth = (numberMonth + 1).toString().padStart(2, '0')

          // Es festivo unico si el día de inicio y fin son iguales y el día de inicio es igual al día actual
          const festivoUnico = trains?.find((f) => (f.date === `${year}-${paddedMonth}-${paddedDay}`))

          // Hoy
          let type = 'normal' as 'normal' | 'today' | 'holiday' | 'weekend'
          if (today.getFullYear() === year && today.getMonth() === numberMonth && today.getDate() === dayOfMonth) {
            type = 'today'
          } else if (festivoUnico != null) {
            type = 'holiday'
          } else if (isWeekend) {
            type = 'weekend'
          }
          return (
            <Day
              key={i}
              type={type}
              day={dayOfMonth}
              description={festivoUnico?.description}
              handleDayClick={(day: number, description?: string) => onDayClick(day, numberMonth, description)}
              handleAddTraining={(day: number, train: string) => {
                handleAddTraining(numberMonth, day, train)
              }}

            />
          )
        }
        )}
      </div>
    </div>
  )
}
