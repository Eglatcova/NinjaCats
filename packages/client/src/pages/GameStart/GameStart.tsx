import classes from './style.module.scss'
import React, { useEffect } from 'react'
import { authController } from '../../controllers/AuthController'
import { useNavigate } from 'react-router-dom'

const GameStart: React.FC = function () {
  const navigate = useNavigate()

  function startGame() {
    navigate('/game')
  }

  useEffect(() => {
    authController.getUser().then(res => {
      if (!res) {
        navigate('/')
      }
    })
  }, [])

  return (
    <div className={classes.GameStart}>
      <div onClick={startGame} className={classes.GameStartButton}>
        Начать
      </div>
    </div>
  )
}

export { GameStart }
