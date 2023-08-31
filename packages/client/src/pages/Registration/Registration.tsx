import React from 'react'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import classes from './Registration.module.scss'
import { useFormik } from 'formik'
import { validationSchema } from '../../utils/validation'

interface registrationValues {
  first_name: string
  second_name: string
  login: string
  email: string
  phone: string
  password: string
}

const Registration: React.FC = function () {
  const onSubmit = (values: registrationValues) => {
    console.log(values)
  }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        first_name: '',
        second_name: '',
        login: '',
        email: '',
        phone: '',
        password: '',
      },
      validationSchema,
      onSubmit,
    })

  return (
    <div className={classes.registrationContainer}>
      <p className={classes.registrationHeader}>Регистрация</p>
      <form onSubmit={handleSubmit} className={classes.registrationForm}>
        <Input
          className={classes.registrationInput}
          name="first_name"
          labelText="Имя"
          type="text"
          value={values.first_name}
          blurHandler={handleBlur}
          changeHandler={handleChange}
        />
        {errors.first_name && touched.first_name && (
          <p className={classes.registrationError}>{errors.first_name}</p>
        )}
        <Input
          className={classes.registrationInput}
          name="second_name"
          labelText="Фамилия"
          type="text"
          value={values.second_name}
          blurHandler={handleBlur}
          changeHandler={handleChange}
        />
        {errors.second_name && touched.second_name && (
          <p className={classes.registrationError}>{errors.second_name}</p>
        )}
        <Input
          className={classes.registrationInput}
          name="login"
          labelText="Логин"
          type="text"
          value={values.login}
          blurHandler={handleBlur}
          changeHandler={handleChange}
        />
        {errors.login && touched.login && (
          <p className={classes.registrationError}>{errors.login}</p>
        )}
        <Input
          className={classes.registrationInput}
          name="email"
          labelText="Email"
          type="email"
          value={values.email}
          blurHandler={handleBlur}
          changeHandler={handleChange}
        />
        {errors.email && touched.email && (
          <p className={classes.registrationError}>{errors.email}</p>
        )}
        <Input
          className={classes.registrationInput}
          name="phone"
          labelText="Телефон"
          type="phone"
          value={values.phone}
          blurHandler={handleBlur}
          changeHandler={handleChange}
        />
        {errors.phone && touched.phone && (
          <p className={classes.registrationError}>{errors.phone}</p>
        )}
        <Input
          className={classes.registrationInput}
          name="password"
          labelText="Пароль"
          type="password"
          value={values.password}
          blurHandler={handleBlur}
          changeHandler={handleChange}
        />
        {errors.password && touched.password && (
          <p className={classes.registrationError}>{errors.password}</p>
        )}
        <Button type="submit">{'Зарегистрироваться'}</Button>
      </form>
    </div>
  )
}

export { Registration }
