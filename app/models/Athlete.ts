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
  surname: {
    type: String,
    required: [true, 'Surname is required'],
    trim: true
  },
  age: Number
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
  last_name: string
  age: number
  country: string
  description: string
  email: string
  password: string
  image: string
  points: number
  badges?: IBadge[]
}
