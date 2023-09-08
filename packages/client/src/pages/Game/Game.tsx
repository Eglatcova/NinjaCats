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

  document.addEventListener(
    'keydown',
    e => {
      if (e.key === 'f' && e.ctrlKey) {
        onFullscreenClick()
      }
    },
    false
  )

  function onExitClick() {
    authController.logout().then(res => {
      if (res) {
        dispatch(deleteUser())
        navigate('/login')
      }
    })
  }

  function onFullscreenClick() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else if (document.exitFullscreen) {
      document.exitFullscreen()
    }
  }

  useEffect(() => {
    if (!user) navigate('/login')
  }, [user])

  return (
    <div>
      <GameComponent />
      <Button onClick={onExitClick}>Выйти</Button>
      <Button onClick={onFullscreenClick}>Fullscreen</Button>
    </div>
  )
}

export { Game }
