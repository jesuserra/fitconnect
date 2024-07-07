'use client'

import ChallengeCard from '@/app/components/Cards/ChallengeCard'
import styles from './page.module.css'
import Container from '@/app/components/Container'
import { IChallenge } from '@/app/models/Challenge'
import Button from '@/app/components/Button'
import CreateChallenge from '@/app/components/Modals/CreateChallenge'
import { useEffect, useState } from 'react'
import { loadDifficultyChallenge } from '@/app/services/challengeServices'
import Dropdown from '@/app/components/Dropdown'

export default function page () {
  const [difficulty, setDifficulty] = useState<number>(0)
  const openModal = () => {
    const modal = document.getElementById('createChallengeModal') as HTMLDialogElement
    modal?.showModal()
  }

  const [challengesApi, setChallengesApi] = useState<IChallenge[]>([])

  useEffect(() => {
    loadDifficultyChallenge(difficulty)
      .then(res => setChallengesApi(res))
      .catch(err => console.log(err))
  }, [difficulty])

  return (
    <Container>
      <>
        <Dropdown
          options={[
            { id: '0', value: 'Todos' },
            { id: '1', value: 'Fácil' },
            { id: '2', value: 'Medio' },
            { id: '3', value: 'Dificil' },
            { id: '4', value: 'Muy dificil' }
          ]} onChange={(value) => setDifficulty(parseInt(value.id))}
        />
        <CreateChallenge />
        <div className='w-full justify-end flex items-end mb-8'>
          <Button onClick={openModal}>Subir reto</Button>
        </div>
        <div className={styles.grid}>
          {/* {challenges.map((challenge: IChallenge) => (
          <div key={challenge._id} className='mb-8'>
            <ChallengeCard challenge={challenge} />
          </div>
        ))}
      </div> */}
          {challengesApi.length === 0
            ? <p className='text-center'>No hay retos disponibles</p>
            : challengesApi.map((challenge: IChallenge) => (
              <ChallengeCard challenge={challenge} key={challenge._id} />
            ))}
        </div>
      </>
    </Container>
  )
}
