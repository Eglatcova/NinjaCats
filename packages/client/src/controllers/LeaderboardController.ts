import { leaderboardAPI } from '../api/LeaderboardApi'

export interface IAddToLeaderboard {
  data: {
    codeNinjasScore: number
    login?: string
    date: string
  }
  ratingFieldName: string
  teamName: string
}

export interface IGetLeaderboard {
  ratingFieldName: string
  cursor: number
  limit: number
}

export interface ILeaderboardData {
  data: {
    codeNinjasScore: number
    login: string
    date: string
  }
}

class LeaderboardController {
  addToLeaderboard = (points: number, login: string | undefined) => {
    const now = new Date()
    const month = now.getMonth() + 1
    const date =
      now.getDate() +
      '.' +
      (month < 10 ? '0' + month : month) +
      '.' +
      now.getFullYear()

    const dataToPass: IAddToLeaderboard = {
      data: {
        codeNinjasScore: points,
        login,
        date,
      },
      ratingFieldName: 'codeNinjasScore',
      teamName: 'codeNinjas',
    }

    return leaderboardAPI.makeRequest(dataToPass).then(res => {
      if (res?.ok) {
        return true
      }
    })
  }

  getLeaderboard = (cursor: number, limit: number) => {
    const dataToPass: IGetLeaderboard = {
      ratingFieldName: 'codeNinjasScore',
      cursor,
      limit,
    }

    return leaderboardAPI.makeRequest(dataToPass, '/all').then(res => {
      if (res?.ok) {
        return res.json()
      }
    })
  }
}

export const leaderboardController = new LeaderboardController()
