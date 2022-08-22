import { Ionicons } from '@expo/vector-icons'
import { StackScreenProps } from '@react-navigation/stack'
import { ErrorsType, NavigatorType, SettingsType, StylesType } from 'expo-images-picker/src/Types'
import React, { useMemo } from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../../constant'
import { RootStackParamList } from '../../types'
import {AssetsSelector} from 'expo-images-picker'
const MAX_SELECTION = 10

const widgetSettings: SettingsType = {
  getImageMetaData: false,
  initialLoad: 100,
  assetsType: ['photo'],
  minSelection: 1,
  maxSelection: MAX_SELECTION,
  portraitCols: 3,
  landscapeCols: 3,
}

const widgetErrors: ErrorsType = {}

const widgetStyles: StylesType = {
  margin: 2,
  bgColor: Colors.background,
  spinnerColor: Colors.primary,
  widgetWidth: 99,
  videoIcon: {
    Component: Ionicons,
    iconName: 'ios-videocam',
    color: '#000',
    size: 20,
  },
  selectedIcon: {
    Component: Ionicons,
    iconName: 'ios-checkmark-circle-outline',
    color: '#000',
    bg: 'rgba(255, 255, 255, 0.7)',
    size: 26,
  },
}

export default function ({
  navigation,
  route,
}: StackScreenProps<RootStackParamList, 'ImagesPicker'>) {
  const { onConfirm } = route.params

  const widgetNavigator = useMemo(
    (): NavigatorType => ({
      Texts: {
        finish: 'Xong',
        back: 'Trở về',
        selected: `/${MAX_SELECTION} đã chọn`,
      },
      minSelection: 1,
      buttonTextStyle: {
        fontFamily: 'bold',
      },
      buttonStyle: {},
      onBack: () => navigation.goBack(),
      onSuccess: (data: any[]) => {
        navigation.goBack()
        onConfirm(data.map(item => item.uri))
      },
      midTextColor: Colors.success,
    }),
    []
  )

  return (
    <SafeAreaView edges={['bottom']}>
      <AssetsSelector
        Settings={widgetSettings}
        Errors={widgetErrors}
        Styles={widgetStyles}
        Navigator={widgetNavigator}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})
