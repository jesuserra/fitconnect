import Challenge from '@/app/models/Challenge'
import { connectDB } from '@/app/utils/mongoose'
import { put } from '@vercel/blob'
import { NextResponse } from 'next/server'

export async function PUT (request: Request): Promise<NextResponse> {
  await connectDB()
  try {
    const data = await request.formData()
    const id = data.get('id') as string
    const file = data.get('file') as File
    const blob = await put(id, file, {
      access: 'public'
    })
    const updateChallenge = await Challenge.findByIdAndUpdate(id, { urlImage: blob.url }, { new: true })
    return NextResponse.json(updateChallenge)
  } catch (error: any) {
    console.log(error)
    return NextResponse.json(error.message, {
      status: 400
    })
  }
}
