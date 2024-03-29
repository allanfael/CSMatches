import { RouteProp } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { MatchDetail } from 'interfaces/match-detail'
import { ROUTERS } from 'utils/routers'

export type ParamsRoute = {
  [ROUTERS.HOME]: undefined
  [ROUTERS.DETAILS]: {
    match: MatchDetail
  }
}

export type RouterProps = NativeStackNavigationProp<ParamsRoute>

export type HomeRouteProps = RouteProp<ParamsRoute, 'Home'>

export type DetailsRouteProps = RouteProp<ParamsRoute, 'Details'>
