import { auth } from '@/auth'
import Container from '@/app/components/Container'

export default async function Authenticated () {
  const session = await auth()

  if (session == null) {
    return (
      <Container>
        <p>No autenticado</p>
      </Container>
    )
  }

  return (
    <Container>
      <pre>
        {JSON.stringify(session, null, 2)}
        {session?.user?.name}
      </pre>
    </Container>
  )
}
