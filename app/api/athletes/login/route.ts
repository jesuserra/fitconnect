import Athlete from '@/app/models/Athlete'
import { connectDB } from '@/app/utils/mongoose'
import { NextRequest, NextResponse } from 'next/server'

export async function POST (request: NextRequest): Promise<NextResponse> {
  await connectDB()
  try {
    const data = await request.json()
    const { username, password } = data
    const athlete = await Athlete.findOne({ username })
    console.log(athlete)
    if (athlete !== null) {
      if (athlete.password === password) {
        return NextResponse.json(athlete._id)
      } else {
        return NextResponse.json({ message: 'Invalid password' })
      }
    } else {
      return NextResponse.json({ message: 'Athlete not found' })
    }
  } catch (error) {
    console.error('Error accessing athlete:', error)
    return NextResponse.json({ message: 'Error creating athlete' }, { status: 500 })
  }
}
