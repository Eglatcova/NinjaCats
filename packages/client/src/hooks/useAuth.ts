import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { authController } from '../controllers/AuthController'
import { addUser, deleteUser } from '../store/slices/userSlice'
import { useEffect } from 'react'
import { ISignInData, ISignUpData } from '../api/AuthApi'

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
    authController.logout().then(_res => {
      dispatch(deleteUser())
      navigate('/login')
    })
  }

  const login = (values: ISignInData) => {
    authController.signIn(values).then(res => {
      if (res) {
        dispatch(addUser(res))
        navigate('/game')
      }
    })
  }

  const register = (values: ISignUpData) => {
    authController.signUp(values).then(res => {
      if (res) {
        dispatch(addUser(res))
        navigate('/game')
      }
    })
  }

  const auth = {
    exit,
    login,
    register,
  }

  return [checkAuth, auth] as const
}
