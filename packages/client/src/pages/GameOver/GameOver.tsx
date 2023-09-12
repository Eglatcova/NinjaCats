import classes from './style.module.scss'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

const GameOver: React.FC = function () {
  const [checkAuth] = useAuth()
  checkAuth('private')
  const navigate = useNavigate()

  function tryAgain() {
    navigate('/game')
  }

  return (
    <div className={classes.GameOver}>
      <div onClick={tryAgain} className={classes.GameOverButton}>
        Попробовать снова
      </div>
    </div>
  )
}

export { GameOver }
