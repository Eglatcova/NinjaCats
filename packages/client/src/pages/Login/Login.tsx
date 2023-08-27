import React from 'react'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
import classes from './Login.module.scss'

const Login: React.FC = function () {
  return (
    <div className={classes.loginContainer}>
      <p className={classes.loginHeader}>Авторизация</p>
      <Input
        className={classes.loginInput}
        name="login"
        labelText="Логин"
        type="text"
      />
      <Input
        className={classes.loginInput}
        name="password"
        labelText="Пароль"
        type="password"
      />
      <Link to="/game-start">
        <Button className={classes.loginButton}>{'Войти'}</Button>
      </Link>
      <Link to="/registration">
        <Button theme="secondary">{'Регистрация'}</Button>
      </Link>
    </div>
  )
}

export { Login }
