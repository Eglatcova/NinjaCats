import classes from './style.module.scss'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

const GameStart: React.FC = function () {
  const [checkAuth] = useAuth()
  checkAuth('private')
  const navigate = useNavigate()

  function startGame() {
    navigate('/game')
  }

  return (
    <div className={classes.GameStart}>
      <div onClick={startGame} className={classes.GameStartButton}>
        Начать
      </div>
    </div>
  )
}

export { GameStart }
