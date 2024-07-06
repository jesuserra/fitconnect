import { IComment } from '@/models/Comment'

export const comments: IComment[] = [
  {
    id: 'comment1',
    type: 'Challenge',
    content: 'Reto Murph compeltado correctamente en 22 minutos',
    user_id: 'athlete1',
    created_at: '2023-05-01T10:00:00Z',
    reference_id: 'challenge1'
  },
  {
    id: 'comment2',
    type: 'Challenge',
    content: 'Segundo comentario',
    user_id: 'athlete1',
    created_at: '2023-05-01T10:00:00Z',
    reference_id: 'challenge1'
  },
  {
    id: 'comment3',
    type: 'Challenge',
    content: 'Muy buen reto',
    user_id: 'athlete2',
    created_at: '2023-05-01T10:00:00Z',
    reference_id: 'challenge2'
  }
]
