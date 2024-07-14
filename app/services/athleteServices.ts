import { ICreateAthlete } from '../models/Athlete'

export const createAthlete = async (athlete: ICreateAthlete): Promise<void> => {
  await fetch('/api/athletes', {
    method: 'POST',

    body: JSON.stringify(athlete),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export const login = async (username: string, password: string): Promise<void> => {
  console.log('login')
  await fetch('/api/athletes/login', {
    method: 'POST',

    body: JSON.stringify({ username, password }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
