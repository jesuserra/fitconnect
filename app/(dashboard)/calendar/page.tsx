'use client'

import ButtonCalendar from '@/app/components/ButtonCalendar'
import Month from '@/app/components/Calendar/Month'
import Container from '@/app/components/Container'
import React, { useEffect, useState } from 'react'

export default function CalendarPage () {
  const handleMonthClick = (month: number, day: number, description?: string): void => {
    console.log(day, month, description)
  }

  const getFirstDayOfMonth = (year: number, month: number): number => {
    return new Date(year, month, 1).getDay()
  }

  const _year = new Date().getFullYear()
  const [year, setYear] = useState(_year)
  const getDaysInMonth = (year: number, month: number): number => {
    return new Date(year, month + 1, 0).getDate()
  }

  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  const festivos2 = [
    {
      date: '2024-01-01',
      description: 'Año nuevo'
    },
    {
      date: '2024-01-06',
      description: 'Reyes'
    },
    {
      date: '2024-03-19',
      description: 'San José'
    },
    {
      date: '2024-03-29',
      description: 'Jueves Santo'
    }, {
      date: '2024-03-30',
      description: 'Viernes Santo'
    }, {
      date: '2024-05-01',
      description: 'Día del trabajador'
    }, {
      date: '2024-08-15',
      description: 'Asunción'
    }, {
      date: '2024-10-12',
      description: 'Fiesta Nacional'
    }, {
      date: '2024-11-01',
      description: 'Todos los Santos'
    }, {
      date: '2024-12-06',
      description: 'Día de la Constitución'
    }, {
      date: '2024-12-08',
      endDate: '2024-12-08',
      description: 'Inmaculada'
    }, {
      date: '2024-12-25',
      description: 'Navidad'
    }, {
      date: '2024-12-31',
      description: 'Fin de año'
    }
  ]
  const festivos = [
    { date: '2024-03-16', description: 'p' },
    { date: '2024-06-21', description: 'p' },
    { date: '2024-01-04', description: 'p' },
    { date: '2024-04-13', description: 'p' },
    { date: '2024-06-13', description: 'p' },
    { date: '2024-01-28', description: 'psad' },
    { date: '2024-01-31', description: 'p' },
    { date: '2024-02-04', description: 'p' },
    { date: '2024-02-23', description: 'p' },
    { date: '2024-06-19', description: 'p' },
    { date: '2024-06-04', description: 'p' },
    { date: '2024-04-19', description: 'p' },
    { date: '2024-04-06', description: 'p' },
    { date: '2024-03-22', description: 'p' },
    { date: '2024-06-17', description: 'p' },
    { date: '2024-05-05', description: 'p' },
    { date: '2024-02-27', description: 'p' },
    { date: '2024-05-08', description: 'p' },
    { date: '2024-04-18', description: 'p' },
    { date: '2024-05-01', description: 'p' },
    { date: '2024-01-07', description: 'p' },
    { date: '2024-03-04', description: 'p' },
    { date: '2024-02-03', description: 'p' },
    { date: '2024-03-06', description: 'p' },
    { date: '2024-05-09', description: 'p' },
    { date: '2024-01-24', description: 'p' },
    { date: '2024-06-10', description: 'p' },
    { date: '2024-05-17', description: 'p' },
    { date: '2024-01-21', description: 'p' },
    { date: '2024-03-27', description: 'p' },
    { date: '2024-01-20', description: 'p' },
    { date: '2024-06-05', description: 'p' },
    { date: '2024-02-28', description: '4 series de 24 pullups, pullups lastradas al fallo, 4 series de 12 pushups, pushups lastradas al fallo, series de 30 reps pronas' },
    { date: '2024-02-22', description: 'p' },
    { date: '2024-01-10', description: 'p' },
    { date: '2024-06-22', description: 'p' },
    { date: '2024-05-31', description: 'p' },
    { date: '2024-01-02', description: 'p' },
    { date: '2024-03-30', description: 'p' },
    { date: '2024-06-11', description: 'p' },
    { date: '2024-05-06', description: 'p' },
    { date: '2024-02-11', description: 'p' },
    { date: '2024-05-04', description: 'p' },
    { date: '2024-04-16', description: 'p' },
    { date: '2024-01-22', description: 'p' },
    { date: '2024-03-17', description: 'p' },
    { date: '2024-04-01', description: 'p' },
    { date: '2024-01-15', description: 'p' },
    { date: '2024-06-02', description: 'p' },
    { date: '2024-05-14', description: 'p' },
    { date: '2024-04-20', description: 'p' },
    { date: '2024-01-23', description: 'p' },
    { date: '2024-02-19', description: 'p' },
    { date: '2024-06-29', description: 'p' },
    { date: '2024-04-05', description: 'p' },
    { date: '2024-01-06', description: 'p' },
    { date: '2024-04-30', description: 'p' },
    { date: '2024-05-02', description: 'p' },
    { date: '2024-04-24', description: 'p' },
    { date: '2024-05-29', description: 'p' }
  ]
  interface ITrain {
    day: number
    month: number
    year: number
    train: string
  }
  const [trains, setTrains] = useState<ITrain[]>([])

  const handleAddTraining = (year: number, month: number, day: number, train: string): void => {
    console.log(day, month, year, train)
    day++
    const trainDate = new Date(year, month, day)
    console.log(trainDate.toISOString().slice(0, 10))
    setTrains([...trains, { day, month, year, train }])
  }

  useEffect(() => {
    console.log(trains)
  }, [trains])

  return (
    <Container>
      <>
        <div className='border-b flex flex-row gap-4 mb-4'>
          <button onClick={() => setYear(year - 1)}>-</button>
          <h2>Calendario {year}</h2>
          <button onClick={() => setYear(year + 1)}>+</button>
        </div>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-2.5 justify-items-center'>
          {months.map((month, i) => (
            <Month
              onDayClick={handleMonthClick} festivos={festivos} year={year} numberMonth={i} month={month} days={getDaysInMonth(year, i)} firstDay={getFirstDayOfMonth(year, i)} key={i}
              handleAddTraining={(month, day, train) => {
                handleAddTraining(year, month, day, train)
              }}
            />
          ))}
        </div>
        <div className='flex justify-between items-center mt-10'>
          <ButtonCalendar title='Añadir entrenamiento' />
        </div>
      </>
    </Container>
  )
}
