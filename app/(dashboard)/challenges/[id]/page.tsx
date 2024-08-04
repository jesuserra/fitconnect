'use client'

import Button from '@/app/components/Button'
import Comments from '@/app/components/Comment/Comments'
import Container from '@/app/components/Container'
import DownButton from '@/app/components/DownButton'
import RegisterRecordToChallenge from '@/app/components/RegisterRecordToChallenge'
import TableStatsChallenge from '@/app/components/TableStatsChallenge'
import UpButton from '@/app/components/UpButton'
import { IAthlete } from '@/app/models/Athlete'
import { IChallenge } from '@/app/models/Challenge'
import { IComment, ICreateComment } from '@/app/models/Comment'
import { IStatsChallenge } from '@/app/models/StatsChallenge'
import { loadChallenge } from '@/app/services/challengeServices'
import { createComment, loadCommentsByChallengeId } from '@/app/services/commentServices'
import { loadStatsChallengesByUser } from '@/app/services/statsChallengeServices'
import { loadUser } from '@/app/services/userService'

import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function page () {
  const { id } = useParams()
  console.log(id)
  // const challenge = challenges.find(challenge => challenge.id === id)
  const [challenge, setChallenge] = useState<IChallenge>()
  const [user, setUser] = useState<IAthlete>()
  const [stats, setStats] = useState<IStatsChallenge[]>([])

  const [comments, setComments] = useState<IComment[]>([])

  useEffect(() => {
    loadCommentsByChallengeId(id as string)
      .then((data) => setComments(data))
      .catch((error) => console.error(error))
  }, [])

  useEffect(() => {
    loadChallenge(id as string)
      .then(res => setChallenge(res))
      .catch(err => console.log(err))
  }, [id])

  useEffect(() => {
    if (challenge == null) return
    loadUser(challenge.createdBy)
      .then(res => setUser(res))
      .catch(err => console.log(err))
  }, [challenge])

  const handleUpClick = () => {
    console.log('Llamada up a mis retos', id)
  }

  const handleDownClick = () => {
    console.log('Llamada down')
  }

  useEffect(() => {
    loadStatsChallengesByUser('6680436fbb8f2f417495d2e0', id as string)
      .then(res => setStats(res))
      .catch(err => console.log(err))
  }, [id])

  const [comment, setComment] = useState<ICreateComment>({
    userId: '6680436fbb8f2f417495d2e0',
    challengeId: id as string,
    content: ''
  })

  const handleComment = () => {
    createComment(comment)
  }

  if (challenge == null) return <div>Loading...</div>
  return (
    <Container>
      <div className='flex flex-col gap-4 items-center'>

        <div className='flex flex-row gap-8 border-2'>
          <Image src={challenge?.urlImage} alt={challenge?.title} width={500} height={500} />
          <div className='flex flex-col gap-4'>
            <h1>{challenge?.title}</h1>
            <p>{challenge?.description}</p>
            <p>CREADO por: {user?.username}</p>
            <p>{challenge?.points}</p>
            <div className='flex flex-row justify-between'>
              <div>
                <UpButton clicked={false} onClick={handleUpClick} />
                <DownButton clicked={false} onClick={handleDownClick} />
              </div>
              <Button onClick={() => console.log('Llamada añadir a mis retos')}>
                Añadir a mis retos
              </Button>
            </div>
            <RegisterRecordToChallenge challengeId={id as string} userId='6680436fbb8f2f417495d2e0' typeChallenge={challenge.type} />
          </div>
        </div>
        <TableStatsChallenge stats={stats} typeChallenge={challenge.type} />
        <Comments comments={comments} />
        <textarea onChange={(e) => setComment({ ...comment, content: e.target.value })} />
        <Button onClick={handleComment}>Enviar</Button>
      </div>
    </Container>
  )
}
