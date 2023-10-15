import { forumAPI } from '../api/ForumApi'

export interface IMessage {
  id: number
  createdAt: string
  userName: string
  text: string
}

export interface IFormData {
  id: number
  label: string
  Messages: IMessage[]
}

export interface ISendMessage {
  TopicId: string
  userName: string
  text: string
}

export interface ISaveTopic {
  label: string
}

class ForumController {
  getForumTopics = () => {
    return forumAPI.makeRequest('/topic', 'GET').then(res => {
      if (res?.ok) {
        return res.json()
      }
    })
  }

  getForumTopic = (id: number) => {
    return forumAPI.makeRequest(`/topic/${id}`, 'GET').then(res => {
      if (res?.ok) {
        return res.json()
      }
    })
  }

  saveForumTopic = (data: ISaveTopic) => {
    return forumAPI.makeRequest('/topic', 'POST', data).then(() => {
      return this.getForumTopics()
    })
  }

  sendMessage = (data: ISendMessage) => {
    return forumAPI.makeRequest('/message', 'POST', data).then(() => {
      return this.getForumTopic(Number(data.TopicId))
    })
  }
}

export const forumController = new ForumController()
