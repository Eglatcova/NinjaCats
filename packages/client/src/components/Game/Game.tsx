import React, { useEffect, useRef, useState } from 'react'
import GameEngine from '../../domain/Game/GameEngine'

const Game: React.FC = () => {
  const [score, setScore] = useState(0)
  const gameDiv = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (gameDiv.current && gameDiv.current.childNodes.length === 0) {
      new GameEngine(gameDiv.current, setScore)
    }
  }, [])
  return (
    <>
      <div ref={gameDiv} />
      <h1>You last score: {score}</h1>
    </>
  )
}

export { Game }
