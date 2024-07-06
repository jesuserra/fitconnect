'use client'

import { ReactElement } from 'react'
import Image from 'next/image'
import styles from './Avatar.module.css'
import { convertUpper } from '@/lib/helpers/ConvertUpper'
import { selectColorForName } from '@/lib/helpers/ColorHelper'

export interface IAvatar {
  userId?: string
  name?: string
  surnames?: string
  image?: string | boolean
  desp?: number
  size?: number
  disponibility?: number
  noTitle?: boolean
}

export default function Avatar ({ name = '', userId, image = 'false', desp = 0, size = 30, disponibility, noTitle, ...props }: Readonly<IAvatar>): ReactElement {
  return (
    <div
      data-title={name}
      className={`${styles.content} ${desp !== 0 ? styles.absolute : styles.relative} ${noTitle !== true ? styles.titleHover : ''}`}
      style={{ backgroundColor: selectColorForName(name), left: desp * 23, width: `${size}px`, height: `${size}px`, minWidth: `${size}px`, minHeight: `${size}px` }}
      {...props}
    >
      {image !== null
        ? convertUpper(name)
        : <div className={styles.img}><Image src={image} alt='Avatar' width={30} height={30} /></div>}
    </div>
  )
}
