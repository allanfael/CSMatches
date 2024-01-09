import React from 'react'
import { ScrollViewProps, View, ViewStyle } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { createStyles } from 'responsive-react-native'

interface Props extends ScrollViewProps {
  children: React.ReactNode
  style?: ViewStyle
}

export const Screen = ({ children, style }: Props) => {
  const { top } = useSafeAreaInsets()
  return (
    <View style={{ ...styles.container, ...style, marginTop: top }}>
      {children}
    </View>
  )
}

const styles = createStyles({
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
})
