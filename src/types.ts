import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { RouteProp } from '@react-navigation/native'
import {
  StackNavigationOptions,
  StackNavigationProp,
  StackScreenProps as RNStackScreenProps,
} from '@react-navigation/stack'
import {
  IAddress,
  ICleaningRoom,
  ICollaborator,
  IJob,
  ILocationRoom,
  IServiceType,
  IVoucher,
} from './api/apiInterfaces'
import { ImageProps, ImageSourcePropType, TextStyle, TouchableOpacity } from 'react-native'

export type StorageParamList = {
  token: undefined
}

export type AuthStackParamList = {
  Login: undefined
  SignUp: undefined
  ConfirmCode: { phoneNumber: string; onConfirm: (token: string) => void }
}

export type INavigation = StackNavigationProp<StackParamList, any>

export type RootStackParamList = BottomTabParamList & {
  Main: undefined
}

export type StackParamList = AuthStackParamList & RootStackParamList & BottomTabParamList
export interface StackScreenProps {
  component: React.FC<any>
  options?:
    | StackNavigationOptions
    | ((props: {
        route: RouteProp<any, keyof RootStackParamList>
        navigation: any
      }) => StackNavigationOptions)
}

export type BottomTabParamList = {
  Home: undefined
  Activity: undefined
  Notification: undefined
  Account: undefined
}
export interface BottomTabProps {
  name: keyof BottomTabParamList
  title?: string
  component: React.FC<any>
  options?: BottomTabNavigationOptions
}

export type CustomImageProps = ImageProps & { background?: boolean }

export type IState = 'loading' | 'error' | 'success'

export type IService = {
  id: string
  value: IServiceType
  label: string
  icon: ImageSourcePropType
  searchingIcon: any
  canChooseMonthlyPackage: boolean
  canChooseFavoriteCollaborator: boolean
  canChooseHasPetOptoin: boolean
  canChooseRoomType: boolean
  canChooseAirConditioner: boolean
  canChooseRepeatMonthlyOrQuarterly: boolean
  canChooseRepeatDaily: boolean
  isLaundry: boolean
  isSofa: boolean
}

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

export type RootStackScreenProps<T extends keyof (RootStackParamList & BottomTabParamList)> =
  RNStackScreenProps<RootStackParamList & BottomTabParamList, T>

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
