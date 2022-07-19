import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { RouteProp } from '@react-navigation/native'
import {
  StackNavigationOptions,
  StackNavigationProp,
  StackScreenProps as RNStackScreenProps,
} from '@react-navigation/stack'
import { ICart, IProduct, IRestaurant } from './api/apiInterfaces'
import { ImageProps, ImageSourcePropType, TextStyle, TouchableOpacity } from 'react-native'

export type StorageParamList = {
  token: undefined,
  amount: number
}

export type AuthStackParamList = {
  Login: undefined
  SignUp: undefined
}

export type INavigation = StackNavigationProp<StackParamList, any>

export type RootStackParamList = AuthStackParamList & {
  Home: undefined
  NavInfor: undefined
  Notification: undefined
  Restaurant: {item: IRestaurant} 
  ItemProduct: undefined
  Address: undefined
  Product:  undefined
  Cart: undefined
  ListProduct: undefined
}



export type StackParamList = AuthStackParamList & RootStackParamList
export interface StackScreenProps {
  component: React.FC<any>
  options?:
    | StackNavigationOptions
    | ((props: {
        route: RouteProp<any, keyof RootStackParamList>
        navigation: any
      }) => StackNavigationOptions)
}


export type CustomImageProps = ImageProps & { background?: boolean }

export type IState = 'loading' | 'error' | 'success'


export type CustomButtonProps = TouchableOpacity['props'] & {
  loading?: boolean
  size?: 'small' | 'medium'
  variant?: 'contained' | 'outlined'
  fullWidth?: boolean
  textStyle?: TextStyle
}

export type AuthStackScreenProps<T extends keyof AuthStackParamList> = RNStackScreenProps<
  AuthStackParamList,
  T
>

export type RootStackScreenProps<T extends keyof (RootStackParamList)> =
  RNStackScreenProps<RootStackParamList>

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
