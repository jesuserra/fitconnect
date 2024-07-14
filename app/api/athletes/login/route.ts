import Athlete from '@/app/models/Athlete'
import { connectDB } from '@/app/utils/mongoose'
import { NextApiRequest } from 'next'
import { NextResponse } from 'next/server'

export async function POST (request: NextApiRequest): Promise<NextResponse> {
  console.log('req', request)
  await connectDB()
  const { username, password } = request.body
  const athlete = await Athlete.findOne({ username })
  if (athlete) {
    if (athlete.password === password) {
      return NextResponse.json(athlete)
    } else {
      return NextResponse.json({ message: 'Invalid password' })
    }
  } else {
    return NextResponse.json({ message: 'Athlete not found' })
  }
}
