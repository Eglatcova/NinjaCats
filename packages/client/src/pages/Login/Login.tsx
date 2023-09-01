import React from 'react'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
import classes from './Login.module.scss'
import { useFormik } from 'formik'
import { validationSchema } from '../../utils/validation'

interface loginValues {
  login: string
  password: string
}

const Login: React.FC = function () {
  const onSubmit = (values: loginValues) => {
    console.log(values)
  }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        login: '',
        password: '',
      },
      validationSchema,
      onSubmit,
    })

  return (
    <div className={classes.loginContainer}>
      <p className={classes.loginHeader}>Авторизация</p>
      <form className={classes.loginForm} onSubmit={handleSubmit}>
        <Input
          className={classes.loginInput}
          name="login"
          labelText="Логин"
          type="text"
          value={values.login}
          blurHandler={handleBlur}
          changeHandler={handleChange}
        />
        {errors.login && touched.login && (
          <p className={classes.loginError}>{errors.login}</p>
        )}
        <Input
          className={classes.loginInput}
          name="password"
          labelText="Пароль"
          type="password"
          value={values.password}
          blurHandler={handleBlur}
          changeHandler={handleChange}
        />
        {errors.password && touched.password && (
          <p className={classes.loginError}>{errors.password}</p>
        )}
        <Button className={classes.loginButton} type="submit">
          {'Войти'}
        </Button>
      </form>
      <Link to="/registration">
        <Button theme="secondary">{'Регистрация'}</Button>
      </Link>
    </div>
  )
}

export { Login }
