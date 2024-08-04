import { Schema, model, models } from 'mongoose'

const commentSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'Athlete', required: true },
  challengeId: { type: Schema.Types.ObjectId, ref: 'Challenge', required: true },
  content: { type: String, required: true }
}, { timestamps: true })

export default models?.Comment || model('Comment', commentSchema)

export interface IComment {
  id: string
  userId: string
  challengeId: string
  content: string
  createdAt: string
}

export interface ICreateComment {
  userId: string
  challengeId: string
  content: string
}
