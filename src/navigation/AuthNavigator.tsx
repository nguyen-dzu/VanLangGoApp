import React from 'react'
import { StyleSheet } from 'react-native'
import { Login, SignUp } from '../screens/auth'
import ForgotPassword from '../screens/auth/ForgotPassword'
import ResetPassword from '../screens/auth/ResetPassword'
// import { ConfirmCode, Login, SignUp } from 'screens/auth'
import { AuthStackParamList, StackScreenProps } from '../types'
import Navigator from './Navigator'

interface IStackScreen extends StackScreenProps {
  name: keyof AuthStackParamList
}

const screens: IStackScreen[] = [
  {
    name: 'Login',
    component: Login,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'SignUp',
    component: SignUp,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'ForgotPassword',
    component: ForgotPassword,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'ResetPassword',
    component: ResetPassword,
    options: {
      headerShown: false,
    },
  },
]

export default function AuthNavigator() {
  return <Navigator screens={screens} initialRouteName="Login" />
}

const styles = StyleSheet.create({})
