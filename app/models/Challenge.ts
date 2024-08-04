import { Schema, model, models } from 'mongoose'

// Facil, medio, dificil, muy dificil
const difficultyChallenge = [1, 2, 3, 4]
// 1 Tiempo, 2 Repeticiones, 3 Booleano
const typeChallenge = [1, 2, 3]

const challengeSchema = new Schema({
  createdBy: { type: Schema.Types.ObjectId, ref: 'Athlete' },
  title: { type: String, required: true },
  description: { type: String, required: true },
  difficulty: { type: Number, enum: difficultyChallenge, required: true },
  points: { type: Number, default: 0, required: true },
  likes: { type: Number, default: 0, required: true },
  type: { type: Number, enum: typeChallenge, required: false },
  approved: { type: Boolean, default: false },
  urlImage: { type: String, required: false }
}, { timestamps: true })

// Verifica si el modelo ya existe, si no lo crea con model('Challenge', challengeSchema)
// Al crearlo con model (), mongoose se lo guarda internamente
// Si volvieramos a intentar crearlo con model() nos daria un error
export default models?.Challenge || model('Challenge', challengeSchema)

export interface IChallenge {
  _id: string
  createdBy: string
  title: string
  description: string
  difficulty: 1 | 2 | 3 | 4
  points: number
  likes: number
  type: 1 | 2 | 3
  approved: boolean
  urlImage: string

  createdAt: string
  updatedAt: string
}

export interface ICreateChallenge {
  title: string
  description: string
  difficulty: 1 | 2 | 3 | 4
  createdBy: string
}
