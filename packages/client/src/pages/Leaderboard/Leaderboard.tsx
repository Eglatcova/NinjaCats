import React, { useEffect } from 'react'
import { authController } from '../../controllers/AuthController'
import { useNavigate } from 'react-router-dom'

import './style.scss'

const Leaderboard: React.FC = function () {
  const navigate = useNavigate()

  const mocDataLeaderboard = [
    {
      nickname: 'nickname_1',
      date: new Date(2023, 8, 10),
      value: 50,
    },
    {
      nickname: 'nickname_3',
      date: new Date(2023, 8, 11),
      value: 30,
    },
    {
      nickname: 'nickname_2',
      date: new Date(2023, 8, 8),
      value: 20,
    },
    {
      nickname: 'nickname_4',
      date: new Date(2023, 8, 14),
      value: 10,
    },
  ]

  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ]

  // useEffect(() => {
  //   authController.getUser().then(res => {
  //     if (!res) {
  //       navigate('/')
  //     }
  //   })
  // }, [])

  return (
    <div className="Leaderboard">
      <table className="Leaderboard__table">
        {mocDataLeaderboard.map((el, idx) => {
          return (
            <tr className="Leaderboard__table__row">
              <td className="Leaderboard__table__row__index">№{idx + 1}</td>

              <td className="Leaderboard__table__row__nickname">
                {el.nickname}
              </td>

              <td className="Leaderboard__table__row__date">
                {el.date.getDate()} {months[el.date.getMonth()]}{' '}
                {el.date.getFullYear()}
              </td>

              <td className="Leaderboard__table__row__value">{el.value}</td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export { Leaderboard }
