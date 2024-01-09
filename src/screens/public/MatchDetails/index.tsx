import React from 'react'
import { ScrollView } from 'react-native'
import { Screen } from '@components/Screen'
import { useMatchDetails } from '@hooks/useMatchDetails'

import { Players } from './components/Player'
import { Teams } from './components/Teams'
import { styles } from './styles'

export const MatchDetails = () => {
  const { match } = useMatchDetails()

  return (
    <Screen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Teams
          teamOne={match.teamOne}
          teamTwo={match.teamTwo}
          time={match.time}
        />

        <Players
          teamOnePlayers={match.teamOnePlayers}
          teamTwoPlayers={match.teamTwoPlayers}
        />
      </ScrollView>
    </Screen>
  )
}
