import React, { useEffect } from 'react'
// import { authController } from '../../controllers/AuthController';
import './style.scss'
import { useNavigate } from 'react-router-dom'

const Landing: React.FC = function () {
  const navigate = useNavigate()

  //   useEffect(() => {
  //     authController.getUser().then(res => {
  //       if (!res) {
  //         navigate('/')
  //       }
  //     })
  //   }, [])

  return (
    <div className="Landing">
      <div className="Landing__welcomeBlock">
        <img
          src="https://linguapedia.info/wp-content/uploads/2020/07/hello-english.jpg"
          alt=""
        />

        <div className="Landing__welcomeBlock__text">
          Мы рады вас приветствовать в игре{' '}
          <span className="Landing__welcomeBlock__text__special handjetText">
            NinjaCats
          </span>
        </div>
      </div>

      <div className="Landing__contentBlock">
        <div className="Landing__contentBlock__title handjetText">
          Основные особенности
        </div>

        <div className="Landing__contentBlock__content">
          <div className="Landing__contentBlock__content__wrap">
            <div className="Landing__contentBlock__content__wrap__text">
              В нашей игре вы сможете получить чувства, которые у вас появились
              при включении своей первой игры в жизни. Аутентичный дизайн и{' '}
              <span className="handjetText">ретрогеймплей</span> погрузят вас в
              прекрасный мир игр начала эпохи (
              <span className="handjetText">1970е</span>)).
            </div>
          </div>

          <div className="Landing__contentBlock__content__imgBlock">
            <img src="/landingImage.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export { Landing }
