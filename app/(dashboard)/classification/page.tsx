import Container from '@/app/components/Container'
import { IAthlete } from '@/app/models/Athlete'
import React, { ReactElement, useEffect, useState } from 'react'

export default function page (): ReactElement {
  const [athletes, setAthletes] = useState([])

  const loadAthletes = async () => {
    const res = await fetch('/api/athletes')
    const data = await res.json()
    return data
  }

  // const loadChallenges = async () => {
  //   const res = await fetch('/api/challenges')
  //   const data = await res.json()
  //   return data
  // }

  useEffect(() => {
    loadAthletes()
      .then(res => setAthletes(res))
      .catch(err => console.log(err))

    // loadChallenges()
    // .then(res => setAthletes(res))
    // .catch(err => console.log(err))
  }, [])
  return (
    <Container>
      <div>
        <p>Classification</p>
        <p>Classification</p>
        <p>Classification</p>
        <p>Classification</p>
        {athletes.map((athlete: IAthlete) => (
          <p key={athlete._id}>
            {athlete.username} -- {athlete.age} -- {athlete._id}
          </p>
        ))}
      </div>
    </Container>
  )
}
