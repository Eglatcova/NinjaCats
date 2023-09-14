import React from 'react'
import { Game as GameComponent } from '../../components/Game'
import { Button } from '../../components/Button'
import { useAuth } from '../../hooks/useAuth'
import classes from './Game.module.scss'

const Game: React.FC = function () {
  const [checkAuth, auth] = useAuth()
  checkAuth('private')

  document.addEventListener(
    'keydown',
    e => {
      if (e.key === 'f' && e.ctrlKey) {
        onFullscreenClick()
      }
    },
    false
  )

  function onFullscreenClick() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else if (document.exitFullscreen) {
      document.exitFullscreen()
    }
  }

  return (
    <div className={classes.wrapper}>
      <GameComponent />
      <div className={classes.buttons}>
        <Button onClick={auth.exit}>Выйти</Button>
        <Button onClick={onFullscreenClick}>Fullscreen</Button>
      </div>
    </div>
  )
}

export { Game }
