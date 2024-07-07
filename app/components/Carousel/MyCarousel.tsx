'use client'

import { Carousel } from 'nuka-carousel'
import { ReactElement, useEffect, useState } from 'react'
import ChallengeCardCarousel from '../Cards/ChallengeCardCarousel'
import { IChallenge } from '@/app/models/Challenge'
import { loadChallenges } from '@/app/services/challengeServices'

export default function MyCarousel (): ReactElement {
  const [challengesApi, setChallengesApi] = useState<IChallenge[]>([])

  useEffect(() => {
    loadChallenges()
      .then(res => setChallengesApi(res))
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    console.log(challengesApi)
  }, [challengesApi])

  return (
    <Carousel
      scrollDistance='slide'
      showArrows
      wrapMode='wrap'
      autoplay
    >
      {challengesApi.map((challenge, i) => <ChallengeCardCarousel challenge={challenge} key={i} />)}
    </Carousel>
  )
}
