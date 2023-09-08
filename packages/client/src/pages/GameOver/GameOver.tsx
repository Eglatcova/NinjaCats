import classes from './style.module.scss'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../store/hooks'

const GameOver: React.FC = function () {
  const user = useAppSelector(state => state.user)
  const navigate = useNavigate()

  function tryAgain() {
    navigate('/game')
  }

  useEffect(() => {
    if (!user) navigate('/login')
  }, [user])

  return (
    <div className={classes.GameOver}>
      <div onClick={tryAgain} className={classes.GameOverButton}>
        Попробовать снова
      </div>
    </div>
  )
}

export { GameOver }
