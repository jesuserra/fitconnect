export const loadChallenges = async (): Promise<void> => {
  const res = await fetch('/api/challenges')
  const data = await res.json()
  return data
}
