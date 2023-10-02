import { baseRequest } from '../utils/baseRequest'

export interface ISignUpWithYandexData {
  code: string | null
  redirect_uri: string
}

class OAuthAPI {
  baseApiUrl: string

  constructor() {
    this.baseApiUrl = '/oauth/yandex'
  }

  makeRequest = (
    method: string,
    path?: string,
    data?: ISignUpWithYandexData | null
  ) => {
    const url = path ? `${this.baseApiUrl}${path}` : this.baseApiUrl
    return baseRequest(url, method, data)
  }
}

export const oauthAPI = new OAuthAPI()
