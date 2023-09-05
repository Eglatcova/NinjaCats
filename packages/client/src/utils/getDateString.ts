const getDateString = (timestamp: number | null) => {
  if (timestamp === null) return '-'
  return new Date(timestamp).toLocaleString('ru')
}

export { getDateString }
