import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { View } from 'react-native'
import { Text } from '../../../components/common'
import { RootStackParamList } from '../../../types'

export default function ({
    navigation,
  }: StackScreenProps<RootStackParamList, "Address">) {
  return (
    <View>
        <Text>
            hello
        </Text>
    </View>
  )
}
