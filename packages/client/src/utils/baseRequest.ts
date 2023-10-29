export const baseRequest = (url: string, method: string, data: any = null) => {
  return fetch(`${url}`, {
    method,
    credentials: 'include',
    body: data ? JSON.stringify(data) : data,
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res)
    .catch(error => console.log(error))
}
