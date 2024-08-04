import { IChallenge, ICreateChallenge } from '../models/Challenge'

export const loadChallenge = async (id: string): Promise<IChallenge> => {
  const res = await fetch(`/api/challenges/${id}`)
  const data = await res.json()
  return data
}

export const loadChallenges = async (): Promise<IChallenge[]> => {
  const res = await fetch('/api/challenges')
  const data = await res.json()
  return data
}

export const loadUnapprovedChallenges = async (): Promise<IChallenge[]> => {
  const res = await fetch('/api/challenges?approved=false')
  const data = await res.json()
  return data
}

// retornar los retos que tengan la dificultad que se le pase y esten aprobados
export const loadDifficultyChallenges = async (difficulty: number): Promise<IChallenge[]> => {
  const res = await fetch(`/api/challenges?difficulty=${difficulty}&approved=true`)
  const data = await res.json()
  return data
}

export const createChallenge = async (challenge: ICreateChallenge): Promise<void> => {
  console.log(challenge)
  await fetch('/api/challenges', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(challenge)
  })
}

export const modifyChallenge = async (challenge: IChallenge): Promise<void> => {
  challenge.approved = true
  await fetch(`/api/challenges/${challenge._id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(challenge)
  })
}

export const deleteChallenge = async (challenge: IChallenge): Promise<void> => {
  await fetch(`/api/challenges/${challenge._id}`, {
    method: 'DELETE'
  })
}

export const addImageChallenge = async (challenge: IChallenge, file: File): Promise<void> => {
  const formData = new FormData()
  formData.append('id', challenge._id)
  formData.append('file', file)

  await fetch('/api/challenges/image', {
    method: 'PUT',
    body: formData
  })
}

export const addLike = async (challengeId: string): Promise<void> => {
  try {
    await fetch(`/api/challenges/${challengeId}/like`, {
      method: 'PUT'
    })
  } catch (error: any) {
    console.error('Error adding like:', error)
  }
}

export const addDislike = async (challengeId: string): Promise<void> => {
  try {
    await fetch(`/api/challenges/${challengeId}/dislike`, {
      method: 'PUT'
    })
  } catch (error: any) {
    console.error('Error adding like:', error)
  }
}
