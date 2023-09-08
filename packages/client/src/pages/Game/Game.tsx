import React, { useEffect } from 'react'
import { Game as GameComponent } from '../../components/Game'
import { authController } from '../../controllers/AuthController'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { deleteUser } from '../../store/slices/userSlice'

const Game: React.FC = function () {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const user = useAppSelector(state => state.user)

  function onExitClick() {
    authController.logout().then(res => {
      if (res) {
        dispatch(deleteUser())
        navigate('/login')
      }
    })
  }

  useEffect(() => {
    if (!user) navigate('/login')
  }, [user])

  return (
    <div>
      <GameComponent />
      <Button onClick={onExitClick}>{'Выйти'}</Button>
    </div>
  )
}

export { Game }
