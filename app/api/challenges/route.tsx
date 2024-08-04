import Challenge from '@/app/models/Challenge'
import { connectDB } from '@/app/utils/mongoose'
import { NextResponse } from 'next/server'

export async function GET (request: Request): Promise<NextResponse> {
  connectDB()
  const url = new URL(request.url)
  const approved = url.searchParams.get('approved')
  const difficulty = url.searchParams.get('difficulty')
  let challenges

  // Si eres admin, mostrara los retos que no han sido aprobados
  if (approved !== null && approved === 'false') {
    challenges = await Challenge.find({ approved: false })
    return NextResponse.json(challenges)
  }
  // Si se pasa un parametro de dificultad, se mostraran los retos que tengan esa dificultad y esten aprobados
  if (difficulty !== null) {
    if (difficulty === '0') {
      challenges = await Challenge.find({ approved: true })
    } else {
      challenges = await Challenge.find({ difficulty: parseInt(difficulty), approved: true })
    }
  }
  // Si eres usuario, mostrara los retos que han sido aprobados
  challenges = await Challenge.find({ approved: true })

  return NextResponse.json(challenges)
}

export async function POST (request: Request): Promise<NextResponse> {
  await connectDB()
  try {
    const data = await request.json()
    const { title, description, difficulty, createdBy } = data

    const newChallenge = new Challenge({ title, description, difficulty, createdBy, points: 0, likes: 0, approved: false, urlImage: '' })
    await newChallenge.save()
    return NextResponse.json(newChallenge)
  } catch (error: any) {
    console.log(error)
    return NextResponse.json(error.message, {
      status: 400
    })
  }
}
