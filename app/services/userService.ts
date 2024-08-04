import { IAthlete } from '../models/Athlete'

export const loadUser = async (userId: string): Promise<IAthlete> => {
  const res = await fetch(`/api/athletes/${userId}`)
  const data = await res.json()
  return data
}
