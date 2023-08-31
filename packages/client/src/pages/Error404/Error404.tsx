import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Error404: React.FC = function () {
  const navigate = useNavigate()

  function goHome() {
    navigate('/')
  }

  return (
    <div className="page404">
      <div className="page404__statusBlock">Ошибка: 404</div>

      <div className="page404__content">
        <div className="page404__content__description">
          <div className="page404__content__description__title">Упс!)</div>
          <div className="page404__content__description__text">
            Такой страницы не существует.
          </div>
        </div>

        <div onClick={goHome} className="page404__content__homeLink">
          Можете вернуться
          <br />
          на <Link to="/">гланую страницу</Link>
        </div>
      </div>
    </div>
  )
}

export { Error404 }
