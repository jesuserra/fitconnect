'use client'

import Button from '@/app/components/Button'
import Container from '@/app/components/Container'
import DownButton from '@/app/components/DownButton'
import UpButton from '@/app/components/UpButton'
import { IAthlete } from '@/models/Athlete'
import { IChallenge } from '@/models/Challenge'
import Result from '@/models/ResultChallenge'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function page() {
  const { id } = useParams()
  // const challenge = challenges.find(challenge => challenge.id === id)

  const loadChallenge = async () => {
    const res = await fetch(`/api/challenges/${id}`)
    const data = await res.json()
    return data
  }

  const loadUser = async () => {
    const res = await fetch(`/api/athletes/${challenge.createdBy}`)
    const data = await res.json()
    return data
  }

  const [challenge, setChallenge] = useState<IChallenge>({} as IChallenge) 
  const [user, setUser] = useState<IAthlete>({} as IAthlete)
  
  useEffect(() => {
    loadChallenge()
    .then(res => setChallenge(res))
    .catch(err => console.log(err))
  }, [])
  
  useEffect(() => {
    loadUser()
    .then(res => setUser(res))
    .catch(err => console.log(err))
  }, [challenge.createdBy])
  
  const handleUpClick = () => {
    console.log("Llamada up a mis retos", id)
  }

  const handleDownClick = () => {
    console.log("Llamada down")
  }

  const [resultValue , setResultValue] = useState<number>()

  async function  saveResult() {
    const newResult = new Result({
        // athlete: user._id,
        // challenge: challenge._id,
        // result: resultValue
        athlete: 1,
        challenge: 2,
        result: 3
    })
    try {
      const res = await fetch('/api/results', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newResult)
      })
    } catch (error: any) {
      console.log(error)
    }
  }

  return (
    <Container>
      <div>
        <img src={challenge?.title} alt={challenge?.title}/>
        <h1>{challenge?.title}</h1>
        <p>{challenge?.description}</p>
        <p>CREADO por: {user.username}</p>
        <p>{challenge?.points}</p>
        <div>
          <UpButton clicked={false} onClick={handleUpClick}/>
          <DownButton clicked={false} onClick={handleDownClick}/>
        </div>
        <Button onClick={() => console.log("Llamada añadir a mis retos")}>
          Añadir a mis retos
        </Button>
        Registrar tiempo
        <input type="number" value={resultValue} onChange={(e) => setResultValue(parseInt(e.target.value))}/>
        <Button onClick={saveResult}>
          Guardar resultado
        </Button>
      </div>
    </Container>
  )
}