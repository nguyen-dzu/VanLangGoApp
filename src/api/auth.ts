import api from './api'
import { ILogin, ISignUp} from './apiInterfaces'
import API_CONSTANTS from './constrant'

export default {
  login: (params: ILogin): any => {
    const reponse = api.post(API_CONSTANTS.AUTH.LOGIN, params)
    return reponse
  },

  // signUp: (params: ISignUp): any => {
  //   return api.post(API_CONSTANTS.AUTH.SIGN_UP, params)
  // },
}
