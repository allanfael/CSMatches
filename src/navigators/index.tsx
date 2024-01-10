import React from 'react'
import { useColors } from '@hooks/useColors'
import {
  DefaultTheme as NavigationDefaultTheme,
  NavigationContainer,
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { PublicStacks } from './Stacks'

const MainStack = createNativeStackNavigator()

export const RootNavigation = () => {
  const backgroundColor = useColors('primary')

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      background: backgroundColor,
    },
  }

  return (
    <NavigationContainer theme={CustomDefaultTheme}>
      <MainStack.Navigator>
        <MainStack.Screen
          name="PublicStacks"
          component={PublicStacks}
          options={{
            headerShown: false,
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  )
}
