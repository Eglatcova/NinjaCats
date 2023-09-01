import { createBrowserRouter } from 'react-router-dom'
import { Login } from './pages/Login'
import { Main } from './pages/Main'
import { Registration } from './pages/Registration'
import { Leaderboard } from './pages/Leaderboard'
import { Error404 } from './pages/Error404'
import { GameOver } from './pages/GameOver'
import { Game } from './pages/Game'
import { GameStart } from './pages/GameStart'
import { Profile } from './pages/Profile'
import { Error500 } from './pages/Error500'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Main,
  },
  {
    path: '/login',
    Component: Login,
  },
  {
    path: '/registration',
    Component: Registration,
  },
  {
    path: '/profile',
    Component: Profile,
  },
  {
    path: '/game',
    Component: Game,
  },
  {
    path: '/game-start',
    Component: GameStart,
  },
  {
    path: '/game-over',
    Component: GameOver,
  },
  {
    path: '/leaderboard',
    Component: Leaderboard,
  },
  {
    path: '/error500',
    Component: Error500,
  },
  {
    path: '*',
    Component: Error404,
  },
])
