import { baseUrl } from '../constants/baseUrl'
import { baseRequest } from '../utils/baseRequest'

class LeaderboardAPI {
  baseApiUrl: string

  constructor() {
    this.baseApiUrl = '/leaderboard'
  }

  makeRequest = <Type>(data: Type, path?: string) => {
    const url = path ? `${this.baseApiUrl}${path}` : this.baseApiUrl
    return baseRequest(`${baseUrl}${url}`, 'POST', data)
  }
}

export const leaderboardAPI = new LeaderboardAPI()
