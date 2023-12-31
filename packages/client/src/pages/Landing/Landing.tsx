import React from 'react'
import classes from './style.module.scss'
import exampleImage from '../../assets/landingImage.png'
import { useAuth } from '../../hooks/useAuth'

const Landing: React.FC = function () {
  const [checkAuth] = useAuth()
  checkAuth('private')

  return (
    <div className={classes.Landing}>
      <div className={classes.LandingWelcomeBlock}>
        <img
          src="https://linguapedia.info/wp-content/uploads/2020/07/hello-english.jpg"
          alt="welcome image"
        />

        <div className={classes.LandingWelcomeBlockText}>
          Мы рады вас приветствовать в игре{' '}
          <span
            className={classes.LandingWelcomeBlockTextSpecial + ' handjetText'}>
            NinjaCats
          </span>
        </div>
      </div>

      <div className={classes.LandingContentBlock}>
        <div className={classes.LandingContentBlockTitle + ' handjetText'}>
          Основные особенности
        </div>

        <div className={classes.LandingContentBlockContent}>
          <div className={classes.LandingContentBlockContentWrap}>
            <div className={classes.LandingContentBlockContentWrapText}>
              В нашей игре вы сможете испытать чувства, которые у вас появились
              при включении своей первой игры в жизни. Аутентичный дизайн и{' '}
              <span className={classes.handjetText}>ретрогеймплей</span>{' '}
              погрузят вас в прекрасный мир игр начала эпохи (
              <span className={classes.handjetText}>1970е</span>)).
            </div>
          </div>

          <div className={classes.LandingContentBlockContentImgBlock}>
            <img src={exampleImage} alt="example image" />
          </div>
        </div>
      </div>
    </div>
  )
}

export { Landing }
