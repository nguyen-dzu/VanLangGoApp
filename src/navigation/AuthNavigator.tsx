import React from 'react'
import { StyleSheet } from 'react-native'
// import { ConfirmCode, Login, SignUp } from 'screens/auth'
import { AuthStackParamList, StackScreenProps } from '../types'
import Navigator from './Navigator'

interface IStackScreen extends StackScreenProps {
  name: keyof AuthStackParamList
}

const screens: IStackScreen[] = [
  // {
  //   name: 'Login',
  //   component: Login,
  //   options: {
  //     headerShown: false,
  //   },
  // },
  // {
  //   name: 'SignUp',
  //   component: SignUp,
  //   options: {
  //     headerShown: false,
  //   },
  // },
  // {
  //   name: 'ConfirmCode',
  //   component: ConfirmCode,
  //   options: {
  //     title: 'Xác nhận mã code',
  //   },
  // },
]

export default function RootNavigator() {
  return <Navigator screens={screens} initialRouteName="Login" />
}

const styles = StyleSheet.create({})
