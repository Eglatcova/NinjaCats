import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Wrapper } from '../../components/Wrapper'
import { useAuth } from '../../hooks/useAuth'
import geekImage from '../../assets/geek.png'

import classes from './Main.module.scss'
import { redirectUri } from '../../constants/redirectUri'

const Main: React.FC = function () {
  const [checkAuth, auth] = useAuth()
  const code = new URLSearchParams(window.location.search).get('code')
  checkAuth('private')

  useEffect(() => {
    auth.getTokenInfo({ code, redirect_uri: redirectUri })
  }, [])

  return (
    <Wrapper>
      <h2 className={classes.title}>Добро пожаловать!</h2>
      <img src={geekImage} alt="geek" />
      <nav>
        <ul className={classes.linkItems}>
          <li className={classes.linkItem}>
            <Link className={classes.link} to="/login">
              Авторизация
            </Link>
          </li>
          <li className={classes.linkItem}>
            <Link className={classes.link} to="/registration">
              Регистрация
            </Link>
          </li>
          <li className={classes.linkItem}>
            <Link className={classes.link} to="/game">
              Игра
            </Link>
          </li>
          <li className={classes.linkItem}>
            <Link className={classes.link} to="/leaderboard">
              Таблица лидеров
            </Link>
          </li>
          <li className={classes.linkItem}>
            <Link className={classes.link} to="/forum">
              Форум
            </Link>
          </li>
          <li className={classes.linkItem}>
            <Link className={classes.link} to="/landing">
              Об игре (лендинг)
            </Link>
          </li>
        </ul>
      </nav>
    </Wrapper>
  )
}

export { Main }
