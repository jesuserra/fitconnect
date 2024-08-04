'use client'

import { ReactElement, useState } from 'react'
import Button from '../Button'
import { IStatsChallenge } from '@/app/models/StatsChallenge'
import { acceptStatChallenge, deleteStatChallenge } from '@/app/services/statsChallengeServices'

export default function StatChallengeCardAdmin ({ statChallenge }: { statChallenge: IStatsChallenge }): ReactElement {
  // Eliminar reto
  const handleDeleteStatAddChallenge = async (): Promise<void> => {
    deleteStatChallenge(statChallenge._id)
    window.location.reload()
  }

  const [points, setPoints] = useState<number>(0)
  // Aprobar reto
  const handleAcceptStatChallenge = async (): Promise<void> => {
    acceptStatChallenge(statChallenge, points)
    window.location.reload()
  }

  return (
    <div className='border border-border rounded-lg p-4 flex flex-col gap-4 mb-4'>
      <div className='flex gap-4'>

        <div className='flex flex-col w-full'>
          <h3>Puntos</h3>
          <p>{statChallenge._id}</p>
          <p>{statChallenge.userId}</p>
          <p>{statChallenge.challengeId}</p>
          <p>{statChallenge.description}</p>
          <p>{statChallenge.date}</p>
          <p>{statChallenge.record}</p>
          <p>{statChallenge.linkVideo}</p>
          <p>{statChallenge.official ? 'Tiempo oficial' : 'Marca personal'}</p>
          <p>{statChallenge.approved ? 'Aprobado' : 'Pendiente'}</p>
          <input type='number' placeholder='Puntos' onChange={(e) => setPoints(parseInt(e.target.value))} />

        </div>
      </div>

      <div className='flex gap-4'>
        <Button onClick={handleDeleteStatAddChallenge}>
          Eliminar marca
        </Button>
        <Button onClick={handleAcceptStatChallenge} secondary>
          Aceptar marca
        </Button>
      </div>
    </div>
  )
}
