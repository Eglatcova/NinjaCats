import classes from './style.module.scss'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../store/hooks'

const GameStart: React.FC = function () {
  const user = useAppSelector(state => state.user)
  const navigate = useNavigate()

  function startGame() {
    navigate('/game')
  }

  useEffect(() => {
    if (!user) navigate('/login')
  }, [user])

  return (
    <div className={classes.GameStart}>
      <div onClick={startGame} className={classes.GameStartButton}>
        Начать
      </div>
    </div>
  )
}

export { GameStart }
