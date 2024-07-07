import { IChallenge, ICreateChallenge } from '../models/Challenge'

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

export const loadDifficultyChallenge = async (difficulty: number): Promise<IChallenge[]> => {
  // retornar los retos que tengan la dificultad que se le pase y esten
  const res = await fetch(`/api/challenges?difficulty=${difficulty}&approved=true`)
  const data = await res.json()
  return data
}

export const createChallenge = async (challenge: ICreateChallenge): Promise<void> => {
  const formData = new FormData()
  formData.append('title', challenge.title)
  formData.append('description', challenge.description)
  formData.append('difficulty', challenge.difficulty.toString())
  formData.append('points', challenge.points.toString())
  formData.append('createdBy', challenge.createdBy)

  await fetch('/api/challenges', {
    method: 'POST',
    body: formData
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
