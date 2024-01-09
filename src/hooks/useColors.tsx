import { colors } from '@themes/colors'

type ColorProps = keyof typeof colors
export const useColors = (color: ColorProps) => {
  return colors[color]
}
