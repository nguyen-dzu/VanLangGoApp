import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { View } from 'react-native'
import { Text } from '../../components/common'
import { AuthStackParamList } from '../../types'

export default function ({ navigation }: StackScreenProps<AuthStackParamList, 'Login'>) {
  return (
    <View>
        <Text>
            Helo
        </Text>
    </View>
  )
}
