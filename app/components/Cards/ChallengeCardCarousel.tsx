'use client'

import { IChallenge } from '@/app/models/Challenge'
import { ReactElement } from 'react'

export default function ChallengeCardCarousel ({ challenge }: { challenge: IChallenge }): ReactElement {
  return (
    <div className='w-[300px] h-72 rounded-xl overflow-hidden border-red-500 min-w-[300px] mx-2'>
      <a href={`/challenges/${challenge._id}`} className='relative'>
        <img
          className='object-cover rounded-t-lg w-[300px] h-72 absolute opacity-35 rounded-xl'
          src={challenge.urlImage}
          alt={`Imagen de ${challenge.title}`}
        />
        <div className='flex flex-col justify-between p-4 leading-normal w-full relative h-full'>
          <div>
            <h5
              className='truncate-1-line mb-2 text-2xl font-bold tracking-tight text-white'
              title={challenge.title}
            >
              {challenge.title}
            </h5>
            <p className='truncate-2-lines mb-3 font-normal text-white truncate-3-lines'>
              {challenge.description}
            </p>
          </div>
          <span className='text-red-500 mb-0 flex'>
            Puntos: {challenge.points}
          </span>
        </div>
      </a>
    </div>
  )
}
