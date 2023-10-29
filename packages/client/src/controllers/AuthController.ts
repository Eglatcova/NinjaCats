import { authAPI } from '../api/AuthApi'
import { ISignInData, ISignUpData } from '../api/AuthApi'

class AuthController {
  signIn = (data: ISignInData) => {
    return authAPI.makeRequest('/signin', 'POST', data).then(res => {
      if (res?.ok) {
        return this.getUser().then(res => res)
      }
    })
  }

  signUp = (data: ISignUpData) => {
    return authAPI.makeRequest('/signup', 'POST', data).then(res => {
      if (res?.ok) {
        return this.getUser().then(res => res)
      }
    })
  }

  logout = () => {
    return authAPI.makeRequest('/logout', 'POST').then(res => {
      return res?.ok ? true : false
    })
  }

  getUser = () => {
    return authAPI.makeRequest('/user', 'GET').then(res => {
      if (res) return res.json()
    })
  }
}

export const authController = new AuthController()
