import { ReactElement, useState } from 'react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import Button from '../Button'
export interface DayProps {
  day: number
  type?: 'normal' | 'today' | 'holiday' | 'weekend'
  description?: string
  handleDayClick: (day: number, description?: string) => void
  handleAddTraining: (day: number, train: string) => void
}

export default function Day ({ day, type, description, handleDayClick, handleAddTraining }: DayProps): ReactElement {
  const [train, setTrain] = useState(description)
  const getBackgroundColor = (type?: 'normal' | 'today' | 'holiday' | 'weekend') => {
    switch (type) {
      case 'today':
        return 'bg-red-400'
      case 'holiday':
        return 'bg-slate-50'
      case 'weekend':
        return 'bg-slate-50'
      default:
        return ''
    }
  }

  const getTextColor = (type?: 'normal' | 'today' | 'holiday' | 'weekend') => {
    switch (type) {
      case 'today':
        return 'text-black'
      case 'holiday':
        return 'text-black'
      case 'weekend':
        return 'text-black'
      default:
        return ''
    }
  }

  return (
    <Dialog>
      <DialogTrigger>
        <HoverCard>
          <HoverCardTrigger>
            <div
              onClick={() => handleDayClick(day, description)}
              className={`flex justify-center items-center w-7 h-7 rounded-full cursor-pointer select-none
              ${getBackgroundColor(type)} ${getTextColor(type)}
            }`}
            >
              {day}
            </div>
          </HoverCardTrigger>
          {description !== undefined && (
            <HoverCardContent>
              {description}
            </HoverCardContent>
          )}
        </HoverCard>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>¿Deseas añadir un entrenamiento?</DialogTitle>
          <DialogDescription>
            {/* <DescriptionTextEditor initialState={null} handleBlur={(e) => console.log(JSON.stringify(e))} /> */}
            <textarea className='w-full h-40' onChange={(e) => setTrain(e.target.value)} value={train} />
            <Button onClick={() => {
              handleAddTraining(day, train ?? '')
            }}
            >Submit
            </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
