'use client'

import { athletes } from '@/app/api/athletes/route'
import AthleteCard from '@/app/components/Cards/AthleteCard'
import Container from '@/app/components/Container'
import styles from './page.module.css'
import { useState } from 'react'
import { IAthlete } from '@/models/Athlete'
import FlagDropdown from '@/app/components/FlagDropdown'

export default function page() {
  // De todos los atletas, obtener los países sin repetir
  const countries = athletes.map((athlete: IAthlete) => athlete.country).filter((value, index, self) => self.indexOf(value) === index)
  const [country, setCountry] = useState('Todos')
  const _athletes = athletes.filter((athlete: IAthlete) => country === 'Todos' ? true : athlete.country === country)

  return (
    <Container>
      <div className='w-full'>
        <FlagDropdown options={countries} style={{ marginBottom: '10px' }} onChange={((value) => {setCountry(value)})}/> 
        <div className={styles.grid}>
          {_athletes.toSorted((a, b) => b.points - a.points).map((athlete: IAthlete) => (
            <div key={athlete._id}>
              <AthleteCard athlete={athlete} />
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </Container>
  )
}

