import { useCallback } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { useColors } from '@hooks/useColors'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import moment from 'moment'

import 'react-native-gesture-handler'
import 'moment/locale/pt-br'
import '@config/ReactotronConfig'

import { RootNavigation } from './src/navigators'

export default function App() {
  moment.locale('pt-br')

  const backgroundColor = useColors('primary')

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  })

  const onLayoutRootView = useCallback(async () => {
    await SplashScreen.hideAsync()
  }, [])

  if (!fontsLoaded) {
    return null
  }

  onLayoutRootView()

  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={backgroundColor} style="light" />
      <RootNavigation />
    </SafeAreaProvider>
  )
}
