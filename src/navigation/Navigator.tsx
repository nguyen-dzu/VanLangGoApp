import { Ionicons } from '@expo/vector-icons'
import { createStackNavigator } from '@react-navigation/stack'
import { Colors, Configs, Layout } from '../constant'
import React from 'react'
import { StyleSheet } from 'react-native'
import { StackParamList } from '../types'

const Stack = createStackNavigator<any>()

export default function Navigator({
  screens,
  initialRouteName,
}: {
  screens: any[]
  initialRouteName: keyof StackParamList
}) {
  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        ...Configs.screenOptionsDefaut,
        headerStyle: styles.headerStyle,
        headerTintColor: Colors.gray2,
        headerTitleStyle: {
          fontSize: 16,
          fontWeight: 'bold',
          color: Colors.gray1,
          textTransform: 'uppercase',
          lineHeight: 24,
        },
        headerBackImage: () => <Ionicons name="chevron-back" size={28} color={'#7A7A7A'} />,
        cardStyle: {
          backgroundColor: Colors.background,
        },
      }}
    >
      {screens.map(screen => (
        <Stack.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{
            ...screen.options,
            headerStyle: [styles.headerStyle, screen.options.headerStyle],
          }}
        />
      ))}
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: Colors.background,
    height: Layout.headerHeight + Layout.statusBarHeight,
  },
})
