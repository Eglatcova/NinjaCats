import { baseRequest } from '../utils/baseRequest'

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
    this.baseApiUrl = '/auth'
  }

  makeRequest = (
    path: string,
    method: string,
    data: ISignUpData | ISignInData | null = null
  ) => {
    return baseRequest(`${this.baseApiUrl}${path}`, method, data)
  }
}

export const authAPI = new AuthAPI()
