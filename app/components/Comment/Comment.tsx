import { IComment } from '@/app/models/Comment'
import { formatDateSpanish } from '@/app/utils/DateHelper'
import React from 'react'

export default function Comment ({ comment }: { comment: IComment }) {
  return (
    <div key={comment.id}>
      <p>{comment.content}</p>
      <p>{comment.userId}</p>
      <p>{formatDateSpanish(comment.createdAt)}</p>
    </div>
  )
}
