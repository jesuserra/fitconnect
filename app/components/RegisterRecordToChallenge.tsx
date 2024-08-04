import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'
import { ICreateStatsChallenge } from '../models/StatsChallenge'
import Button from './Button'
import { createStatsChallenge } from '../services/statsChallengeServices'
import { Checkbox } from '@/components/ui/checkbox'

export default function RegisterRecordToChallenge ({ challengeId, userId, typeChallenge }: { challengeId: string, userId: string, typeChallenge: number }) {
  const [stat, setStat] = useState<ICreateStatsChallenge>({
    userId,
    challengeId,
    description: '',
    date: '',
    record: true,
    linkVideo: '',
    official: false
  })

  const handleCreateStats = () => {
    createStatsChallenge(stat)
  }

  return (
    <div className='flex flex-col gap-4'>
      Registrar tiempo
      <div className='flex flex-row gap-4'>
        <Switch onCheckedChange={() => setStat({ ...stat, official: !stat.official })} />
        <p>{stat.official ? 'Tiempo oficial' : 'Marca personal'}</p>
      </div>
      <div className='flex flex-row gap-4'>
        <Input type='date' onChange={(e) => setStat({ ...stat, date: e.target.value })} />
        {typeChallenge === 1 && <Input type='number' value={stat.record as number} onChange={(e) => setStat({ ...stat, record: parseInt(e.target.value) })} />}
        {typeChallenge === 2 && <Input type='number' value={stat.record as number} onChange={(e) => setStat({ ...stat, record: parseInt(e.target.value) })} />}
        {typeChallenge === 3 && <Checkbox className='border-slate-200 border' onCheckedChange={(e) => console.log(e)} />}
      </div>
      <div className='flex flex-col gap-4'>
        {stat.official && <Input type='string' value={stat.linkVideo} onChange={(e) => setStat({ ...stat, linkVideo: e.target.value })} />}
        <Textarea onChange={(e) => setStat({ ...stat, description: e.target.value })} />
      </div>
      {stat.official
        ? (
          <Button onClick={handleCreateStats}>
            Enviar
          </Button>
          )
        : (
          <Button onClick={handleCreateStats}>
            Guardar
          </Button>

          )}
    </div>
  )
}
