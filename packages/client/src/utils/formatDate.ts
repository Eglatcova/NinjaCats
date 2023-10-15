export const formatDate = (dateStr: string | null) => {
  if (!dateStr) {
    return '-'
  }
  const date = new Date(dateStr)
  return date
    ? `${date.getHours()}:${date.getMinutes()} ${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
    : '-'
}
