import { leaderboardAPI } from '../api/LeaderboardApi'

interface IAddToLeaderboardDataFromComponent {
  data: {
    codeNinjasScore: number
    login?: string
    date: string
  }
}

interface IGetLeaderboardDataFromComponent {
  cursor: number
  limit: number
}

export interface IAddToLeaderboard extends IAddToLeaderboardDataFromComponent {
  ratingFieldName: string
  teamName: string
}

export interface IGetLeaderboard extends IGetLeaderboardDataFromComponent {
  ratingFieldName: string
}

class LeaderboardController {
  addToLeaderboard = (
    dataFromComponent: IAddToLeaderboardDataFromComponent
  ) => {
    const dataToPass: IAddToLeaderboard = {
      ...dataFromComponent,
      ratingFieldName: 'codeNinjasScore',
      teamName: 'codeNinjas',
    }

    return leaderboardAPI.makeRequest(dataToPass).then(res => {
      if (res?.ok) {
        return true
      }
    })
  }

  getLeaderboard = (data: IGetLeaderboardDataFromComponent) => {
    const dataToPass: IGetLeaderboard = {
      ratingFieldName: 'codeNinjasScore',
      ...data,
    }

    return leaderboardAPI.makeRequest(dataToPass, '/all').then(res => {
      if (res?.ok) {
        return res.json()
      }
    })
  }
}

export const leaderboardController = new LeaderboardController()
