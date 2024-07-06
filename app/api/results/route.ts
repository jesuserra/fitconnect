import { NextResponse } from 'next/server'

export async function PUT(request: any, { params }: { params: any }): Promise<NextResponse> {
  try {
    const data = await request.json()
    console.log('aa', data)
    const athleteUpdated = await Athlete.findByIdAndUpdate(params.id, data, { new: true })
    return NextResponse.json(athleteUpdated)
  } catch (error: any) {
    return NextResponse.json(error.message, {
      status: 400
    })
  }

  // try {
  //     const savedResult = await newResult.save()
  //     console.log('Resultado guardado:', savedResult);
  // } catch (error) {
  //     console.error('Error al guardar el resultado:', error);
}
