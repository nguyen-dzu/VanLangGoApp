import { authActions, authReducers } from './auth'
import { loaderActions, loaderReducers } from './loader'
import { settingActions, settingReducers } from './setting'
import { tempActions, tempReducers } from './temp'

export const actions = {
  auth: authActions,
  loader: loaderActions,
  setting: settingActions,
  temp: tempActions,
}

export const reducers = {
  auth: authReducers,
  loader: loaderReducers,
  setting: settingReducers,
  temp: tempReducers,
}
