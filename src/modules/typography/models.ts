import { ReactNode } from 'react'
import { FONT_ALIGN, FONT_COLOR } from './constants'

export type FontColors = typeof FONT_COLOR[keyof typeof FONT_COLOR]
export type FontAlign = typeof FONT_ALIGN[keyof typeof FONT_ALIGN]

export type TypographyProps = {
  color?: FontColors
  align?: FontAlign
  upperCase?: boolean
}
export type TypographyTitleProps = TypographyProps & {
  level?: 1 | 2 | 3 | 4 | 5 | 6,
  children: ReactNode
}

