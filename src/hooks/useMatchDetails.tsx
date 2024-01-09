import { DetailsRouteProps } from '@navigator/ParamsRoute'
import { useRoute } from '@react-navigation/native'
import { MatchDetail } from 'interfaces/match-detail'

export type UseMatchDetailsProps = {
  match: MatchDetail
}

export const useMatchDetails = (): UseMatchDetailsProps => {
  const { params } = useRoute<DetailsRouteProps>()

  return {
    match: params.match,
  }
}
