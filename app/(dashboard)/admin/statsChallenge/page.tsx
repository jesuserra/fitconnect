'use client'

import StatChallengeCardAdmin from '@/app/components/Cards/StatChallengeCardAdmin'
import { IStatsChallenge } from '@/app/models/StatsChallenge'
import { loadPendingStatsChallenges } from '@/app/services/statsChallengeServices'
import React, { useEffect, useState } from 'react'

export default function AdminStatsPage () {
  const [statsChallenges, setStatsChallenges] = useState<IStatsChallenge[]>([])
  useEffect(() => {
    loadPendingStatsChallenges()
      .then(res => setStatsChallenges(res))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      {statsChallenges.map((statChallenge: IStatsChallenge) => (
        <StatChallengeCardAdmin statChallenge={statChallenge} key={statChallenge._id} />
      ))}
    </>
  )
}
