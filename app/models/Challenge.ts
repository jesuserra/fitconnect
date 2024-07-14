import { Schema, model, models } from 'mongoose'

const challengeSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  difficulty: { type: Number, required: true },
  points: { type: Number, default: 0 },
  likes: { type: Number, required: true, default: 0 },
  urlImage: { type: String, required: false },
  approved: { type: Boolean, default: false },
  createdBy: { type: Schema.Types.ObjectId, ref: 'Athlete' }
})

// Verifica si el modelo ya existe, si no lo crea con model('Challenge', challengeSchema)
// Al crearlo con model (), mongoose se lo guarda internamente
// Si volvieramos a intentar crearlo con model() nos daria un error
export default models?.Challenge || model('Challenge', challengeSchema)

export interface IChallenge {
  _id: string
  createdAt?: string
  updatedAt?: string

  title: string
  description: string
  difficulty: 1 | 2 | 3 | 4
  points: number
  likes?: number
  urlImage?: string
  approved: boolean
  createdBy: string
}

export interface ICreateChallenge {
  // _id?: string
  // createdAt?: string
  // updatedAt?: string

  title: string
  description: string
  difficulty: 1 | 2 | 3 | 4
  points: number
  likes?: number
  urlImage?: string
  approved?: boolean
  createdBy: string
}
