import Comment from '@/app/models/Comment'
import { connectDB } from '@/app/utils/mongoose'
import { NextResponse } from 'next/server'

export async function GET (request: Request): Promise<NextResponse> {
  connectDB()
  console.log(request.url)
  try {
    const url = new URL(request.url)
    const challengeId = url.searchParams.get('challengeId')
    const comments = await Comment.find({ challengeId })
    return NextResponse.json(comments)
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
    const comment = new Comment(data)

    await comment.save()
    return NextResponse.json(data)
  } catch (error: any) {
    console.log(error)
    return NextResponse.json(error.message, {
      status: 400
    })
  }
}
