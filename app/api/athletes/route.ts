import Athlete from '@/app/models/Athlete'
import { connectDB } from '@/app/utils/mongoose'
import { NextResponse } from 'next/server'

export async function GET (): Promise<NextResponse> {
  connectDB()
  const athletes = await Athlete.find()
  return NextResponse.json(athletes)
}

export async function POST (request: any): Promise<NextResponse> {
  await connectDB()
  try {
    const data = await request.json()
    const newAthlete = new Athlete(data)
    await newAthlete.save()
    return NextResponse.json(newAthlete)
  } catch (error: any) {
    console.log(error)
    return NextResponse.json(error.message, {
      status: 400
    })
  }
}

// export const athletes: IAthlete[] = [
//   {
//     _id: 'atleta0',
//     country: 'es',
//     age: 25,
//     username: 'jesuserra',
//     description: 'Software developer and tech enthusiast.',
//     email: 'jesuserra@example.com',
//     password: 'password123',
//     name: 'Jesus',
//     last_name: 'Serra',
//     image: '15.jpg',
//     createdAt: '2023-05-01T10:00:00Z',
//     updatedAt: '2023-05-01T10:00:00Z',
//     points: 320
//   },
//   {
//     _id: 'atleta1',
//     country: 'us',
//     age: 25,
//     username: 'john_doe25',
//     description: 'Software developer and tech enthusiast.',
//     email: 'john.doe@example.com',
//     password: 'password123',
//     name: 'John',
//     last_name: 'Doe',
//     image: '1.jpg',
//     createdAt: '2023-05-01T10:00:00Z',
//     updatedAt: '2023-05-01T10:00:00Z',
//     points: 100
//   },
//   {
//     _id: 'atleta2',
//     country: 'ca',
//     age: 30,
//     username: 'jane_smith30',
//     description: 'Marketing specialist with a love for travel.',
//     email: 'jane.smith@example.com',
//     password: 'securepassword',
//     name: 'Jane',
//     last_name: 'Smith',
//     image: '2.jpg',
//     createdAt: '2023-05-02T11:00:00Z',
//     updatedAt: '2023-05-01T10:00:00Z',
//     points: 150
//   },
//   {
//     _id: 'atleta3',
//     country: 'gb',
//     age: 28,
//     username: 'michael_brown28',
//     description: 'Graphic designer and coffee addict.',
//     email: 'michael.brown@example.com',
//     password: 'graphicdesigner',
//     name: 'Michael',
//     last_name: 'Brown',
//     image: '3.jpg',
//     createdAt: '2023-05-03T12:00:00Z',
//     updatedAt: '2023-05-01T10:00:00Z',
//     points: 160
//   },
//   {
//     _id: 'atleta4',
//     country: 'au',
//     age: 22,
//     username: 'sarah_jones22',
//     description: 'Student and aspiring biologist.',
//     email: 'sarah.jones@example.com',
//     password: 'biologystudent',
//     name: 'Sarah',
//     last_name: 'Jones',
//     image: '4.jpg',
//     createdAt: '2023-05-04T13:00:00Z',
//     updatedAt: '2023-05-01T10:00:00Z',
//     points: 80
//   },
//   {
//     _id: 'atleta5',
//     country: 'de',
//     age: 35,
//     username: 'alex_muller35',
//     description: 'Entrepreneur and business coach.',
//     email: 'alex.muller@example.com',
//     password: 'businesscoach',
//     name: 'Alex',
//     last_name: 'Muller',
//     image: '5.jpg',
//     createdAt: '2023-05-05T14:00:00Z',
//     updatedAt: '2023-05-01T10:00:00Z',
//     points: 120
//   },
//   {
//     _id: 'atleta6',
//     country: 'fr',
//     age: 27,
//     username: 'emily_wilson27',
//     description: 'Fashion designer and blogger.',
//     email: 'emily.wilson@example.com',
//     password: 'fashionista',
//     name: 'Emily',
//     last_name: 'Wilson',
//     image: '6.jpg',
//     createdAt: '2023-05-06T15:00:00Z',
//     updatedAt: '2023-05-01T10:00:00Z',
//     points: 200
//   },
//   {
//     _id: 'atleta7',
//     country: 'it',
//     age: 24,
//     username: 'luca_rossi24',
//     description: 'Chef and food lover.',
//     email: 'luca.rossi@example.com',
//     password: 'chefdelicious',
//     name: 'Luca',
//     last_name: 'Rossi',
//     image: '7.jpg',
//     createdAt: '2023-05-07T16:00:00Z',
//     updatedAt: '2023-05-01T10:00:00Z',
//     points: 210
//   },
//   {
//     _id: 'atleta8',
//     country: 'es',
//     age: 29,
//     username: 'maria_garcia29',
//     description: 'Imagegrapher and traveler.',
//     email: 'maria.garcia@example.com',
//     password: 'travelimagegrapher',
//     name: 'Maria',
//     last_name: 'Garcia',
//     image: '8.jpg',
//     createdAt: '2023-05-08T17:00:00Z',
//     updatedAt: '2023-05-01T10:00:00Z',
//     points: 220
//   },
//   {
//     _id: 'atleta9',
//     country: 'jp',
//     age: 32,
//     username: 'ken_tanaka32',
//     description: 'Engineer and gamer.',
//     email: 'ken.tanaka@example.com',
//     password: 'engineergamer',
//     name: 'Ken',
//     last_name: 'Tanaka',
//     image: '9.jpg',
//     createdAt: '2023-05-09T18:00:00Z',
//     updatedAt: '2023-05-01T10:00:00Z',
//     points: 110
//   },
//   {
//     _id: 'atleta10',
//     country: 'br',
//     age: 26,
//     username: 'ana_silva26',
//     description: 'Fitness trainer and health coach.',
//     email: 'ana.silva@example.com',
//     password: 'fitandhealthy',
//     name: 'Ana',
//     last_name: 'Silva',
//     image: '10.jpg',
//     createdAt: '2023-05-10T19:00:00Z',
//     updatedAt: '2023-05-01T10:00:00Z',
//     points: 310
//   },
//   {
//     _id: 'atleta11',
//     country: 'ua',
//     age: 26,
//     username: 'ana_silva26',
//     description: 'Fitness trainer and health coach.',
//     email: 'ana.silva@example.com',
//     password: 'fitandhealthy',
//     name: 'Ana',
//     last_name: 'Silva',
//     image: '11.jpg',
//     createdAt: '2023-05-10T19:00:00Z',
//     updatedAt: '2023-05-01T10:00:00Z',
//     points: 140
//   }
// ]
