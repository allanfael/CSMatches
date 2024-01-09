import React, { FC } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { useColors } from '@hooks/useColors'
import { createStyles } from 'responsive-react-native'

interface Props {}

export const Loading: FC<Props> = () => {
  const primary = useColors('text')
  const size = 'large'

  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={primary} testID="test-loading" />
    </View>
  )
}

const styles = createStyles({
  container: {
    alignSelf: 'center',
    height: 70,
    width: 70,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
