import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import classes from './ErrorPage.module.scss'

type ErrorPageProps = {
  errorValue: number
  msg: string
}

export const ErrorPage: FC<ErrorPageProps> = props => {
  const navigate = useNavigate()

  function goHome() {
    navigate('/')
  }

  return (
    <div className={classes.errorPage}>
      <div className={classes.errorPageStatusBlock}>
        Ошибка: {props.errorValue}
      </div>

      <div className={classes.errorPageContent}>
        <div className={classes.errorPageContentDescription}>
          <div className={classes.errorPageContentDescriptionTitle}>Упс!)</div>
          <div className={classes.errorPageContentDescriptionText}>
            {props.msg}
          </div>
        </div>
        {props.errorValue === 404 && (
          <div onClick={goHome} className={classes.errorPageContentHomeLink}>
            Можете вернуться
            <br />
            на гланую страницу
          </div>
        )}
      </div>
    </div>
  )
}
