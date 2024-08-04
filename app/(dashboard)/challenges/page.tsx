'use client'

import ChallengeCard from '@/app/components/Cards/ChallengeCard'
import styles from './page.module.css'
import Container from '@/app/components/Container'
import { IChallenge } from '@/app/models/Challenge'
import Button from '@/app/components/Button'
import CreateChallengeModal from '@/app/components/Modals/CreateChallengeModal'
import { useEffect, useState } from 'react'
import { loadDifficultyChallenges } from '@/app/services/challengeServices'
import Dropdown from '@/app/components/Dropdown'
import MyCarousel from '@/app/components/Carousel/MyCarousel'
import Authenticated from '@/app/components/Authenticated'

export default function page () {
  const [difficulty, setDifficulty] = useState<number>(0)
  const openModal = () => {
    const modal = document.getElementById('createChallengeModal') as HTMLDialogElement
    modal?.showModal()
  }

  const [challengesApi, setChallengesApi] = useState<IChallenge[]>([])

  useEffect(() => {
    loadDifficultyChallenges(difficulty)
      .then(res => setChallengesApi(res))
      .catch(err => console.log(err))
  }, [difficulty])

  return (
    <Container>
      <>
        <CreateChallengeModal />
        <h1 className='text-4xl font-bold text-white mb-4 my-10'>
          Retos recomendados
        </h1>
        <MyCarousel />
        <div className='flex flex-row justify-between py-4'>
          <Dropdown
            options={[
              { id: '0', value: 'Todos' },
              { id: '1', value: 'Fácil' },
              { id: '2', value: 'Medio' },
              { id: '3', value: 'Dificil' },
              { id: '4', value: 'Muy dificil' }
            ]} onChange={(value) => setDifficulty(parseInt(value.id))}
          />
          <Authenticated>
            <Button onClick={openModal}>Publicar reto</Button>
          </Authenticated>
        </div>
        <div className={styles.grid}>
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
