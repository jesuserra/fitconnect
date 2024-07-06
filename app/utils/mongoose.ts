import { connect } from 'mongoose'

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
  const db = await connect('mongodb://localhost:27017/test')
  conn.isConnected = db.connections[0].readyState
  console.log('Nombre BD: ', db.connection.db.databaseName, conn.isConnected)
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
