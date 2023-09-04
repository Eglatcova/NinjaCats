import { authAPI } from '../api/AuthApi'
import { ISignInData, ISignUpData } from '../api/AuthApi'

class AuthController {
  signIn = (data: ISignInData) => {
    return authAPI.makeRequest('/signin', 'POST', data).then(res => {
      return res && res.ok ? true : false
    })
  }

  signUp = (data: ISignUpData) => {
    return authAPI.makeRequest('/signup', 'POST', data).then(res => {
      return res && res.ok ? true : false
    })
  }

  logout = () => {
    return authAPI.makeRequest('/logout', 'POST').then(res => {
      return res && res.ok ? true : false
    })
  }

  getUser = () => {
    return authAPI.makeRequest('/user', 'GET').then(res => {
      return res && res.ok ? true : false
    })
  }
}

export const authController = new AuthController()
