import { IComment, ICreateComment } from '../models/Comment'

export const loadCommentsByChallengeId = async (challengeId: string): Promise<IComment[]> => {
  const res = await fetch(`/api/comments/?challengeId=${challengeId}`)
  const data = await res.json()
  return data
}

export const createComment = async (comment: ICreateComment): Promise<void> => {
  console.log(comment)
  await fetch('/api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
  })
}
