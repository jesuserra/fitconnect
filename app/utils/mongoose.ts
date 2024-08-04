import { connect, disconnect } from 'mongoose'

const conn = {
  isConnected: 0
}

export async function connectDB (): Promise<void> {
  console.log('Connecting to db')
  // Cada metodo va a llamar a conectarse a la BD, por lo que si ya
  // esta conectado, cancelara el volver a conectarse
  if (conn.isConnected === 1) {
    console.log('Ya conectado')
    return
  }
  const db = await connect(process.env.MONGODB_URI as string)
  conn.isConnected = db.connections[0].readyState
  console.log('Nombre BD: ', db.connection.db.databaseName, conn.isConnected)
}

export async function disconnectDB (): Promise<void> {
  console.log('Disconnecting from db')
  await disconnect()
}
// connection.on('connected', () => {
//   console.log('Mongoose connected to db')
// })

// connection.on('error', (err) => {
//   console.log('Mongoose connection error: ' + err)
// })

// connection.on('disconnected', () => {
//   console.log('Mongoose disconnected from db');
// })
