import { IRoutine } from '@/models/Routines'
// import { NextResponse } from "next/server"

// export async function GET() {
//   const challenges = await Challenge.find()
//   console.log(challenges)
//   return NextResponse.json(challenges)
// }

// export async function POST(request: any) {
//   try {
//     const data = await request.json()
//     const newChallenge = new Challenge(data)
//     await newChallenge.save()
//     console.log(data)
//     return NextResponse.json(newChallenge)
//   } catch (error: any) {
//     console.log(error)
//     return NextResponse.json(error.message, {
//       status: 400,
//     })
//   }
// }

export const routines: IRoutine[] = [
  {
  id: 'routine1',
  title: 'Full body',
  description: 'Rutina de ejercicios para hacer en casa',
  image: '1.jpg',
  user: '1',
  duration: 60,
  rest: 90,
  level: 'beginner',
  tags: [{
    id: 'tag1',
    title: 'full body'
  }],
  exercises: [{
    id: '1',
    id_exercise: 'exercise1',
    reps: 10,
    series: 3
  },
  {
    id: '2',
    id_exercise: 'exercise2',
    reps: 10,
    series: 3
  },
  {
    id: '3',
    id_exercise: 'exercise3',
    reps: 10,
    series: 3
  }]
},
]
