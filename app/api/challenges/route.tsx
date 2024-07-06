import Challenge from '@/app/models/Challenge'
import { connectDB } from '@/app/utils/mongoose'
import { put } from '@vercel/blob'
import { NextResponse } from 'next/server'

export async function GET (): Promise<NextResponse> {
  await connectDB()
  const challenges = await Challenge.find().populate('createdBy')
  return NextResponse.json(challenges)
}

export async function POST (request: Request): Promise<NextResponse> {
  await connectDB()
  try {
    const data = await request.formData()
    const title = data.get('title') as string
    const description = data.get('description')
    const difficulty = data.get('difficulty')
    const points = data.get('points')
    const file = data.get('file') as File
    const createdBy = data.get('createdBy')
    // const data = await request.json()
    const blob = await put(title, file, {
      access: 'public'
    })
    const newChallenge = new Challenge({ title, description, difficulty, points, urlImage: blob.url, createdBy })
    await newChallenge.save()
    return NextResponse.json(newChallenge)
  } catch (error: any) {
    console.log(error)
    return NextResponse.json(error.message, {
      status: 400
    })
  }
}

// export const challenges: IChallenge[] = [
//   {
//     _id: 'challenge1',
//     title: 'Reto Murph',
//     description: 'Realizar el reto Murph en el menor tiempo posible, el reto consiste el correr 1.6km, despues 100 dominadas, 200 flexiones, 300 sentadillas y vuelta a correr 1.6km, todo con un chaleco de 10kg',
//     image: '1.jpg',
//     points: 100,
//     user: '1',
//     approved: true,
//     difficulty: 4,
//     likes: 2,
//   },
//   {
//     _id: 'challenge2',
//     title: 'Reto 100 burpees',
//     description: 'Realizar 100 burpees en el menor tiempo posible',
//     image: '2.jpg',
//     points: 100,
//     user: '1',
//     approved: true,
//     difficulty: 4,
//     likes: 2,
//   },
//   {
//     _id: 'challenge3',
//     title: 'Reto Plancha de 5 minutos sin descansar',
//     description: 'Mantén una posición de plancha durante 5 minutos sin descanso',
//     image: '3.jpg',
//     points: 150,
//     user: '2',
//     approved: true,
//     difficulty: 3,
//     likes: 2,
//   },
//   {
//     _id: 'challenge4',
//     title: 'Reto 300 sentadillas',
//     description: 'Completa 300 sentadillas en el menor tiempo posible',
//     image: '4.jpg',
//     points: 120,
//     user: '3',
//     approved: true,
//     difficulty: 3,
//     likes: 2,
//   },
//   {
//     _id: 'challenge5',
//     title: 'Reto Flexiones en diamante',
//     description: 'Realiza 50 flexiones en diamante sin parar',
//     image: '5.jpg',
//     points: 80,
//     user: '4',
//     approved: true,
//     difficulty: 4,
//     likes: 2,
//   },
//   {
//     _id: 'challenge6',
//     title: 'Reto Pull-ups explosivos',
//     description: 'Haz 20 pull-ups con aplauso en el menor tiempo posible',
//     image: '6.jpg',
//     points: 200,
//     user: '5',
//     approved: true,
//     difficulty: 3,
//     likes: 2,
//   },
//   {
//     _id: 'challenge7',
//     title: 'Reto 1000 saltos de cuerda',
//     description: 'Realiza 1000 saltos de cuerda sin parar',
//     image: '7.jpg',
//     points: 50,
//     user: '6',
//     approved: true,
//     difficulty: 2,
//     likes: 2,
//   },
//   {
//     _id: 'challenge8',
//     title: 'Reto Pistol Squats',
//     description: 'Haz 50 pistol squats por pierna en el menor tiempo posible',
//     image: '8.jpg',
//     points: 180,
//     user: '7',
//     approved: true,
//     difficulty: 3,
//     likes: 2,
//   },
//   {
//     _id: 'challenge9',
//     title: 'Reto Handstand Push-ups',
//     description: 'Completa 30 handstand push-ups contra la pared',
//     image: '9.jpg',
//     points: 250,
//     user: '8',
//     approved: true,
//     difficulty: 3,
//     likes: 2,
//   },
//   {
//     _id: 'challenge10',
//     title: 'Reto L-Sit',
//     description: 'Mantén una posición de L-sit durante 3 minutos sin descansar',
//     image: '10.jpg',
//     points: 220,
//     user: '9',
//     approved: true,
//     difficulty: 2,
//     likes: 2,
//   }
// ]
