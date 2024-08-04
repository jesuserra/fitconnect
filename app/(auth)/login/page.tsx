import Container from '@/app/components/Container'
import LoginForm from '@/app/components/LoginForm'
import LoginFormGoogle from '@/app/components/LoginFormGoogle'

export default function LoginPage () {
  return (
    <Container>
      <>
        <h1 className='mb-10'>Iniciar sesión</h1>
        <div className='flex flex-row gap-20'>
          <LoginForm />
          <LoginFormGoogle />
        </div>
      </>
    </Container>
  )
}
