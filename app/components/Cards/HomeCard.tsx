import Image from 'next/image'
import { ReactElement } from 'react'

export default function HomeCard ({ title, description, image }: { title: string, description: string, image: string }): ReactElement {
  return (
    <div className='flex flex-col p-4 justify-between rounded-lg shadow-md'>
      <h2 className='text-2xl font-bold'>{title}</h2>
      <p>{description}</p>
      <div
        className='b-0 h-2/3'
        style={{
          maskImage: 'linear-gradient(white 80%, transparent), linear-gradient(to right, transparent, white 10%), linear-gradient(to top, white 90%, transparent), linear-gradient(to left, transparent, white 10% )',
          maskComposite: 'intersect'
        }}
      >
        <Image src={image} alt='home' className='w-full h-full object-cover' width={700} height={400} />
      </div>
    </div>
  )
}
