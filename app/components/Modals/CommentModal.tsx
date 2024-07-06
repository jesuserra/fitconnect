import React, { ReactElement } from 'react'
import styles from './CommentModal.module.css'
import { useSearchParams } from 'next/navigation'
import { comments } from '@/app/api/comments/route'
import Dialog from './Dialog'

export default function CommentModal (): ReactElement {
  const params = useSearchParams()
  const id = params.get('id')

  const _comments = comments.filter(comment => comment.reference_id === id)

  return (
    <Dialog id='commentModal'>
      <div className='justify-end flex flex-col'>
        {comments.length === 0
          ? <p>No hay comentarios</p>
          : _comments.map(comment => (
            <div key={comment.id} className={styles.comment}>
              <p>{comment.content}</p>
              <span>{comment.created_at}</span>
            </div>
          ))}
      </div>
    </Dialog>
  )
}
