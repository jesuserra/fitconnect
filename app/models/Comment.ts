export interface IComment {
  id: string
  user_id: string
  reference_id: string
  content: string
  type: 'Challenge' | 'Post'
  created_at: string
}
