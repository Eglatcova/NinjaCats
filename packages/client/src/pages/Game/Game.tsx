import React, { useEffect } from 'react'
import { Game as GameComponent } from '../../components/Game'
import { authController } from '../../controllers/AuthController'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'

const Game: React.FC = function () {
  const navigate = useNavigate()

  function onExitClick() {
    authController.logout().then(res => {
      if (res) navigate('/login')
    })
  }

  useEffect(() => {
    authController.getUser().then(res => {
      if (!res) {
        navigate('/')
      }
    })
  }, [])

  return (
    <div>
      <GameComponent />
      <Button onClick={onExitClick}>{'Выйти'}</Button>
    </div>
  )
}

export { Game }
