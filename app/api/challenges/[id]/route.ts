import Challenge from '@/app/models/Challenge'
import { connectDB } from '@/app/utils/mongoose'
import { NextResponse } from 'next/server'

export async function GET (request: any, { params }: { params: any }): Promise<NextResponse> {
  try {
    const ChallengeFound = await Challenge.findById(params.id)
    if (ChallengeFound === null) {
      return NextResponse.json({
        message: 'Reto no encontrado'
      }, { status: 404 })
    }
    return NextResponse.json(ChallengeFound)
  } catch (error: any) {
    return NextResponse.json(error.message, {
      status: 400
    })
  }
}

export async function PUT (request: any, { params }: { params: any }): Promise<NextResponse> {
  connectDB()
  try {
    const data = await request.json()
    console.log('aa', data)
    const challengeUpdated = await Challenge.findByIdAndUpdate(params.id, data, { new: true })
    return NextResponse.json(challengeUpdated)
  } catch (error: any) {
    return NextResponse.json(error.message, {
      status: 400
    })
  }
}

export async function DELETE (request: any, { params }: { params: any }): Promise<NextResponse> {
  try {
    const challengeDeleted = await Challenge.findByIdAndDelete(params.id)
    console.log(challengeDeleted)
    if (challengeDeleted === null) {
      return NextResponse.json({
        message: 'Atleta no encontrado'
      }, { status: 404 })
    }
  } catch (error: any) {
    return NextResponse.json(error.message, {
      status: 400
    })
  }
  return NextResponse.json({
    message: 'Atleta no encontrado'
  })
}
