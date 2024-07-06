import { ReactElement } from 'react'
import styles from './AvatarDefault.module.css'

interface IAvatarDefault {
  num: number
  maxResources: number
  content?: object[]
  props?: ReactElement
}

export default function AvatarDefault ({ num, maxResources, content, props }: Readonly<IAvatarDefault>): ReactElement {
  // const names = content?.map((e: any) => e.name).join(', ').replace(/, /g, '<br>')
  const names = content?.map((e: any) => e.name).join('\n')

  return (
    <>
      {num !== 0 &&
        <div
          title={names}
          className={`${styles.content} ${styles.titleHover}`} style={{ left: maxResources * 23 }} {...props}
        >
          +{num}
        </div>}
    </>
  )
}
