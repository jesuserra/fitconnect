import { IBadge } from '@/models/Badge'
import React, { ReactElement } from 'react'

export default function BadgeCard ({ badge, completed, progress }: { badge: IBadge, completed: boolean, progress?: number }): ReactElement {
  return (
    <div className='flex items-center relative rounded-xl bg-gray-100' title={badge.description}>
      <div className='w-32 h-28 flex flex-col items-center gap-2'>
        <img src={`/badges/${badge.image}`} alt='Badge' width={80} height={80} className={completed ? '' : 'filter grayscale blur-[2px]'} />
        <div className='flex flex-col leading-[4px]'>
          <span className='text-center text-[10px] font-bold leading-[8px]'>{badge.title}</span><br />
          <span className='text-center text-[10px] leading-[8px]'>{progress !== undefined ? `${progress > badge.toCompleted ? badge.toCompleted : progress}` : 0} / {badge.toCompleted}</span>
        </div>
      </div>
    </div>
  )
}
