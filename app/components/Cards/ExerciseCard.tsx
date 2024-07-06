import { exercises } from '@/app/api/exercise/route'
import { IExercise } from '@/models/Exercise'
import { ReactElement } from 'react'

export function ExerciseCard ({ exerciseId, reps, series }: { exerciseId: string, reps: number | string, series: number }): ReactElement {
  const exercise = exercises.find(
    (exercise) => exercise.id === exerciseId
  ) as IExercise

  return (
    <div className='flex flex-row border-2 rounded-xl overflow-hidden w-[600px] h-[100px]'>
      <div className='w-[100px] h-[100px] flex'>
        {exercise.photo !== undefined && (
          <img
            src={`/exercises/${exercise.photo}`}
            alt={`Imagen de ${exercise.title}`}
            className=' object-fit'
          />)}
      </div>
      <h3>{exercise.title}</h3>
      <p>Series: {series}</p>
      <p>Reps:{reps}</p>
    </div>
  )
}
