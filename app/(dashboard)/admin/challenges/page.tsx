'use client'

import ChallengeCardAdmin from '@/app/components/Cards/ChallengeCardAdmin'
import Container from '@/app/components/Container'
import { IChallenge } from '@/app/models/Challenge'
import { loadChallenges, loadUnapprovedChallenges } from '@/app/services/challengeServices'
import { useEffect, useState } from 'react'
import { Switch } from '@/components/ui/switch'

export default function AdminChallengesPage () {
  const [unnaprovedChallenges, setUnapprovedChallengesApi] = useState<IChallenge[]>([])
  const [challengesApi, setChallengesApi] = useState<IChallenge[]>([])
  const [view, setView] = useState<boolean>(true)

  useEffect(() => {
    loadUnapprovedChallenges()
      .then(res => setUnapprovedChallengesApi(res))
      .catch(err => console.log(err))

    loadChallenges()
      .then(res => setChallengesApi(res))
      .catch(err => console.log(err))
  }, [])

  return (
    <Container>
      <>
        <div className='flex flex-row gap-4 mb-4'>
          {view ? <p>Ver retos aprobados</p> : <p>Ver retos pendientes</p>}
          <Switch onCheckedChange={() => setView(!view)} />
        </div>
        <div>
          {
          view
            ? (
                unnaprovedChallenges.map((challenge: IChallenge) => (
                  <ChallengeCardAdmin challenge={challenge} key={challenge._id} />
                ))
              )
            : (
                challengesApi.map((challenge: IChallenge) => (
                  <ChallengeCardAdmin challenge={challenge} key={challenge._id} />
                ))
              )
          }
        </div>
      </>
    </Container>
  )
}
