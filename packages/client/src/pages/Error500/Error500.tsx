import React from 'react'
import { ErrorPage } from '../../components/ErrorPage/ErrorPage'

const Error500: React.FC = function () {
  return (
    <ErrorPage
      errorValue={500}
      msg="Произошла ошибка на сервере. Мы уже работаем над ней."></ErrorPage>
  )
}

export { Error500 }
