import React, { FC } from 'react'
import { useColors } from '@hooks/useColors'
import { Image } from 'expo-image'
import { createStyles } from 'responsive-react-native'

type Props = {
  uri: string
}

export const CircleImage: FC<Props> = ({ uri }) => {
  const backgroundColor = useColors('gray')

  return (
    <Image
      source={{ uri }}
      alt="image"
      contentFit="contain"
      style={{ ...styles.image, backgroundColor }}
    />
  )
}

const styles = createStyles({
  image: {
    height: 60,
    width: 60,
    borderRadius: 60,
  },
})
