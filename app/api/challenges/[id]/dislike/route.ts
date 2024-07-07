import { connectDB } from '@/app/utils/mongoose'
import Challenge from '@/app/models/Challenge'
import { NextResponse } from 'next/server'

export async function PUT (req: Request, { params: { id } }: { params: { id: string } }): Promise<NextResponse> {
  await connectDB()

  try {
    const challenge = await Challenge.findById(id)
    if (!challenge) {
      return NextResponse.json({ message: 'Challenge not found' }, { status: 400 })
    }
    const data = await Challenge.updateOne(
      { _id: id },
      { $inc: { likes: -1 } }
    )
    return NextResponse.json(data)
  } catch (error: any) {
    return NextResponse.json(error, {
      status: 400
    })
  }
}
