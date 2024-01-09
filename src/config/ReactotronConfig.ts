/* eslint-disable prefer-const */
/* eslint-disable import/no-extraneous-dependencies */
import { NativeModules } from 'react-native'
import Reactotron from 'reactotron-react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

declare global {
  interface Console {
    tron: any
  }
}

if (__DEV__) {
  let scriptHostname
  const scriptURL = NativeModules.SourceCode.scriptURL
  scriptHostname = scriptURL.split('://')[1].split(':')[0]

  const tron = Reactotron!.configure({
    host: scriptHostname,
    port: 9090,
    name: 'CSMatches',
  }).setAsyncStorageHandler!(AsyncStorage)
    .useReactNative()
    .connect()

  tron.clear!()

  console.tron = tron
}
