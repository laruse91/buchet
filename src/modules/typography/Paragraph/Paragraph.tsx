import styled from '@emotion/styled'
import { FONT_ALIGN, FONT_COLOR, FONT_COLOR_VALUES, TypographyProps } from 'modules/typography'

export const Paragraph = styled.p<TypographyProps>`
  color: ${({ color = FONT_COLOR.SECONDARY }) => FONT_COLOR_VALUES[color]};
  text-align: ${({ align = FONT_ALIGN.START }) => align};
  text-transform: ${({ upperCase }) => upperCase && 'uppercase'};
  margin: 0;
`
