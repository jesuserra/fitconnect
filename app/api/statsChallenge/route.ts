import StatsChallenge from '@/app/models/StatsChallenge'
import { connectDB } from '@/app/utils/mongoose'
import { NextResponse } from 'next/server'

// Obtiene los stats de un reto por usuario
export async function GET (request: Request): Promise<NextResponse> {
  connectDB()
  try {
    const url = new URL(request.url)
    const userId = url.searchParams.get('userId')
    const challengeId = url.searchParams.get('challengeId')
    const approved = url.searchParams.get('approved')
    const official = url.searchParams.get('official')

    if (official === 'true' && approved === 'false') {
      console.log(333333)
      const statsChallenge = await StatsChallenge.find({ approved: false, official: true })
      console.log(statsChallenge)
      return NextResponse.json(statsChallenge)
    } else {
      console.log(44444444, userId, challengeId)
      const statsChallenge = await StatsChallenge.find({ userId, challengeId })
      console.log(statsChallenge)
      return NextResponse.json(statsChallenge)
    }
  } catch (error: any) {
    return NextResponse.json(error.message, {
      status: 400
    })
  }
}

export async function POST (request: any): Promise<NextResponse> {
  await connectDB()
  try {
    const data = await request.json()
    console.log(data)
    const statsChallenge = new StatsChallenge(data)

    await statsChallenge.save()
    return NextResponse.json(data)
  } catch (error: any) {
    console.log(error)
    return NextResponse.json(error.message, {
      status: 400
    })
  }
}
