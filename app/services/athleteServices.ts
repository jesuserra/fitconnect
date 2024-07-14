import { IAthlete, ICreateAthlete } from '../models/Athlete'

export const createAthlete = async (athlete: ICreateAthlete): Promise<void> => {
  await fetch('/api/athletes', {
    method: 'POST',

    body: JSON.stringify(athlete),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

interface ILoginUser {
  username: string
  password: string
}

// Devolvera un string con el id del usuario
export const login = async (loginUser: ILoginUser): Promise<string> => {
  const res = await fetch('/api/athletes/login', {
    method: 'POST',

    body: JSON.stringify(loginUser),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = await res.json()
  console.log(data)
  return data
}

export const getAthleteById = async (id: string): Promise<IAthlete> => {
  const res = await fetch(`/api/athletes/${id}`)
  const data = await res.json()
  return data
}
