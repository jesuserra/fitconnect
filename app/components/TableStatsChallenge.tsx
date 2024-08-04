import { IStatsChallenge } from '../models/StatsChallenge'
import { formatDateSpanish } from '../utils/DateHelper'

export default function TableStatsChallenge ({ stats, typeChallenge }: { stats: IStatsChallenge[], typeChallenge: 1 | 2 | 3 }) {
// Transforma segundos en minutos y segundos
  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${minutes}:${seconds}`
  }

  return (
    <div className='flex flex-col gap-4'>
      <h2>Tus marcas personales</h2>
      {stats.length === 0
        ? <p>Todavía no has guardado una marca en este reto. Guarda tus marcas personales para verlas aquí.</p>
        : (
          <table className='border-collapse border border-slate-200 text-sm'>
            <tr className='border border-slate-200'>
              <th className='py-2 px-4 border-slate-200 border'>Fecha</th>
              <th className='py-2 px-4 border-slate-200 border'>Record</th>
              <th className='py-2 px-4 border-slate-200 border'>Descripción</th>
            </tr>
            {stats.map(stat => (
              <tr className='border border-slate-200' key={stat._id}>
                <td className='py-2 px-4 border-slate-200 border'>{formatDateSpanish(stat.date)}</td>
                <td className='py-2 px-4 border-slate-200 border'>
                  {/* 1 tiempo 2 repeticiones 3 booleano */}
                  {typeChallenge === 1 && formatTime(stat.record as number)}
                  {typeChallenge === 2 && stat.record}
                  {typeChallenge === 3 && stat.record === true ? 'Completado' : 'No completado'}
                  {stat.official ? 'oficial' : 'personal'}
                  --{stat.points}--
                </td>
                <td className='py-2 px-4 border-slate-200 border'>{stat.description}</td>
              </tr>
            ))}
          </table>
          )}
    </div>
  )
}
