// import { Schema, model, models } from 'mongoose'

import { ITag } from './Tag'

// const routineSchema = new Schema({
//     title: {
//         type: String,
//         required: true
//     },
//     description: {
//         type: String,
//         required: true
//     },
//     likes: Number,
//     points: Number,
//     image: String
// })

// const Routine = models.Routines || model('Routines', routineSchema)

// export default Routine

export interface INExercise {
  id: string
  id_exercise: string
  reps: number | string
  series: number

}
export interface IRoutine {
  id: string
  title: string
  description: string
  duration: number
  rest: number
  level: string
  image: string
  user: string
  tags: ITag[]
  exercises: INExercise[]
}
