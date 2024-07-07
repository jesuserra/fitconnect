import { routines } from '@/app/api/routines/route'
import Container from '@/app/components/Container'
import RoutineCard from '@/app/components/RoutineCard'
import { IRoutine } from '@/app/models/Routines'
import styles from './page.module.css'
import React from 'react'

export default function page () {
  return (
    <Container>
      <div className={styles.grid}>
        {routines.map((routine: IRoutine) => (
          <div key={routine.id} className='mb-8'>
            <RoutineCard routine={routine} />
          </div>
        ))}
      </div>
    </Container>
  )
}
