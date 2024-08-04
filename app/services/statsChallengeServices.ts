import { ICreateStatsChallenge, IStatsChallenge } from '../models/StatsChallenge'

export const loadStatsChallengesByUser = async (userId: string, challengeId: string): Promise<IStatsChallenge[]> => {
  const res = await fetch(`/api/statsChallenge?userId=${userId}&challengeId=${challengeId}`)
  const data = await res.json()
  console.log(data)
  return data
}

export const createStatsChallenge = async (challenge: ICreateStatsChallenge): Promise<void> => {
  await fetch('/api/statsChallenge', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(challenge)
  })
}

// Approved sea false y official sea true
export const loadPendingStatsChallenges = async (): Promise<IStatsChallenge[]> => {
  const res = await fetch('/api/statsChallenge?approved=false&official=true')
  const data = await res.json()
  return data
}

export const deleteStatChallenge = async (statChallengeId: string): Promise<void> => {
  await fetch(`/api/statsChallenge/${statChallengeId}`, {
    method: 'DELETE'
  })
}

export const acceptStatChallenge = async (statChallenge: IStatsChallenge, points: number): Promise<void> => {
  statChallenge.approved = true
  statChallenge.points = points
  await fetch(`/api/statsChallenge/${statChallenge._id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(statChallenge)
  })
}
