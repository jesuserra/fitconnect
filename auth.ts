import NextAuth from 'next-auth'
import { MongoDBAdapter } from '@auth/mongodb-adapter'
import clientPromise from './lib/db'
import Credentials from 'next-auth/providers/credentials'
import { loginSchema } from './lib/zod'
import { login } from './app/services/athleteServices'
// import { saltAndHashPassword } from '@/utils/password'

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      authorize: async (credentials) => {
        const { data, success } = loginSchema.safeParse(credentials)
        if (!success) {
          throw new Error('Invalid credentials')
        } else {
          console.log(data)
          const user = await login({ email: data.email, password: data.password })
          console.log(user)
          if (user === null) {
            throw new Error('User not found.')
          }
          if (user.message === 'Invalid password') {
            console.log('Invalid password')
            throw new Error('Invalid password')
          }
          if (user.message === 'Athlete not found') {
            throw new Error('Athlete not found')
          }
          return user
        }
      }
    })
  ],
  session: { strategy: 'jwt' }
})
