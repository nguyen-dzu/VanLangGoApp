import { authActions, authReducers } from './auth'
import { loaderActions, loaderReducers } from './loader'
import { settingActions, settingReducers } from './setting'

export const actions = {
  auth: authActions,
  loader: loaderActions,
  setting: settingActions,
}

export const reducers = {
  auth: authReducers,
  loader: loaderReducers,
  setting: settingReducers,
}
