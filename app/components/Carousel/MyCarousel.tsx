'use client'

import { Carousel } from 'nuka-carousel'
import { ReactElement, useEffect, useState } from 'react'
import ChallengeCardCarousel from '../Cards/ChallengeCardCarousel'
import { loadChallenges } from '@/app/services/challenges'

export default function MyCarousel (): ReactElement {
  const [challengesApi, setChallengesApi] = useState([])

  useEffect(() => {
    loadChallenges()
      .then(res => setChallengesApi(res))
      .catch(err => console.log(err))
  }, [])

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
