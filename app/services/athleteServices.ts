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

export interface ILoginUser {
  email: string
  password: string
}

// Devolvera un string con el id del usuario
export const login = async (loginUser: ILoginUser): Promise<any> => {
  const res = await fetch(`${process.env.AUTH_URL as string}/api/athletes/login`, {
    method: 'POST',

    body: JSON.stringify(loginUser),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  console.log(res)
  const data = await res.json()
  console.log(data)
  return data
}

export const getAthleteById = async (id: string): Promise<IAthlete> => {
  const res = await fetch(`/api/athletes/${id}`)
  const data = await res.json()
  return data
}
