import { IBadge } from '@/models/Badge'
// import { NextResponse } from 'next/server'

// export async function GET() {
//   const badges = await Badge.find()
//   console.log(badges)
//   return NextResponse.json(badges)
// }

// export async function POST(request: any) {
//   try {
//     const data = await request.json()
//     const newBadge = new Badge(data)
//     await newBadge.save()
//     console.log(data)
//     return NextResponse.json(newBadge)
//   } catch (error: any) {
//     console.log(error)
//     return NextResponse.json(error.message, {
//       status: 400,
//     })
//   }
// }

export const badges: IBadge[] = [
  {
    id: 1,
    image: '1.webp',
    title: 'Superando Barreras',
    description: 'Primer logro completado.',
    toCompleted: 1
  },
  {
    id: 2,
    image: '2.webp',
    title: 'Perseverante',
    description: 'Completa 5 retos.',
    toCompleted: 5
  },
  {
    id: 3,
    image: '3.webp',
    title: 'Campeón Consistente',
    description: 'Completa 20 retos.',
    toCompleted: 20
  },
  {
    id: 4,
    image: '4.webp',
    title: 'Atleta en proceso',
    description: 'Completa tu primera rutina.',
    toCompleted: 1
  },
  {
    id: 5,
    image: '5.webp',
    title: 'Rutina Dominada',
    description: 'Completa 5 rutinas.',
    toCompleted: 5
  },
  {
    id: 6,
    image: '6.webp',
    title: 'Maestro de la Rutina',
    description: 'Completa 15 rutinas.',
    toCompleted: 15
  },
  {
    id: 7,
    image: '7.webp',
    title: 'Reto Relámpago',
    description: 'Completa un reto en tiempo récord.',
    toCompleted: 1
  },
  {
    id: 8,
    image: '8.webp',
    title: 'Experto en Retos',
    description: 'Completa 30 retos.',
    toCompleted: 30
  },
  {
    id: 9,
    image: '9.webp',
    title: 'Destructor de Metas',
    description: 'Completa 50 retos.',
    toCompleted: 50
  },
  {
    id: 10,
    image: '10.webp',
    title: 'Atleta Imparable',
    description: 'Completa 100 retos.',
    toCompleted: 100
  },
  {
    id: 11,
    image: '11.webp',
    title: 'Dedicación Absoluta',
    description: 'Completa una rutina diaria durante 7 días consecutivos.',
    toCompleted: 7
  },
  {
    id: 12,
    image: '12.webp',
    title: 'Fuerza y Resistencia',
    description: 'Completa una rutina diaria durante 30 días consecutivos.',
    toCompleted: 30
  },
  {
    id: 13,
    image: '13.webp',
    title: 'Compromiso Total',
    description: 'Completa una rutina diaria durante 90 días consecutivos.',
    toCompleted: 90
  },
  {
    id: 14,
    image: '14.webp',
    title: 'Rompe Límites',
    description: 'Completa una rutina avanzada.',
    toCompleted: 1
  },
  {
    id: 15,
    image: '15.webp',
    title: 'Iniciador de Retos',
    description: 'Crea y completa tu propio reto.',
    toCompleted: 1
  },
  {
    id: 16,
    image: '16.webp',
    title: 'Competidor Audaz',
    description: 'Participa en 5 retos comunitarios.',
    toCompleted: 5
  },
  {
    id: 17,
    image: '17.webp',
    title: 'Leyenda del CrossFit',
    description: 'Completa 200 retos.',
    toCompleted: 200
  },
  {
    id: 18,
    image: '18.webp',
    title: 'Fuerza Interior',
    description: 'Completa una rutina de alta intensidad.',
    toCompleted: 1
  },
  {
    id: 19,
    image: '19.webp',
    title: 'Espíritu Indomable',
    description: 'Completa 5 rutinas de alta intensidad.',
    toCompleted: 5
  },
  {
    id: 20,
    image: '20.webp',
    title: 'Mente de Hierro',
    description: 'Completa 10 retos mentales.',
    toCompleted: 10
  },
  {
    id: 21,
    image: '21.webp',
    title: 'Desafío Superado',
    description: 'Completa un reto mensual.',
    toCompleted: 1
  },
  {
    id: 22,
    image: '22.webp',
    title: 'Mente y Cuerpo',
    description: 'Completa una combinación de 10 retos físicos y mentales.',
    toCompleted: 10
  },
  {
    id: 23,
    image: '23.webp',
    title: 'Héroe del Fitness',
    description: 'Completa 250 retos.',
    toCompleted: 250
  },
  {
    id: 24,
    image: '24.webp',
    title: 'Poder Puro',
    description: 'Levanta más de 100 kg en una rutina.',
    toCompleted: 100
  },
  {
    id: 25,
    image: '25.webp',
    title: 'Resiste al Titanio',
    description: 'Corre más de 10 km en una sesión.',
    toCompleted: 10
  },
  {
    id: 26,
    image: '26.webp',
    title: 'Flexibilidad de Goma',
    description: 'Completa una rutina avanzada de flexibilidad.',
    toCompleted: 1
  },
  {
    id: 27,
    image: '27.webp',
    title: 'Maestro',
    description: 'Completa una rutina técnica sin errores.',
    toCompleted: 1
  },
  {
    id: 28,
    image: '28.webp',
    title: 'Equilibrio Perfecto',
    description: 'Mantén una postura de equilibrio durante más de 2 minutos.',
    toCompleted: 1
  },
  {
    id: 29,
    image: '29.webp',
    title: 'Pulmón de Acero',
    description: 'Completa una rutina de cardio de 60 minutos.',
    toCompleted: 1
  },
  {
    id: 30,
    image: '30.webp',
    title: 'Liderazgo Activo',
    description: 'Lidera y completa 5 retos en grupo.',
    toCompleted: 5
  },
  {
    id: 31,
    image: '31.webp',
    title: 'Velocidad de Rayo',
    description: 'Completa un reto de velocidad en tiempo récord.',
    toCompleted: 1
  },
  {
    id: 32,
    image: '32.webp',
    title: 'Fuerza Bruta',
    description: 'Levanta más de 150 kg en una rutina.',
    toCompleted: 1
  },
  {
    id: 33,
    image: '33.webp',
    title: 'Entrenamiento Épico',
    description: 'Completa una rutina de más de 2 horas.',
    toCompleted: 1
  },
  {
    id: 34,
    image: '34.webp',
    title: 'Campeón de Maratón',
    description: 'Corre una maratón (42 km) en una sesión.',
    toCompleted: 1
  },
  {
    id: 35,
    image: '35.webp',
    title: 'Equipo Dinámico',
    description: 'Completa 10 retos en equipo.',
    toCompleted: 10
  },
  {
    id: 36,
    image: '36.webp',
    title: 'Superación Personal',
    description: 'Mejora tu tiempo o rendimiento en un reto específico.',
    toCompleted: 1
  },
  {
    id: 37,
    image: '37.webp',
    title: 'Retador Constante',
    description: 'Completa al menos un reto semanal durante 3 meses consecutivos.',
    toCompleted: 3
  }
]
