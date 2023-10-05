import { Route, Routes } from 'react-router-dom'
import { Main } from './pages/Main'
import { Login } from './pages/Login'
import { Registration } from './pages/Registration'
import { Profile } from './pages/Profile'
import { Game } from './pages/Game'
import { Leaderboard } from './pages/Leaderboard'
import { Forum } from './pages/Forum'
import { ForumMessages } from './pages/ForumMessages'
import { Error404 } from './pages/Error404'
import { Error500 } from './pages/Error500'
import { Landing } from './pages/Landing'

const Router = function () {
  return (
    <Routes>
      <Route path="/" Component={Main} />
      <Route path="/login" Component={Login} />
      <Route path="/registration" Component={Registration} />
      <Route path="/profile" Component={Profile} />
      <Route path="/game" Component={Game} />
      <Route path="/leaderboard" Component={Leaderboard} />
      <Route path="/landing" Component={Landing} />
      <Route path="/error500" Component={Error500} />
      <Route path="/forum" Component={Forum} />
      <Route path="/forum/:id" Component={ForumMessages} />
      <Route path="*" Component={Error404} />
    </Routes>
  )
}

export { Router }
