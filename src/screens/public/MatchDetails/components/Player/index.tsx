import React, { FC } from 'react'
import { View } from 'react-native'
import { Image } from '@components/Image'
import { Typography } from '@components/Typography'
import { Player } from 'interfaces/match-detail'

import { styles } from './styles'

type Props = {
  teamOnePlayers: Player[]
  teamTwoPlayers: Player[]
}

export const Players: FC<Props> = ({ teamOnePlayers, teamTwoPlayers }) => {
  return (
    <View style={styles.container}>
      <View>
        {teamOnePlayers?.map((item) => (
          <View style={styles.card} key={item.nickname}>
            <View style={styles.namesContainer}>
              <Typography variant="mediumSemiBold" color="text">
                {item.nickname}
              </Typography>
              <Typography variant="mediumRegular" color="gray">
                {item.name}
              </Typography>
            </View>
            <Image.Root>
              <Image.Square uri={teamOnePlayers[0].image} />
            </Image.Root>
          </View>
        ))}
      </View>

      <View>
        {teamTwoPlayers?.map((item) => (
          <View style={styles.card} key={item.nickname}>
            <View style={styles.namesContainer}>
              <Typography variant="mediumSemiBold" color="text">
                {item.nickname}
              </Typography>
              <Typography variant="mediumRegular" color="gray">
                {item.name}
              </Typography>
            </View>
            <Image.Root>
              <Image.Square uri={teamOnePlayers[0].image} />
            </Image.Root>
          </View>
        ))}
      </View>
    </View>
  )
}
