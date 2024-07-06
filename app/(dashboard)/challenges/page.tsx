'use client'

import ChallengeCard from '@/app/components/Cards/ChallengeCard'
import styles from './page.module.css'
import Container from '@/app/components/Container'
import { IChallenge } from '@/models/Challenge'
import Button from '@/app/components/Button'
import CreateChallenge from '@/app/components/Modals/CreateChallenge'
import { useEffect, useState } from 'react'
import { loadChallenges } from '@/app/services/challenges'

export default function page() {
  // const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    const modal = document.getElementById('createChallengeModal') as HTMLDialogElement
    modal?.showModal()
  }

  const [challengesApi, setChallengesApi] = useState([])
  
  useEffect(() => {
    loadChallenges()
    .then(res => setChallengesApi(res))
    .catch(err => console.log(err))
  }, [])

  return (
    <Container>
      <>
      <CreateChallenge /> 
      <div className='w-full justify-end flex items-end mb-8'>
        <Button onClick={openModal} >Subir reto</Button>
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
          <ChallengeCard challenge={challenge} key={challenge._id}/>  
        ))
      }
      </div>
      </>
      </Container>
  )
}
