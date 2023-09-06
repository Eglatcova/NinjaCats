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
import { Landing } from './pages/Landing'
import { Error500 } from './pages/Error500'
import { Forum } from './pages/Forum'
import { ForumMessages } from './pages/ForumMessages'

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
    path: '/landing',
    Component: Landing,
  },
  {
    path: '/error500',
    Component: Error500,
  },
  {
    path: '/forum',
    Component: Forum,
  },
  {
    path: '/forum/:id',
    Component: ForumMessages,
  },
  {
    path: '*',
    Component: Error404,
  },
])
