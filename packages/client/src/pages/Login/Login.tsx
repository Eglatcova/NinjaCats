import React, { useEffect } from 'react'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import classes from './Login.module.scss'
import { useFormik } from 'formik'
import { loginSchema } from '../../utils/validation'
import { ISignInData } from '../../api/AuthApi'
import { authController } from '../../controllers/AuthController'
import { addUser } from '../../store/slices/userSlice'
import { useAppSelector, useAppDispatch } from '../../store/hooks'

const Login: React.FC = function () {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const user = useAppSelector(state => state.user)

  useEffect(() => {
    if (user) navigate('/profile')
  }, [user])

  const onSubmit = (values: ISignInData) => {
    authController.signIn(values).then(res => {
      dispatch(addUser(res))
      navigate('/game')
    })
  }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        login: '',
        password: '',
      },
      validationSchema: loginSchema,
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
