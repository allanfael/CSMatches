import { colors } from '@themes/colors'
import { createStyles } from 'responsive-react-native'

export const styles = createStyles({
  container: {
    width: '100%',
    backgroundColor: colors.secondary,
    borderRadius: 16,
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
  time: {
    alignSelf: 'center',
    marginTop: 22,
  },
})
