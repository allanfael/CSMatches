import { colors } from '@themes/colors'
import { createStyles } from 'responsive-react-native'

export const styles = createStyles({
  container: {
    width: '100%',
    backgroundColor: colors.secondary,
    borderRadius: 16,
  },
  timeContainer: {
    borderBottomLeftRadius: 16,
    borderTopRightRadius: 16,
    height: 26,
    paddingRight: 8,
    paddingLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  divisor: {
    marginTop: 20,
    height: 1,
    backgroundColor: colors.label,
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
  },
  teamImageContainer: {
    gap: 10,
    alignItems: 'center',
  },
  leagueContainer: {
    padding: 10,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
})
