import React, { useEffect, useState } from 'react'
import classes from './style.module.scss'
import forumClasses from '../Forum/Forum.module.scss'
import { useAuth } from '../../hooks/useAuth'
import { leaderboardController } from '../../controllers/LeaderboardController'
import { Wrapper } from '../../components/Wrapper'

interface ILeaderboardData {
  data: {
    codeNinjasScore: number
    login: string
    date: string
  }
}

const Leaderboard: React.FC = function () {
  const [checkAuth] = useAuth()
  const [leaderboard, setLeaderboard] = useState<ILeaderboardData[]>([])
  checkAuth('private')

  useEffect(() => {
    leaderboardController.getLeaderboard(0, 10).then(res => setLeaderboard(res))
  }, [])

  return (
    <Wrapper>
      <div className={forumClasses.topics}>
        <table className={classes.LeaderboardTable}>
          <tbody>
            {leaderboard.map((el, idx) => {
              return (
                <tr
                  className={classes.LeaderboardTableRow}
                  key={`${el.data.login + idx}`}>
                  <td className={classes.LeaderboardTableRowIndex}>
                    №{idx + 1}
                  </td>

                  <td className={classes.LeaderboardTableRowNickname}>
                    {el.data.login}
                  </td>

                  <td className={classes.LeaderboardTableRowDate}>
                    {el.data.date}
                  </td>

                  <td className={classes.LeaderboardTableRowValue}>
                    {el.data.codeNinjasScore}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </Wrapper>
  )
}

export { Leaderboard }
