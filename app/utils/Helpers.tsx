export const countries = [
  { id: 'es', value: 'España' },
  { id: 'us', value: 'Estados Unidos' },
  { id: 'ca', value: 'Canadá' },
  { id: 'gb', value: 'Reino Unido' },
  { id: 'au', value: 'Australia' },
  { id: 'de', value: 'Alemania' },
  { id: 'fr', value: 'Francia' },
  { id: 'it', value: 'Italia' },
  { id: 'jp', value: 'Japón' },
  { id: 'br', value: 'Brasil' },
  { id: 'ua', value: 'Ucrania' }
]

export async function toBase64 (file: File): Promise<any> {
  return await new Promise((resolve, reject) => {
    const fileReader = new FileReader()

    fileReader.readAsDataURL(file)

    fileReader.onload = () => {
      resolve(fileReader.result)
    }

    fileReader.onerror = (error) => {
      reject(error)
    }
  })
}
