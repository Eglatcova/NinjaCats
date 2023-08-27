import React from 'react'
import { Link } from 'react-router-dom'

const Main: React.FC = function () {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/registration">Registration</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/game">Game</Link>
        </li>
        <li>
          <Link to="/game-start">GameStart</Link>
        </li>
        <li>
          <Link to="/game-over">GameOver</Link>
        </li>
        <li>
          <Link to="/leaderboard">Leaderboard</Link>
        </li>
        <li>
          <Link to="/forum">Forum</Link>
        </li>
      </ul>
    </nav>
  )
}

export { Main }
