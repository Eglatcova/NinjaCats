import { baseUrlForForum } from '../constants/baseUrlForForum'
import { ISaveTopic, ISendMessage } from '../controllers/ForumController'
import { baseRequest } from '../utils/baseRequest'

class ForumAPI {
  baseApiUrl: string

  constructor() {
    this.baseApiUrl = '/forum'
  }

  makeRequest = (
    path: string,
    method: string,
    data: ISendMessage | ISaveTopic | null = null
  ) => {
    return baseRequest(
      `${baseUrlForForum}${this.baseApiUrl}${path}`,
      method,
      data
    )
  }
}

export const forumAPI = new ForumAPI()
