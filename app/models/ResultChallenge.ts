import { Schema, model, models } from 'mongoose'

const resultSchema = new Schema({
  athlete: { type: Schema.Types.ObjectId, ref: 'Athlete', required: true },
  challenge: { type: Schema.Types.ObjectId, ref: 'Challenge', required: true },
  time: {
    type: Number
  },
  reps: {
    type: Number
  },
  completedAt: {
    type: Date,
    default: Date.now
  }
})

export default models?.Result || model('Result', resultSchema)
