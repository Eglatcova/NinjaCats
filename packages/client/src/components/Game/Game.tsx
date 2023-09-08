import React, { useEffect, useRef, useState } from 'react'
import GameEngine from '../../domain/Game/GameEngine'
import classes from './Game.module.scss'

enum GameStates {
  GAME_BEFORE_START,
  GAME_START,
  GAME_END,
}

const Game: React.FC = () => {
  const [score, setScore] = useState(0)
  const [gameState, setGameState] = useState(GameStates.GAME_BEFORE_START)
  const gameDiv = useRef<HTMLDivElement>(null)
  const gameEngineRef = useRef<GameEngine>()

  const endGameCallback = (points: number) => {
    setScore(points)
    setGameState(GameStates.GAME_END)
  }

  useEffect(() => {
    if (gameDiv.current && gameDiv.current.childNodes.length === 0) {
      gameEngineRef.current = new GameEngine(gameDiv.current, endGameCallback)
    }
  }, [])

  return (
    <>
      <div className={classes.Game}>
        <div className={classes.GameGameWrapper}>
          <div ref={gameDiv} />

          {gameState === GameStates.GAME_BEFORE_START && (
            <div className={classes.GameGameWrapperStartGame}>
              <button
                className={classes.GameGameWrapperStartGameButton}
                onClick={() => {
                  setGameState(GameStates.GAME_START)
                  gameEngineRef.current?.gameStart()
                }}>
                Начать
              </button>
            </div>
          )}

          {gameState === GameStates.GAME_END && (
            <div className={classes.GameGameWrapperEndGame}>
              <button
                className={classes.GameGameWrapperEndGameButton}
                onClick={() => {
                  setGameState(GameStates.GAME_START)
                  gameEngineRef.current?.retry()
                }}>
                Повторить
              </button>
            </div>
          )}
        </div>
        <h1>You last score: {score}</h1>
      </div>
    </>
  )
}

export { Game }
