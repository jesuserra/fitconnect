'use client'

import Container from '@/app/components/Container'
// import { useState } from 'react'
// import AthleteCard from '@/app/components/Cards/AthleteCard'
// import styles from './page.module.css'
// import FlagDropdown from '@/app/components/FlagDropdown'
// import { IAthlete } from '@/app/models/Athlete'

export default function page () {
  // De todos los atletas, obtener los países sin repetir
  // const countries = athletes.map((athlete: IAthlete) => athlete.country).filter((value, index, self) => self.indexOf(value) === index)
  // const [country, setCountry] = useState('Todos')
  // const _athletes = athletes.filter((athlete: IAthlete) => country === 'Todos' ? true : athlete.country === country)

  return (
    <Container>
      <div className='w-full'>
        {/* <FlagDropdown options={countries} style={{ marginBottom: '10px' }} onChange={((value) => { setCountry(value) })} /> */}
        {/* <div className={styles.grid}>
          {_athletes.toSorted((a, b) => b.points - a.points).map((athlete: IAthlete) => (
            <div key={athlete._id}>
              <AthleteCard athlete={athlete} />
            </div>
          ))}
        </div> */}
        <div />
      </div>
    </Container>
  )
}
