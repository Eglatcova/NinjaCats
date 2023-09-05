export interface ISignUpData {
  first_name: string
  second_name: string
  login: string
  email: string
  password: string
  phone: string
}

export interface ISignInData {
  login: string
  password: string
}

class AuthAPI {
  baseApiUrl: string

  constructor() {
    this.baseApiUrl = 'https://ya-praktikum.tech/api/v2/auth'
  }

  makeRequest = (
    path: string,
    method: string,
    data: ISignUpData | ISignInData | null = null
  ) => {
    return fetch(this.baseApiUrl + path, {
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
}

export const authAPI = new AuthAPI()
