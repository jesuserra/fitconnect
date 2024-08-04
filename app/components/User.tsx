'use client'

import { ReactElement } from 'react'
import { badges } from '../api/badges/route'
import BadgesModal from './Modals/BadgesModal'
import Image from 'next/image'

export default function User ({ imageUrl }: { imageUrl: string }): ReactElement {
  const openModal = (): void => {
    const modal = document.getElementById('BadgesModal') as HTMLDialogElement
    modal?.showModal()
  }

  // const closeModal = (): void => {
  //   const modal = document.getElementById('BadgesModal') as HTMLDialogElement
  //   modal.close()
  // }

  console.log(imageUrl)
  const myBadges = [
    { id: 1, progress: 2 },
    { id: 2 },
    { id: 3, progress: 25 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 10, progress: 5 },
    { id: 11, progress: 7 },
    { id: 12, progress: 30 },
    { id: 22, progress: 10 },
    { id: 31, progress: 5 }
  ]

  return (
    <div className='cursor-pointer'>
      <div onClick={openModal}>
        <Image className='w-12 h-12 rounded-full' alt='User Photo' src={imageUrl} width={120} height={120} />
      </div>
      <BadgesModal badges={badges} myBadges={myBadges} />
    </div>
  )
}
