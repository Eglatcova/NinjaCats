import React, { useEffect } from 'react'
import { authController } from '../../controllers/AuthController'
import { useNavigate } from 'react-router-dom'

const GameStart: React.FC = function () {
  const navigate = useNavigate()

  useEffect(() => {
    authController.getUser().then(res => {
      if (!res) {
        navigate('/')
      }
    })
  }, [])

  return <div>GameStart</div>
}

export { GameStart }
