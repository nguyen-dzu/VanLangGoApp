import React from 'react'
import { StyleSheet } from 'react-native'
import { Address } from '../screens/root/Address'
import { Home, NavInfor, Notification } from '../screens/root/Main'
import { Restaurant } from '../screens/root/Restaurant'

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
  },
  {
    name: 'NavInfor',
    component: NavInfor,
    options: {
      headerTitle: 'Điều Hướng Hành Động',
    },
  },
  {
    name: 'Notification',
    component: Notification,
    options: {
      headerTitle: 'Thông Báo',
    },
  },
  {
    name: 'Restaurant',
    component: Restaurant,
    options:{
      headerShown: false,
    }
  },
  {
    name: 'Address',
    component: Address,
    options:{
      headerTitle: 'Địa Chỉ Của Bạn'
    }
  },
  
]

export default function RootNavigator() {
  return <Navigator screens={screens} initialRouteName="Home" />
}

const styles = StyleSheet.create({})
