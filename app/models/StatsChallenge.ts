import { Schema, model, models } from 'mongoose'

// el tipo puede ser un número o un booleano
const statsChallengeSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'Athlete', required: true },
  challengeId: { type: Schema.Types.ObjectId, ref: 'Challenge', required: true },
  description: { type: String, required: false },
  date: { type: Date, default: Date.now, required: true },
  record: {
    type: Schema.Types.Mixed,
    required: true,
    validate: {
      validator: function (v: any) {
        return typeof v === 'number' || typeof v === 'boolean'
      }
    }
  },
  linkVideo: { type: String, required: false },
  official: { type: Boolean, default: false, required: true },
  approved: { type: Boolean, default: false, required: true },
  points: { type: Number, default: 0, required: true }
})

export default models?.StatsChallenge || model('StatsChallenge', statsChallengeSchema)

export interface IStatsChallenge {
  _id: string
  userId: string
  challengeId: string
  description: string
  date: string
  record: number | boolean
  linkVideo: string
  official: boolean
  approved: boolean
  points: number
}

export interface ICreateStatsChallenge {
  userId: string
  challengeId: string
  description: string
  date: string
  record: number | boolean
  linkVideo: string
  official: boolean
}
