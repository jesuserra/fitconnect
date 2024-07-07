'use client'

import { ReactElement, useEffect, useState } from 'react'
import Button from '../Button'
import { IChallenge } from '@/app/models/Challenge'
import { Input } from '@/components/ui/input'
import { addImageChallenge, deleteChallenge, modifyChallenge } from '@/app/services/challengeServices'

export default function ChallengeCardAdmin ({ challenge }: { challenge: IChallenge }): ReactElement {
  const [_challenge, setChallenge] = useState<IChallenge>({
    title: challenge.title,
    description: challenge.description,
    difficulty: challenge.difficulty,
    points: challenge.points,
    urlImage: challenge.urlImage,
    createdBy: challenge.createdBy,
    approved: challenge.approved,
    _id: challenge._id
  })

  const [file, setFile] = useState<File | null>(null)

  const handleAddChallenge = async (): Promise<void> => {
    modifyChallenge(_challenge)
  }

  const handleAddImage = async (): Promise<void> => {
    if (file == null) return
    addImageChallenge(_challenge, file)
  }

  const handleDeleteChallenge = async (): Promise<void> => {
    deleteChallenge(_challenge)
  }

  useEffect(() => {
    if (file != null) {
      handleAddImage()
    }
  }, [file])

  return (
    <div className='border border-border rounded-lg p-4 flex flex-col gap-4'>
      <img
        className='object-cover rounded-t-lg w-48 h-48'
        src={challenge.urlImage}
        alt={`Imagen de ${challenge.title}`}
      />
      <input type='file' accept='image/*' onChange={(e) => setFile(e.target.files !== null ? e.target.files[0] : null)} />
      <div className='flex gap-4'>
        <div className='flex flex-col w-full'>
          <h3>Título</h3>
          <Input
            onChange={(e) => setChallenge({ ..._challenge, title: e.target.value })}
            defaultValue={challenge.title}
          />
        </div>
        <div className='flex flex-col w-full'>
          <h3>Puntos</h3>
          <Input
            type='number'
            onChange={(e) => setChallenge({ ..._challenge, points: Number(e.target.value) })}
            defaultValue={challenge.points}
          />
        </div>
      </div>
      <div className='flex flex-col w-full'>

        <h3>Descripción</h3>
        <Input
          onChange={(e) => setChallenge({ ..._challenge, description: e.target.value })}
          defaultValue={challenge.description}
        />
      </div>
      <div className='flex gap-4'>
        <div className='flex flex-col w-full'>
          <h3>Dificultad</h3>
          <Input
            type='number'
            onChange={(e) => setChallenge({ ..._challenge, difficulty: Number(e.target.value) as 1 | 2 | 3 | 4 })}
            defaultValue={challenge.difficulty}
          />
        </div>
        <div className='flex flex-col w-full'>
          <h3>Usuario</h3>
          <Input
            onChange={(e) => setChallenge({ ..._challenge, createdBy: e.target.value })}
            defaultValue={challenge.createdBy}
          />
        </div>
      </div>
      <div className='flex gap-4'>
        <Button onClick={handleAddChallenge}>
          Publicar reto
        </Button>
        <Button onClick={handleDeleteChallenge} secondary>
          Eliminar reto
        </Button>
      </div>
    </div>
  )
}
