import React from 'react'
import './style.scss'

const Error500: React.FC = function () {
  return (
    <div className="page500">
      <div className="page500__statusBlock">Ошибка: 500</div>

      <div className="page500__content">
        <div className="page500__content__description">
          <div className="page500__content__description__title">Упс!)</div>
          <div className="page500__content__description__text">
            Произошла ошибка на сервере.
          </div>
          <div className="page500__content__description__text">
            Мы уже работаем над ней.
          </div>
        </div>
      </div>
    </div>
  )
}

export { Error500 }
