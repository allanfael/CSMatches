import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Home } from '@screens/public/Home'
import { MatchDetails } from '@screens/public/MatchDetails'
import { colors } from '@themes/colors'
import ArrowBack from 'assets/icons/ic-arrow-left.svg'
import { ROUTERS } from 'utils/routers'

import { ParamsRoute } from './ParamsRoute'

const Stack = createStackNavigator<ParamsRoute>()

export const PublicStacks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTERS.HOME}
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={ROUTERS.DETAILS}
        component={MatchDetails}
        options={({ route }) => ({
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTitleStyle: {
            color: colors.text,
          },
          headerLeftContainerStyle: {
            paddingLeft: 24,
          },
          headerBackTitleVisible: false,
          headerBackImage: () => <ArrowBack />,
          headerTitle: route.params.match.league,
        })}
      />
    </Stack.Navigator>
  )
}
