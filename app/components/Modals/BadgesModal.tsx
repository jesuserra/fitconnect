import React, { ReactElement } from 'react'
import styles from './BadgesModal.module.css'
import BadgeCard from '../Cards/BadgeCard'
import Dialog from './Dialog'

export default function BadgesModal ({ badges, myBadges }: { badges: any[], myBadges: any[] }): ReactElement {
  return (
    <Dialog id='BadgesModal'>
      <div className='justify-end flex' />
      <div className={styles.grid}>
        {badges.map((badge) => {
          const progress = myBadges.find(b => b.id === badge.id)?.progress
          return <BadgeCard key={badge.id} badge={badge} completed={progress !== undefined && progress >= badge.toCompleted} progress={progress} />
        })}
      </div>
    </Dialog>
  )
}
