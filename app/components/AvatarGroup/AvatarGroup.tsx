import { ReactElement } from 'react'
import styles from './AvatarGroup.module.css'
import Avatar from './Avatar'
import AvatarDefault from './AvatarDefault'

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
interface AvatarGroupProps {
  resources?: IAvatar[]
  maxResources?: number
}

export default function AvatarGroup ({ resources, maxResources = 3 }: Readonly<AvatarGroupProps>): ReactElement {
  const length = resources !== undefined ? resources.length : 0
  const rest = length - maxResources

  const restResources = resources?.slice(maxResources) ?? []

  return (
    // AJUSTAR TAMAÑO DEL CONTENTEDOR
    <div
      className={styles.circles}
      style={{ width: `${length < (maxResources + 1) ? (length * 23 + 7) : (maxResources + 1) * 23 + 7}px` }}
    >
      {length < maxResources
        ? (
          <>
            {
              resources !== undefined
                ? resources.map((user, index) => {
                  return <Avatar name={user.name} image={false} desp={index} userId={user.userId} key={user.userId ?? index} />
                })
                : null
            }
          </>
          )
        : (
          <>
            {
            resources !== undefined
              ? resources.slice(0, maxResources + 1).map((user, index) => {
                return <Avatar name={user.name} image={false} desp={index} userId={user.userId} key={user.userId} />
              })
              : null
          }
            {rest !== 1 && <AvatarDefault num={rest} maxResources={maxResources} content={restResources} />}
          </>
          )}
    </div>
  )
}
