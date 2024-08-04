import { ReactElement, useState } from 'react'
import Button from '../Button'
import Input from '../Input'
import Dropdown from '../Dropdown'
import Dialog from './Dialog'
import { createChallenge } from '@/app/services/challengeServices'
import { ICreateChallenge } from '@/app/models/Challenge'

export default function CreateChallengeModal (): ReactElement {
  // Pasar el id del usuario logeado
  const userId = '666d5021add60d0314e1ee09'

  async function handleCreate (): Promise<void> {
    createChallenge(challenge)
    setChallenge({
      title: '',
      description: '',
      difficulty: 1,
      createdBy: userId
    })
    handleClose()
  }

  const [challenge, setChallenge] = useState<ICreateChallenge>({
    title: '',
    description: '',
    difficulty: 1,
    createdBy: userId
  })

  function handleClose (): void {
    const dialog = document.getElementById('createChallengeModal') as HTMLDialogElement
    dialog?.close()
  }

  return (
    <Dialog id='createChallengeModal' handleClose={handleClose}>
      <div className='flex flex-col gap-4 items-center text-white w-[600px] h-[360px]'>
        <h1 className='text-4xl font-bold'>Publica tu propio reto</h1>
        <p className='text-sm'>Este reto será revisado por los moderadores y podrá ser aprobado o rechazado</p>
        <div className='flex flex-col gap-4 items-start'>
          <div className='flex flex-row gap-4 items-start'>
            <div className='flex flex-col gap-4 items-start'>
              <label className='text-start items-start flex justify-start ali'>Nombre del reto *</label>
              <Input type='text' placeholder='Nombre del reto *' onChange={(e) => setChallenge({ ...challenge, title: e })} value={challenge.title} />
            </div>
            <div className='flex flex-col gap-4 items-start'>
              <label className='text-start items-start flex justify-start ali'>Dificultad sugerida</label>
              <Dropdown
                defaultValue={{ id: '0', value: 'Seleccionar dificultad' }}
                options={[
                  { id: '1', value: 'Fácil' },
                  { id: '2', value: 'Medio' },
                  { id: '3', value: 'Dificil' },
                  { id: '4', value: 'Muy dificil' }
                ]}
                onChange={(e) => setChallenge({ ...challenge, difficulty: parseInt(e.id) as 1 | 2 | 3 | 4 })}
              />
            </div>
          </div>
          <label className='text-start items-start flex justify-start ali'>Descripción *</label>
          <Input type='text' placeholder='Descripción *' onChange={(e) => setChallenge({ ...challenge, description: e })} value={challenge.description} />
        </div>
        <Button onClick={handleCreate}>Publicar reto</Button>
      </div>
    </Dialog>
  )
}
