import { ReactElement, useState } from 'react'
import Button from '../Button'
import Input from '../Input'
import Dropdown from '../Dropdown'
import Dialog from './Dialog'

interface Challenge {
  title: string
  description: string
  difficulty: number
  points: number
  file: File | null
}
export default function CreateChallenge (): ReactElement {
  // Pasar el id del usuario logeado
  const userId = '666d5021add60d0314e1ee09'

  async function handleCreate (): Promise<void> {
    const formData = new FormData()
    formData.append('title', challenge.title)
    formData.append('description', challenge.description)
    formData.append('difficulty', challenge.difficulty.toString())
    formData.append('points', challenge.points.toString())
    formData.append('createdBy', userId)

    if (challenge.file !== null) {
      formData.append('file', challenge.file)
    }
    try {
      await fetch('/api/challenges', {
        method: 'POST',
        // headers: {
        //   'Content-Type': 'application/json'
        // },
        body: formData
      })
    } catch (error: any) {
      console.log(error)
    }
    setChallenge({
      title: '',
      description: '',
      difficulty: 0,
      points: 0,
      file: null
    })
    handleClose()
  }

  const [challenge, setChallenge] = useState<Challenge>({
    title: '',
    description: '',
    difficulty: 0,
    points: 0,
    file: null
  })

  function handleClose (): void {
    const dialog = document.getElementById('createChallengeModal') as HTMLDialogElement
    dialog?.close()
  }

  return (
    <Dialog id='createChallengeModal' handleClose={handleClose}>
      <div className='flex flex-col gap-4 items-center'>
        <Input type='text' placeholder='Nombre del reto *' onChange={(e) => setChallenge({ ...challenge, title: e })} value={challenge.title} />
        <Input type='text' placeholder='Descripción *' onChange={(e) => setChallenge({ ...challenge, description: e })} value={challenge.description} />
        <Input type='number' placeholder='Puntuación sugerida' onChange={(e) => setChallenge({ ...challenge, points: Number(e) })} value={challenge.points.toString()} />
        <Dropdown options={['Muy fácil', 'Fácil', 'Medio', 'Difícil', 'Muy díficil']} onChange={(e) => setChallenge({ ...challenge, difficulty: ['Muy fácil', 'Fácil', 'Medio', 'Difícil', 'Muy díficil'].indexOf(e) })} />
        <input type='file' accept='image/*' onChange={(e) => setChallenge({ ...challenge, file: e.target.files !== null ? e.target.files[0] : null })} />
        <Button onClick={handleCreate}>Crear reto</Button>
      </div>
    </Dialog>
  )
}
