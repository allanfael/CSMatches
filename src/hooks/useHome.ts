import { useCallback, useEffect, useRef, useState } from 'react'
import { RouterProps } from '@navigator/ParamsRoute'
import { useNavigation } from '@react-navigation/native'
import { api } from '@services/api/matches'
import { MatchDetail } from 'interfaces/match-detail'
import { Match } from 'interfaces/matches'
import { ROUTERS } from 'utils/routers'

import { matchDetailsMock } from '../screens/public/MatchDetails/mock'

export type UseHomeProps = {
  matches: Match[]
  loading: boolean
  loadingFetchMore: boolean
  refresh: boolean
  onFetchMore(): void
  goToDetails(value: Match): void
  update(): void
}

export const useHome = (): UseHomeProps => {
  const [loading, setLoading] = useState(false)
  const [loadingFetchMore, setLoadingFetchMore] = useState(false)
  const [refresh, setRefresh] = useState(false)
  const [matches, setMatches] = useState<Match[]>([])
  const [page, setPage] = useState(1)
  const isFirstRender = useRef(true)

  const { navigate } = useNavigation<RouterProps>()

  const fetch = useCallback(async () => {
    try {
      setLoading(true)
      const data = await api.matches(1)
      setMatches(data)
    } catch (error) {
    } finally {
      setLoading(false)
      setTimeout(() => {
        isFirstRender.current = false
      }, 100)
    }
  }, [])

  const update = useCallback(async () => {
    try {
      setRefresh(true)
      const data = await api.matches(1)
      setMatches(data)
    } catch (error) {
    } finally {
      setRefresh(false)
    }
  }, [])

  useEffect(() => {
    fetch()
  }, [fetch])

  const onFetchMore = useCallback(async () => {
    if (loadingFetchMore || isFirstRender.current) return

    const nextPage = page + 1

    try {
      setLoadingFetchMore(true)
      const data = await api.matches(nextPage)
      setPage((prev) => prev + 1)
      setMatches((prev) => [...prev, ...data])
    } catch (error) {
    } finally {
      setLoadingFetchMore(false)
    }
  }, [loadingFetchMore, page])

  const goToDetails = (match: Match) => {
    const matchDetails: MatchDetail = {
      time: match.time,
      league: match.league.name,
      teamOne: match.teamOne,
      teamTwo: match.teamTwo,
      teamOnePlayers: matchDetailsMock.teamOnePlayers,
      teamTwoPlayers: matchDetailsMock.teamTwoPlayers,
    }

    navigate(ROUTERS.DETAILS, { match: matchDetails })
  }

  return {
    matches,
    loading,
    onFetchMore,
    loadingFetchMore,
    goToDetails,
    refresh,
    update,
  }
}
