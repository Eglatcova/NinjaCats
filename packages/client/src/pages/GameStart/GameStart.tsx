import React from 'react'
import './style.scss'
import { useNavigate } from 'react-router-dom'

const GameStart: React.FC = function () {
  const navigate = useNavigate()

  function startGame() {
    navigate('/game')
  }

  return (
    <div className="GameStart">
      <div onClick={startGame} className="GameStart__button">
        Начать
      </div>
    </div>
  )
}

export { GameStart }
