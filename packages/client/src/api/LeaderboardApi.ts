import {
  IAddToLeaderboard,
  IGetLeaderboard,
} from '../controllers/LeaderboardController'
class LeaderboardAPI {
  baseApiUrl: string

  constructor() {
    this.baseApiUrl = 'https://ya-praktikum.tech/api/v2/leaderboard'
  }

  makeRequest = (data: IAddToLeaderboard | IGetLeaderboard, path?: string) => {
    return fetch(path ? this.baseApiUrl + path : this.baseApiUrl, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res)
      .catch(error => console.log(error))
  }
}

export const leaderboardAPI = new LeaderboardAPI()
