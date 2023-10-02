import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { authController } from '../controllers/AuthController'
import { addUser, deleteUser } from '../store/slices/userSlice'
import { useEffect } from 'react'
import { ISignInData, ISignUpData } from '../api/AuthApi'
import { oauthController } from '../controllers/OAuthController'
import { ISignUpWithYandexData } from '../api/OAuthApi'
import { redirectUri } from '../constants/redirectUri'
import { oauthYandexUri } from '../constants/oauthYandexUri'

export const useAuth = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const user = useAppSelector(state => state.user)

  const checkAuth = (permission: 'public' | 'private') => {
    switch (permission) {
      case 'private':
        useEffect(() => {
          if (!user) navigate('/login')
        }, [user])
        break
      case 'public':
        useEffect(() => {
          if (user) navigate('/')
        }, [user])
        break
    }
  }

  const exit = () => {
    authController.logout().then(res => {
      if (res) {
        dispatch(deleteUser())
        navigate('/login')
      }
    })
  }

  const login = (values: ISignInData) => {
    authController.signIn(values).then(res => {
      dispatch(addUser(res))
      navigate('/game')
    })
  }

  const register = (values: ISignUpData) => {
    authController.signUp(values).then(res => {
      dispatch(addUser(res))
      navigate('/game')
    })
  }

  const loginWithYandex = () => {
    oauthController.getServiceId().then(res => {
      const serviceId = res.service_id
      window.location.replace(
        `${oauthYandexUri}?response_type=code&client_id=${serviceId}&redirect_uri=${redirectUri}`
      )
    })
  }

  const getTokenInfo = (data: ISignUpWithYandexData) => {
    if (!user && data.code) {
      enterWithYandexCode(data)
    }
  }

  const enterWithYandexCode = (data: ISignUpWithYandexData) => {
    oauthController.signUpWithYandex(data).then(res => {
      if (res?.ok) {
        return authController.getUser().then(res => {
          dispatch(addUser(res))
          navigate('/game')
        })
      }
    })
  }

  const auth = {
    exit,
    login,
    register,
    loginWithYandex,
    getTokenInfo,
  }

  return [checkAuth, auth] as const
}
