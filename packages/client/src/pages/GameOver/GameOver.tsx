import './style.scss'
import React, { useEffect } from 'react'
// import { authController } from '../../controllers/AuthController'
import { useNavigate } from 'react-router-dom'

const GameOver: React.FC = function () {
  const navigate = useNavigate()

  function tryAgain() {
    navigate('/game')
  }

  // useEffect(() => {
  //   authController.getUser().then(res => {
  //     if (!res) {
  //       navigate('/')
  //     }
  //   })
  // }, [])

  return (
    <div className="GameOver">
      <div onClick={tryAgain} className="GameOver__button">
        Попробывать снова
      </div>
    </div>
  )
}

export { GameOver }
