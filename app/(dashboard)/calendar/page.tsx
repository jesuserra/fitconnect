'use client'

import ButtonCalendar from '@/app/components/ButtonCalendar'
import Month, { IDate } from '@/app/components/Calendar/Month'
import Container from '@/app/components/Container'
import { useState } from 'react'

export interface ITrain {
  day: number
  month: number
  year: number
  train: string
}

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
  // const festivos2 = [
  //   {
  //     date: '2024-01-01',
  //     description: 'Año nuevo'
  //   },
  //   {
  //     date: '2024-01-06',
  //     description: 'Reyes'
  //   },
  //   {
  //     date: '2024-03-19',
  //     description: 'San José'
  //   },
  //   {
  //     date: '2024-03-29',
  //     description: 'Jueves Santo'
  //   }, {
  //     date: '2024-03-30',
  //     description: 'Viernes Santo'
  //   }, {
  //     date: '2024-05-01',
  //     description: 'Día del trabajador'
  //   }, {
  //     date: '2024-08-15',
  //     description: 'Asunción'
  //   }, {
  //     date: '2024-10-12',
  //     description: 'Fiesta Nacional'
  //   }, {
  //     date: '2024-11-01',
  //     description: 'Todos los Santos'
  //   }, {
  //     date: '2024-12-06',
  //     description: 'Día de la Constitución'
  //   }, {
  //     date: '2024-12-08',
  //     endDate: '2024-12-08',
  //     description: 'Inmaculada'
  //   }, {
  //     date: '2024-12-25',
  //     description: 'Navidad'
  //   }, {
  //     date: '2024-12-31',
  //     description: 'Fin de año'
  //   }
  // ]
  const entrenes = [
    { date: '2024-03-16', description: 'Pierna' },
    { date: '2024-06-21', description: 'Pecho' },
    { date: '2024-01-04', description: 'Biceps' },
    { date: '2024-04-13', description: 'Abdomen' },
    { date: '2024-06-13', description: 'Abdomen' },
    { date: '2024-01-28', description: 'Pecho' },
    { date: '2024-01-31', description: 'Abdomen' },
    { date: '2024-02-04', description: 'Pierna' },
    { date: '2024-02-23', description: 'Abdomen' },
    { date: '2024-06-19', description: 'Triceps' },
    { date: '2024-06-04', description: 'Pecho' },
    { date: '2024-04-19', description: 'Pierna' },
    { date: '2024-04-06', description: 'Abdomen' },
    { date: '2024-03-22', description: 'Biceps' },
    { date: '2024-06-17', description: 'Abdomen' },
    { date: '2024-05-05', description: 'Abdomen' },
    { date: '2024-02-27', description: 'Pierna' },
    { date: '2024-05-08', description: 'Triceps' },
    { date: '2024-04-18', description: 'Pecho' },
    { date: '2024-05-01', description: 'Biceps' },
    { date: '2024-01-07', description: 'Abdomen' },
    { date: '2024-03-04', description: 'Pecho' },
    { date: '2024-02-03', description: 'Triceps' },
    { date: '2024-03-06', description: 'Pecho' },
    { date: '2024-05-09', description: 'Biceps' },
    { date: '2024-01-24', description: 'Triceps' },
    { date: '2024-06-10', description: 'Pierna' },
    { date: '2024-05-17', description: 'Biceps' },
    { date: '2024-01-21', description: 'Abdomen' },
    { date: '2024-03-27', description: 'Pecho' },
    { date: '2024-01-20', description: 'Biceps' },
    { date: '2024-06-05', description: 'Abdomen' },
    { date: '2024-02-28', description: '4 series de 24 pullups, pullups lastradas al fallo, 4 series de 12 pushups, pushups lastradas al fallo, series de 30 reps pronas' },
    { date: '2024-02-22', description: 'Pecho' },
    { date: '2024-01-10', description: 'Abdomen' },
    { date: '2024-06-22', description: 'Pecho' },
    { date: '2024-05-31', description: 'Abdomen' },
    { date: '2024-01-02', description: 'Abdomen' },
    { date: '2024-03-30', description: 'Biceps' },
    { date: '2024-06-11', description: 'Abdomen' },
    { date: '2024-05-06', description: 'Pierna' },
    { date: '2024-02-11', description: 'Pecho' },
    { date: '2024-05-04', description: 'Triceps' },
    { date: '2024-04-16', description: 'Pierna' },
    { date: '2024-01-22', description: 'Triceps' },
    { date: '2024-03-17', description: 'Abdomen' },
    { date: '2024-04-01', description: 'Pierna' },
    { date: '2024-01-15', description: 'Triceps' },
    { date: '2024-06-02', description: 'Abdomen' },
    { date: '2024-05-14', description: 'Pierna' },
    { date: '2024-04-20', description: 'Triceps' },
    { date: '2024-01-23', description: 'Pierna' },
    { date: '2024-02-19', description: 'Pecho' },
    { date: '2024-06-29', description: 'Abdomen' },
    { date: '2024-04-05', description: 'Pierna' },
    { date: '2024-01-06', description: 'Abdomen' },
    { date: '2024-04-30', description: 'Abdomen' },
    { date: '2024-05-02', description: 'Pierna' },
    { date: '2024-04-24', description: 'Pecho' },
    { date: '2024-05-29', description: 'Triceps' }
  ]

  const [trains, setTrains] = useState<IDate[]>(entrenes.map((e) => ({ date: e.date, description: e.description })))

  const handleAddTraining = (year: number, month: number, day: number, train: string): void => {
    console.log(day, month, year, train)
    day++
    const trainDate = new Date(year, month, day)
    console.log(trainDate.toISOString().slice(0, 10))
    setTrains([...trains, { date: trainDate.toISOString().slice(0, 10), description: train }])
  }

  // Días desde el 1 de enero hasta la fecha actual
  const daysFromJan = Math.abs(new Date().getTime() - new Date(year, 0, 1).getTime()) / (1000 * 60 * 60 * 24)

  return (
    <Container>
      <>
        <div className='flex flex-col gap-4 mb-4'>
          Estadísticas:
          <div className='flex justify-between'>

            <div className='flex gap-20'>
              <div className='flex flex-col gap-2'>
                <p className='w-full border-b-2'>Este año</p>
                <div className='flex gap-4 items-end'><h2>{trains.length}</h2><p>entrenamientos realizados</p></div>
                <div className='flex gap-4 items-end'><h2>{(daysFromJan - trains.length).toFixed(0)}</h2><p> días descansados</p></div>
              </div>

              <div className='flex flex-col gap-2 w-56'>
                <p className='w-full border-b-2'>Días entrenados</p>
                <div className='flex justify-between'><p>Abdomen</p> <h3>{trains.filter((t) => t.description === 'Abdomen').length}</h3></div>
                <div className='flex justify-between'><p>Pecho</p> <h3>{trains.filter((t) => t.description === 'Pecho').length}</h3></div>
                <div className='flex justify-between'><p>Pierna</p> <h3>{trains.filter((t) => t.description === 'Pierna').length}</h3></div>
                <div className='flex justify-between'><p>Triceps</p> <h3>{trains.filter((t) => t.description === 'Triceps').length}</h3></div>
                <div className='flex justify-between'><p>Biceps</p> <h3>{trains.filter((t) => t.description === 'Biceps').length}</h3></div>
              </div>
            </div>

            <div className='flex justify-between'>
              <ButtonCalendar title='Añadir entrenamiento' />
            </div>
          </div>

        </div>
        <div className='border-b flex flex-row gap-4 mb-4'>
          <button onClick={() => setYear(year - 1)}>-</button>
          <h2>Calendario {year}</h2>
          <button onClick={() => setYear(year + 1)}>+</button>
        </div>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-2.5 justify-items-center'>
          {months.map((month, i) => (
            <Month
              onDayClick={handleMonthClick} trains={trains} year={year} numberMonth={i} month={month} days={getDaysInMonth(year, i)} firstDay={getFirstDayOfMonth(year, i)} key={i}
              handleAddTraining={(month, day, train) => {
                handleAddTraining(year, month, day, train)
              }}
            />
          ))}
        </div>
      </>
    </Container>
  )
}
