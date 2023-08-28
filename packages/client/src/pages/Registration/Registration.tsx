import React from 'react'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
import classes from './Registration.module.scss'

const Registration: React.FC = function () {
  return (
    <div className={classes.registrationContainer}>
      <p className={classes.registrationHeader}>Регистрация</p>
      <form className={classes.registrationForm}>
        <Input
          className={classes.registrationInput}
          name="first_name"
          labelText="Имя"
          type="text"
        />
        <Input
          className={classes.registrationInput}
          name="second_name"
          labelText="Фамилия"
          type="text"
        />
        <Input
          className={classes.registrationInput}
          name="login"
          labelText="Логин"
          type="text"
        />
        <Input
          className={classes.registrationInput}
          name="email"
          labelText="Email"
          type="email"
        />
        <Input
          className={classes.registrationInput}
          name="phone"
          labelText="Телефон"
          type="phone"
        />
        <Input
          className={classes.registrationInput}
          name="password"
          labelText="Пароль"
          type="password"
        />
        <Link to="/game">
          <Button>{'Зарегистрироваться'}</Button>
        </Link>
      </form>
    </div>
  )
}

export { Registration }
