import React, { useEffect } from 'react'
import { authController } from '../../controllers/AuthController'
import { useNavigate } from 'react-router-dom'

import { mocDataLeaderboard } from '../../utils/mocks/leaderboard'
import { months } from '../../utils/const/months'

import classes from './style.module.scss'

const Leaderboard: React.FC = function () {
  const navigate = useNavigate()

  // useEffect(() => {
  //   authController.getUser().then(res => {
  //     if (!res) {
  //       navigate('/')
  //     }
  //   })
  // }, [])

  return (
    <div className={classes.Leaderboard}>
      <table className={classes.LeaderboardTable}>
        <tbody>
          {mocDataLeaderboard.map((el, idx) => {
            return (
              <tr className={classes.LeaderboardTableRow} key={el.nickname}>
                <td className={classes.LeaderboardTableRowIndex}>№{idx + 1}</td>

                <td className={classes.LeaderboardTableRowNickname}>
                  {el.nickname}
                </td>

                <td className={classes.LeaderboardTableRowDate}>
                  {el.date.getDate()} {months[el.date.getMonth()]}{' '}
                  {el.date.getFullYear()}
                </td>

                <td className={classes.LeaderboardTableRowValue}>{el.value}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export { Leaderboard }
