import { IBadge } from './Badge'
import { Schema, model, models } from 'mongoose'

const athleteSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: true,
    trim: true
  },
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  surnames: {
    type: String,
    required: [true, 'Surname is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true
  },
  age: Number,
  country: {
    type: String,
    required: [true, 'Country is required'],
    trim: true
  },
  password: {
    type: String,
    required: [false]
  }
}, {
  timestamps: true
})

export default models?.Athlete || model('Athlete', athleteSchema)
// const Athlete = models.Athlete || model('Athlete', athleteSchema)

// export default Athlete
export interface IAthlete {
  _id: string
  createdAt: string
  updatedAt: string

  username: string
  name: string
  surnames: string
  age: number
  country: string
  description?: string
  email: string
  password?: string
  image: string
  points: number
  badges?: IBadge[]
}

export interface ICreateAthlete {
  username: string
  name: string
  surnames: string
  age: number
  country: string
  email: string
  password: string
}

export interface ICreateAthleteGoogle {
  id: string
  name: string
  email: string
  image: string
}
