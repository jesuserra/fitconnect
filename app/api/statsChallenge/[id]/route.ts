import { connectDB } from '@/app/utils/mongoose'
import { NextResponse } from 'next/server'
import StatsChallenge from '@/app/models/StatsChallenge'

export async function PUT (request: any): Promise<NextResponse> {
  connectDB()
  console.log('StatsChallenge entro')
  try {
    const data = await request.json()
    const { _id } = data
    const statsChallenge = await StatsChallenge.findByIdAndUpdate(_id, data, { new: true })
    statsChallenge.save()
    return NextResponse.json(statsChallenge)
  } catch (error: any) {
    return NextResponse.json(error.message, {
      status: 400
    })
  }
}

export async function DELETE (request: any, { params }: { params: any }): Promise<NextResponse> {
  connectDB()
  const { id } = params
  try {
    await StatsChallenge.findByIdAndDelete(id)
    return NextResponse.json({ message: 'StatsChallenge deleted' })
  } catch (error: any) {
    return NextResponse.json(error.message, {
      status: 400
    })
  }
}
