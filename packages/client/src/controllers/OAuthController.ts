import { ISignUpWithYandexData, oauthAPI } from '../api/OAuthApi'

class OAuthController {
  signUpWithYandex = (data: ISignUpWithYandexData) => {
    return oauthAPI.makeRequest('POST', '', data)
  }

  getServiceId = () => {
    return oauthAPI.makeRequest('GET', '/service-id').then(res => {
      if (res?.ok) {
        return res.json()
      }
    })
  }
}
export const oauthController = new OAuthController()
