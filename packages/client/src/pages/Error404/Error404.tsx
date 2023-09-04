import React from 'react'
import './style.scss'
import { useNavigate } from 'react-router-dom'
import { ErrorPage } from '../../components/ErrorPage/ErrorPage'

const Error404: React.FC = function () {
  return (
    <ErrorPage errorValue={404} msg="Такой страницы не существует."></ErrorPage>
  )
}

export { Error404 }
