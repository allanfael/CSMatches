import React, { FC } from 'react'
import { View } from 'react-native'
import { Image } from '@components/Image'
import { Typography } from '@components/Typography'
import { Team } from 'interfaces/matches'
import { dateFormat } from 'utils/dateParse'

import { styles } from './styles'

type Props = {
  teamOne: Team
  teamTwo: Team
  time: Date | string
}

export const Teams: FC<Props> = ({ teamOne, teamTwo, time }) => {
  return (
    <View>
      <View>
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
      </View>

      <Typography variant="normalSemiBold" color="text" style={styles.time}>
        {dateFormat(time)}
      </Typography>
    </View>
  )
}
