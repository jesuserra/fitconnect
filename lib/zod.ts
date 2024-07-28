import { object, string } from 'zod'

export const loginSchema = object({
  email: string({ required_error: 'El email es obligario' })
    .min(1, { message: 'El email debe tener al menos 4 caracteres' })
    .max(32, { message: 'El email debe tener menos de 32 caracteres' })
    .email({ message: 'El email no es válido' }),
  password: string({ required_error: 'La contraseña es obligatoria' })
    .min(1, { message: 'La contraseña debe tener al menos 4 caracteres' })
    .max(32, { message: 'La contraseña debe tener menos de 32 caracteres' })
})

export const registerSchema = object({
  username: string({ required_error: 'El email es obligario' })
    .min(4, { message: 'El email debe tener al menos 4 caracteres' })
    .max(32, { message: 'El email debe tener menos de 32 caracteres' }),
  password: string({ required_error: 'La contraseña es obligatoria' })
    .min(4, { message: 'La contraseña debe tener al menos 4 caracteres' })
    .max(32, { message: 'La contraseña debe tener menos de 32 caracteres' }),
  email: string({ required_error: 'El email es obligario' })
    .min(4, { message: 'El email debe tener al menos 4 caracteres' })
    .max(32, { message: 'El email debe tener menos de 32 caracteres' })
    .email({ message: 'El email no es válido' }),
  name: string({ required_error: 'El nombre es obligario' })
    .min(4, { message: 'El nombre debe tener al menos 4 caracteres' })
    .max(32, { message: 'El nombre debe tener menos de 32 caracteres' }),
  lastName: string({ required_error: 'El apellido es obligatorio' })
    .min(4, { message: 'El apellido debe tener al menos 4 caracteres' })
    .max(32, { message: 'El apellido debe tener menos de 32 caracteres' })
})
