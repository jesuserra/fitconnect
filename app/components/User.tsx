'use client'

import { ReactElement } from 'react'
import { badges } from '../api/badges/route'
import BadgesModal from './Modals/BadgesModal'

export default function User (): ReactElement {
  const athlete = {
    image: 1
  }

  const openModal = (): void => {
    const modal = document.getElementById('BadgesModal') as HTMLDialogElement
    modal?.showModal()
  }

  // const closeModal = (): void => {
  //   const modal = document.getElementById('BadgesModal') as HTMLDialogElement
  //   modal.close()
  // }

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
        <img className='w-12 h-12 rounded-full' src={`https://randomuser.me/api/portraits/men/${athlete.image}.jpg`} alt='User Photo' />
      </div>
      <BadgesModal badges={badges} myBadges={myBadges} />
    </div>
  )
}
