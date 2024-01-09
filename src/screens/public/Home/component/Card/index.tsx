import React, { FC } from 'react'
import { Pressable, View } from 'react-native'
import { Image } from '@components/Image'
import { Typography } from '@components/Typography'
import { colors } from '@themes/colors'
import { Team } from 'interfaces/matches'
import { dateFormat } from 'utils/dateParse'

import { styles } from './styles'

type Props = {
  teamOne: Team
  teamTwo: Team
  live: boolean
  time: Date | string
  league: Team
  onPress(): void
}

export const Card: FC<Props> = ({
  live,
  time,
  teamOne,
  teamTwo,
  league,
  onPress,
}) => {
  const timeContainerColor = live ? colors.red : colors.silver
  const timeText = live ? 'AGORA' : dateFormat(time)

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View
        style={{ ...styles.timeContainer, backgroundColor: timeContainerColor }}
      >
        <Typography variant="xSmallRegular" color="text">
          {timeText}
        </Typography>
      </View>

      <View style={styles.row}>
        <View style={styles.teamImageContainer}>
          <Image.Root>
            <Image.Circle uri={teamOne.image} />
          </Image.Root>
          <Typography variant="smallRegular" color="text">
            {teamOne.name}
          </Typography>
        </View>

        <Typography variant="normalRegular" color="gray">
          vs
        </Typography>

        <View style={styles.teamImageContainer}>
          <Image.Root>
            <Image.Circle uri={teamTwo.image} />
          </Image.Root>
          <Typography variant="smallRegular" color="text">
            {teamTwo.name}
          </Typography>
        </View>
      </View>

      <View style={styles.divisor} />

      <View style={styles.leagueContainer}>
        <Image.Root>
          <Image.SmallCircle uri={league.image} />
        </Image.Root>
        <Typography variant="xSmallRegular" color="text">
          {league.name}
        </Typography>
      </View>
    </Pressable>
  )
}
