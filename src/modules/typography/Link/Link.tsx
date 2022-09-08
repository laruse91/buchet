import styled from '@emotion/styled'
import { FONT_ALIGN, FONT_COLOR, FONT_COLOR_VALUES } from 'modules/typography'
import { TypographyProps } from 'modules/typography'

export const Link = styled.a<TypographyProps>`
  font-size: 15px;
  font-weight: 600;
  line-height: 1.5;
  color: ${({ color = FONT_COLOR.SECONDARY }) => FONT_COLOR_VALUES[color]};
  text-align: ${({ align = FONT_ALIGN.START }) => align};
  text-transform: ${({ upperCase }) => upperCase && 'uppercase'};
  margin: 0;
`
