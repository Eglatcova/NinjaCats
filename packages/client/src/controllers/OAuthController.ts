import { ISignUpWithYandexData, oauthAPI } from '../api/OAuthApi'

class OAuthController {
  signUpWithYandex = (data: ISignUpWithYandexData) => {
    return oauthAPI.makeRequest('POST', '', data)
  }

  getServiceId = (redirectUri: string) => {
    return oauthAPI
      .makeRequest('GET', `/service-id?redirect_uri=${redirectUri}`)
      .then(res => {
        if (res?.ok) {
          return res.json()
        }
      })
  }
}
export const oauthController = new OAuthController()
