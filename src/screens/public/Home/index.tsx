import React from 'react'
import { ActivityIndicator, RefreshControl, View } from 'react-native'
import { Loading } from '@components/Loading'
import { Screen } from '@components/Screen'
import { Typography } from '@components/Typography'
import { useColors } from '@hooks/useColors'
import { useHome } from '@hooks/useHome'
import { ContentStyle, FlashList, ListRenderItem } from '@shopify/flash-list'
import { CONSTANTS } from 'constants/constants'
import { Match } from 'interfaces/matches'

import { Card } from './component/Card'
import { styles } from './styles'

export const Home = () => {
  const {
    matches,
    loading,
    onFetchMore,
    loadingFetchMore,
    goToDetails,
    refresh,
    update,
  } = useHome()

  const color = useColors('text')

  const separatorComponent = () => <View style={{ height: 16 }} />

  const renderItem: ListRenderItem<Match> = ({ item }) => (
    <Card
      teamOne={item.teamOne}
      teamTwo={item.teamTwo}
      league={item.league}
      live={item.live}
      time={item.time}
      onPress={() => goToDetails(item)}
    />
  )

  const HeaderComponent = () => (
    <Typography variant="xLargeSemiBold" color="text">
      {CONSTANTS.HOME.TITLE}
    </Typography>
  )

  const FooterComponent = () => {
    if (loadingFetchMore)
      return (
        <ActivityIndicator
          size="small"
          color={color}
          testID="test-loading-fetchMore"
        />
      )
    return null
  }

  return (
    <Screen style={styles.container}>
      {loading && <Loading />}

      {!loading && (
        <FlashList
          testID="test-flashlist"
          contentContainerStyle={styles.content as ContentStyle}
          refreshControl={
            <RefreshControl refreshing={refresh} onRefresh={update} />
          }
          ListHeaderComponent={HeaderComponent}
          ListHeaderComponentStyle={styles.header}
          ListFooterComponent={FooterComponent}
          ListFooterComponentStyle={styles.footer}
          data={matches}
          keyExtractor={(item: any, i: number) => `${i}-${item.id}`}
          renderItem={renderItem}
          ItemSeparatorComponent={separatorComponent}
          estimatedItemSize={50}
          onEndReachedThreshold={0.2}
          onEndReached={onFetchMore}
        />
      )}
    </Screen>
  )
}
