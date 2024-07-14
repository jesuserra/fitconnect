export function dateInRange (date: Date, rangeStart: Date, rangeEnd: Date): boolean {
  return rangeStart.getTime() <= date.getTime() && rangeEnd.getTime() >= date.getTime()
}

export function addDays (date: Date, days: number): Date {
  const copyDate = new Date(date)
  return new Date(copyDate.setDate(copyDate.getDate() + days))
}

export function subtractDays (date: Date, days: number): Date {
  const copyDate = new Date(date)
  return new Date(copyDate.setDate(copyDate.getDate() - days))
}

export function getWeekDayNames2 (date: Date, locale?: string): { weekDayNames: string[], highlightIndex: number } {
  const weekDayNames: string[] = []
  let highlightIndex = -1
  for (let i = 0; i < 7; i++) {
    const nextDate = new Date(date)
    nextDate.setDate(date.getDate() + i)
    if (equalDates(new Date(), nextDate)) {
      highlightIndex = i
    }
    const dayName = new Intl.DateTimeFormat(locale, { weekday: 'short' }).format(nextDate)
    // Obtener las tres primeras letras y convertir la primera letra a mayúscula
    const shortName = dayName.charAt(0).toUpperCase() + dayName.slice(1)

    weekDayNames.push(shortName)
  }
  return { weekDayNames, highlightIndex }
}

export function getDateFormat (date: Date, includeTime: boolean, locale?: string, month: 'long' | 'short' | 'narrow' | 'numeric' | '2-digit' | undefined = 'long'): string {
  const dayName = new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month,
    day: 'numeric',
    hour: includeTime ? '2-digit' : undefined,
    minute: includeTime ? '2-digit' : undefined
  }).format(date)
  return dayName
}

export function firstWeekDay (date: Date): Date {
  const dayNumber = date.getDay()
  return subtractDays(date, dayNumber - 1)
}

export function lastWeekDay (date: Date): Date {
  const dayNumber = date.getDay()
  return addDays(date, 7 - dayNumber)
}

export function equalDates (date1: Date, date2: Date): boolean {
  const year1 = date1.getFullYear()
  const month1 = date1.getMonth()
  const day1 = date1.getDate()
  const year2 = date2.getFullYear()
  const month2 = date2.getMonth()
  const day2 = date2.getDate()
  if (year1 === year2 && month1 === month2 && day1 === day2) {
    return true
  }
  return false
}

export function formatPendingHours (pendingHours: number): string {
  // Separar las pendingHours y los minutos
  const partes = pendingHours.toString().split('.')
  const horasEnteras = parseInt(partes[0], 10)
  const minutos = partes.length > 1 ? Math.round(parseFloat('0.' + partes[1]) * 60) : 0

  // Formatear en HH:MM
  const horasFormateadas = (horasEnteras === 0 && horasEnteras >= 0) ? '0' : (horasEnteras < 10 ? `0${horasEnteras}` : horasEnteras)
  const minutosFormateados = minutos < 10 ? `0${minutos}` : minutos

  if (horasEnteras < 0) {
    return `-${Math.abs(horasEnteras)}:${minutosFormateados}`
  }

  return `${horasFormateadas}:${minutosFormateados}`
}

// Formatear la fecha en formato dd-mm-yyyy
export function formatDate (date: Date): string {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return (`${day}-${month}-${year}`)
}

// Formatear la fecha en formato dd/mm/yyyy
export function formatLocaleShortDate (date: Date): string {
  return Intl.DateTimeFormat(undefined, { day: '2-digit', month: '2-digit', year: 'numeric' }).format(date)
}

// La que necesita el inputDate yyyy-mm-dd
export function formatDateInput (date: Date): string {
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')

  return `${year}-${month}-${day}`
}

export function getFirstLastWeekDay (weekNumber?: number, year?: number, firstWeekDay: 0 | 1 = 1): { title: string, firstDay?: Date, lastDay?: Date } {
  if (weekNumber === undefined || year === undefined) return { title: '' }
  // Create a new date for the first day of the year
  const firstDayYear = new Date(year, 0, 1)

  // Get the day of the week of the first day of the year (0: Sunday, 1: Monday, ..., 6: Saturday)
  const firstDayWeekDay = firstDayYear.getDay()

  // Determine the displacement to get the first day of the week
  const firstDayWeekDisplacement = firstWeekDay - firstDayWeekDay + (weekNumber - 1) * 7

  // Calculate the first day of the week
  const firstDayWeek = new Date(year, 0, 1 + firstDayWeekDisplacement)

  // Get the month and day of the first day of the week
  const firstDayWeekMonthNumber = firstDayWeek.getMonth()
  const firstDayWeekNumber = firstDayWeek.getDate()

  // Calculate the last day of the week
  const lastDayWeek = new Date(year, firstDayWeekMonthNumber, firstDayWeekNumber + 6)

  const formatter = Intl.DateTimeFormat(undefined, {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  })

  return {
    title: formatter.formatRange(firstDayWeek, lastDayWeek),
    firstDay: firstDayWeek,
    lastDay: lastDayWeek
  }
}

export function getWeekDayNames ({ firstWeekDay = 1, locale }: { firstWeekDay?: 0 | 1, locale?: string }): { weekDayNames: string[], highlightIndex: number } {
  // Crear un nuevo objeto Date
  const date = new Date()

  // Obtener el día de la semana (0 para Domingo, 1 para Lunes, ..., 6 para Sábado)
  const weekDay = date.getDay()

  // Si el día de la semana no es lunes (1), ajustar la fecha
  if (weekDay !== firstWeekDay) {
    // Calcular cuántos días faltan para el próximo lunes
    const pendingDays = 1 - weekDay // Si hoy es lunes, díasFaltantes será 0
    // Ajustar la fecha sumando los días faltantes
    date.setDate(date.getDate() + pendingDays)
  }

  const weekDayNames: string[] = []
  let highlightIndex = -1
  for (let i = 0; i < 7; i++) {
    const nextDate = new Date(date)
    nextDate.setDate(date.getDate() + i)
    if (equalDates(new Date(), nextDate)) {
      highlightIndex = i
    }
    const dayName = new Intl.DateTimeFormat(locale, { weekday: 'short' }).format(nextDate)
    // Obtener las tres primeras letras y convertir la primera letra a mayúscula
    const shortName = dayName.charAt(0).toUpperCase() + dayName.slice(1)

    weekDayNames.push(shortName)
  }
  return { weekDayNames, highlightIndex }
}

export function formatDateInputToApi (date: string): string {
  const formattedDate = date + 'T00:00:00.000Z'
  // const _date = new Date(formattedDate)
  return formattedDate
}

export function traducirFecha (fecha: string): string {
  const date = new Date(fecha)

  const dia = date.getUTCDate()
  const mes = date.getUTCMonth() + 1
  const año = date.getUTCFullYear()

  return `${dia}-${mes}-${año}`
}

export function convertSeconds (seconds: number): string {
  // Calculate days, hours, minutes, and remaining seconds
  const days = Math.floor(seconds / (3600 * 24))
  const hours = Math.floor((seconds % (3600 * 24)) / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const remainingSeconds = seconds % 60

  // Format the values to ensure they have two digits
  const formattedDays: string = (days < 10 ? '0' : '') + days.toString()
  const formattedHours: string = (hours < 10 ? '0' : '') + hours.toString()
  const formattedMinutes: string = (minutes < 10 ? '0' : '') + minutes.toString()
  const formattedSeconds: string = (remainingSeconds < 10 ? '0' : '') + remainingSeconds.toString()

  // Return the formatted result
  return `${formattedDays}.${formattedHours}:${formattedMinutes}:${formattedSeconds}`
}

export function getWeeksOfMonth ({ year, month }: { year: number, month: number }): number[][] {
  // const [year, month] = dateString.split('-').map(Number)
  const firstDay = new Date(year, month - 1, 1)
  const lastDay = new Date(year, month, 0)
  const weeks = []

  const startOfWeek = new Date(firstDay)
  const dayOfWeek = startOfWeek.getDay() - 1
  startOfWeek.setDate(startOfWeek.getDate() - dayOfWeek)

  // eslint-disable-next-line
  while (startOfWeek <= lastDay) {
    const week = getWeekNumber(startOfWeek)
    weeks.push(week)
    startOfWeek.setDate(startOfWeek.getDate() + 7)
  }

  return weeks
}

export function getWeekNumber (d: Date): number[] {
  // Copy date so don't modify original
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()))
  // Set to nearest Thursday: current date + 4 - current day number
  // Make Sunday's day number 7
  // eslint-disable-next-line
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7))
  // Get first day of year
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))
  // Calculate full weeks to nearest Thursday
  const weekNo = Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7)
  // Return array of year and week number
  return [d.getUTCFullYear(), weekNo]
}
