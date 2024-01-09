import { colors } from '@themes/colors'
import { createStyles } from 'responsive-react-native'

export const styles = createStyles({
  container: {
    marginTop: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    flexDirection: 'row',
    width: 174,
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderRadius: 12,
    backgroundColor: colors.secondary,
    gap: 16,
    marginBottom: 16,
  },
  namesContainer: {
    alignItems: 'flex-end',
  },
})
