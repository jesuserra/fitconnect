import Athlete, { IAthlete } from '@/app/models/Athlete'
import { connectDB } from '@/app/utils/mongoose'
import { NextRequest, NextResponse } from 'next/server'

export async function POST (request: NextRequest): Promise<any> {
  await connectDB()
  try {
    const data = await request.json()
    const { email, password } = data
    const athlete = await Athlete.findOne({ email }).lean() as IAthlete
    if (athlete === null) {
      // No se encontró el atleta
      console.log('1')
      throw new Error('Athlete not found')
    } else {
      if (athlete.password === password) {
        // Se encontró el atleta y la contraseña es correcta
        console.log('2')
        return NextResponse.json({ id: athlete._id, ...athlete })
      } else {
        // Se encontró el atleta pero la contraseña es incorrecta
        console.log('3')
        throw new Error('Invalid password')
      }
    }
  } catch (error) {
    return NextResponse.json({ message: 'Error creating athlete' }, { status: 500 })
  }
}
