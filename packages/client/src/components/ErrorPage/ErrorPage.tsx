import React, { useEffect, useRef, FC } from 'react'
import { useNavigate } from 'react-router-dom'
import './style.scss'

type ErrorPageType = {
  errorValue: number
  msg: string
}

export const ErrorPage: FC<ErrorPageType> = props => {
  const navigate = useNavigate()

  function goHome() {
    navigate('/')
  }

  return (
    <div className="errorPage">
      <div className="errorPage__statusBlock">Ошибка: {props.errorValue}</div>

      <div className="errorPage__content">
        <div className="errorPage__content__description">
          <div className="errorPage__content__description__title">Упс!)</div>
          <div className="errorPage__content__description__text">
            {props.msg}
          </div>
        </div>
        {props.errorValue === 404 && (
          <div onClick={goHome} className="errorPage__content__homeLink">
            Можете вернуться
            <br />
            на гланую страницу
          </div>
        )}
      </div>
    </div>
  )
}
