'use client'

import ChallengeCardAdmin from '@/app/components/Cards/ChallengeCardAdmin'
import Container from '@/app/components/Container'
import { IChallenge } from '@/app/models/Challenge'
import { loadUnapprovedChallenges } from '@/app/services/challengeServices'
import React, { useEffect, useState } from 'react'

export default function AdminPage () {
  const [challengesApi, setChallengesApi] = useState<IChallenge[]>([])
  useEffect(() => {
    loadUnapprovedChallenges()
      .then(res => setChallengesApi(res))
      .catch(err => console.log(err))
  }, [])

  return (
    <Container>
      <div>
        {challengesApi.map((challenge: IChallenge) => (
          <ChallengeCardAdmin challenge={challenge} key={challenge._id} />
        ))}
      </div>
    </Container>
  )
}
