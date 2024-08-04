'use client'

import { routines } from '@/app/api/routines/route'
import Button from '@/app/components/Button'
import Container from '@/app/components/Container'
import { ExerciseCard } from '@/app/components/Cards/ExerciseCard'
import { useParams } from 'next/navigation'

export default function page () {
  const { id } = useParams()
  const routine = routines.find((routine) => routine.id === id)

  return (
    <Container>
      <div className='w-full h-full border-slate-100 border-2 p-4 rounded-md flex flex-row'>
        <div className='w-[50%] flex flex-col'>
          <h1>{routine?.title}</h1>
          <p>{routine?.description}</p>
          <p>{routine?.user}</p>
          <div className='w-72 h-72 rounded-lg overflow-hidden'>
            <img
              src={`/routines/${routine?.image as string}`}
              alt={`Imagen de ${routine?.title as string}`}
            />
          </div>
          <Button onClick={() => console.log('Llamada añadir a mis rutinas')}>
            Añadir a mis rutinas
          </Button>
        </div>
        <div className='w-[50%] flex flex-col'>
          <h2>Ejercicios</h2>
          <ul>
            {routine?.exercises.map((exercise) => (
              <div key={exercise.id}>
                <ExerciseCard
                  exerciseId={exercise.id_exercise}
                  reps={exercise.reps}
                  series={exercise.series}
                />
              </div>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  )
}
