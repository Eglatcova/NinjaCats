import React, { useEffect, useRef } from 'react'
import GameEngine from '../../domain/Game/GameEngine'

const Game: React.FC = () => {
  const gameDiv = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (gameDiv.current && gameDiv.current.childNodes.length === 0) {
      new GameEngine(gameDiv.current)
    }
  }, [])
  return <div ref={gameDiv} />
}

export { Game }
