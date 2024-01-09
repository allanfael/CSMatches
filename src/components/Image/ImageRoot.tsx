import React, { FC } from 'react'
import { View, ViewStyle } from 'react-native'

type Props = {
  children: React.ReactNode
  style?: ViewStyle
}

export const ImageContainer: FC<Props> = ({ children, style }: Props) => {
  return <View style={style}>{children}</View>
}
