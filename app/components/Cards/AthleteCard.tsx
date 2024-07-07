import { IAthlete } from '@/app/models/Athlete'
import React, { ReactElement } from 'react'

// API USERS: https://randomuser.me/photos
// API BANDERAS: https://www.banderas-mundo.es/descargar/api
export default function AthleteCard ({ athlete }: { athlete: IAthlete }): ReactElement {
  return (
    <div className='custom-line relative shadow-md rounded-xl p-4 flex items-center max-w-md w-80 cursor-pointer'>
      <img
        className='w-16 h-16 rounded-full'
        src={`https://randomuser.me/api/portraits/men/${athlete.image}`}
        alt='User Photo'
      />
      <div className='ml-4'>
        <h2 className='text-xl font-semibold'>
          {athlete.name} {athlete.last_name}
        </h2>
        <p className='text-gray-600'>Puntuación {athlete.points}</p>
        <div className='absolute top-2 right-2'>
          <img
            className='w-6 h-4'
            src={`https://flagcdn.com/${athlete.country}.svg`}
            alt='User Country Flag'
          />
        </div>
      </div>
    </div>
  )
}
