import React from 'react'
import { StyleSheet } from 'react-native'
import {
  Home
} from '../screens/root'
import { RootStackParamList, StackScreenProps } from '../types'
import Navigator from './Navigator'

interface IStackScreen extends StackScreenProps {
  name: keyof RootStackParamList
}

const screens: IStackScreen[] = [
  {
    name: 'Home',
    component: Home,
    options: {
      headerShown: false,
    },
  }
]

export default function RootNavigator() {
  return <Navigator screens={screens} initialRouteName="Home" />
}

const styles = StyleSheet.create({})
