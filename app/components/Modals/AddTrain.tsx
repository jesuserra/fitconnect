import { ReactElement, useState } from 'react'
import Button from '../Button'
import Input from '../Input'
import Dropdown from '../Dropdown'
import Dialog from './Dialog'

interface Challenge {
  title: string
  description: string
  difficulty: 1 | 2 | 3 | 4
  points: number
  createdBy: string
}
export default function AddTrain (): ReactElement {
  // Pasar el id del usuario logeado
  const userId = '666d5021add60d0314e1ee09'

  async function handleCreate (): Promise<void> {
    // CreateTrain(challenge)
    setChallenge({
      title: '',
      description: '',
      difficulty: 1,
      points: 0,
      createdBy: userId
    })
    handleClose()
  }

  const [challenge, setChallenge] = useState<Challenge>({
    title: '',
    description: '',
    difficulty: 1,
    points: 0,
    createdBy: userId
  })

  function handleClose (): void {
    const dialog = document.getElementById('createTrainModal') as HTMLDialogElement
    dialog?.close()
  }

  return (
    <Dialog id='createTrainModal' handleClose={handleClose}>
      <div className='flex flex-col gap-4 items-center'>
        <Input type='text' placeholder='Nombre del reto *' onChange={(e) => setChallenge({ ...challenge, title: e })} value={challenge.title} />
        <Input type='text' placeholder='Descripción *' onChange={(e) => setChallenge({ ...challenge, description: e })} value={challenge.description} />
        <Input type='number' placeholder='Puntuación sugerida' onChange={(e) => setChallenge({ ...challenge, points: Number(e) })} value={challenge.points.toString()} />
        <Dropdown
          options={[
            { id: '1', value: 'Fácil' },
            { id: '2', value: 'Medio' },
            { id: '3', value: 'Dificil' },
            { id: '4', value: 'Muy dificil' }
          ]}
          onChange={(e) => setChallenge({ ...challenge, difficulty: parseInt(e.id) as 1 | 2 | 3 | 4 })}
        />
        <Button onClick={handleCreate}>Crear reto</Button>
      </div>
    </Dialog>
  )
}
