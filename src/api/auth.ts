import api from "./api";
import { IForgot, ILogin, IProfile, IResetPassword, ISignUp, ISignUpRestaurant, ISignUpShipper } from "./apiInterfaces";
import API_CONSTANTS from "./constrant";

export default {
  login: (params: ILogin): any => {
    return api.post(API_CONSTANTS.AUTH.LOGIN, params);
  },

  signUp: (params: ISignUp): any => {
    return api.post(API_CONSTANTS.AUTH.SIGN_UP, params)
  },
  signUpRestaurant: (params: ISignUpRestaurant): any => {
    return api.post(API_CONSTANTS.AUTH.SIGN_UP_RESTAURANT, params)
  },
  signUpShipper: (params: ISignUpShipper): any => {
    return api.post(API_CONSTANTS.AUTH.SIGN_UP_SHIPPER, params)
  },
  getInfo: () => {
    return api.get(API_CONSTANTS.AUTH.GET_INFOR)
  },
  forgetPass : (email: IForgot) => {
    return api.post(API_CONSTANTS.AUTH.FORGOTPASSWORD(email))
  },
  resetPass: (params: IResetPassword) => {
    return api.post(API_CONSTANTS.AUTH.RESET_PASSWORD, params)
  },
  editProfile: (params: any) => {
    return api.put(API_CONSTANTS.AUTH.EDIT_PROFILE, params)
  }
}; 