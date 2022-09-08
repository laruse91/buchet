import styled from '@emotion/styled'
import { FONT_ALIGN, FONT_COLOR, FONT_COLOR_VALUES } from 'modules/typography'
import { TypographyProps } from 'modules/typography'

export const SubTitle = styled.span<TypographyProps>`
  text-transform: uppercase;
  color: ${({ color = FONT_COLOR.SECONDARY }) => FONT_COLOR_VALUES[color]};
  text-align: ${({ align = FONT_ALIGN.START }) => align};
  margin: 0;
`
