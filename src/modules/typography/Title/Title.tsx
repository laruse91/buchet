import styled from '@emotion/styled'
import { BREAKPOINT } from 'modules/common/constants'
import { FONT_ALIGN, FONT_COLOR, FONT_COLOR_VALUES, TypographyProps, TypographyTitleProps } from 'modules/typography'
import React, { FC } from 'react'

const { TABLET } = BREAKPOINT

export const Title: FC<TypographyTitleProps> = ({ level = 1, children, ...props }) => {
  switch (level) {
    case (6):
      return <H6 {...props}>{children}</H6>
    case (5):
      return <H5 {...props}>{children}</H5>
    case (4):
      return <h4>{children}</h4>
    case (3):
      return <H3 {...props}>{children}</H3>
    case (2):
      return <h2>{children}</h2>
    case (1):
    default:
      return <H1 {...props}>{children}</H1>
  }
}
const H1 = styled.h1<TypographyProps>`
  text-align: ${({ align = FONT_ALIGN.START }) => align};
  color: ${({ color = FONT_COLOR.MAIN }) => FONT_COLOR_VALUES[color]};
  text-transform: ${({ upperCase }) => upperCase && 'uppercase'};
  text-transform: ${({ upperCase }) => upperCase && 'uppercase'};
  line-height: 1.3;
  font-size: 28px;
  font-weight: bold;
  margin: 0;

  @media (min-width: ${TABLET}) {
    font-size: 40px;
  }
`

const H3 = styled.h3<TypographyProps>`
  font-weight: 700;
  text-align: ${({ align = FONT_ALIGN.START }) => align};
  color: ${({ color = FONT_COLOR.MAIN }) => FONT_COLOR_VALUES[color]};
  text-transform: ${({ upperCase }) => upperCase && 'uppercase'};
  line-height: 1.3;
  font-size: 24px;
  margin: 0;

  @media (min-width: ${TABLET}) {
    font-size: 28px;
  }
`

const H5 = styled.h5<TypographyProps>`
  font-weight: 700;
  text-align: ${({ align = FONT_ALIGN.START }) => align};
  color: ${({ color = FONT_COLOR.MAIN }) => FONT_COLOR_VALUES[color]};
  text-transform: ${({ upperCase }) => upperCase && 'uppercase'};
  line-height: 1.3;
  font-size: 18px;
  margin: 0;
`

const H6 = styled.h5<TypographyProps>`
  font-weight: 700;
  text-align: ${({ align = FONT_ALIGN.START }) => align};
  color: ${({ color = FONT_COLOR.MAIN }) => FONT_COLOR_VALUES[color]};
  text-transform: ${({ upperCase }) => upperCase && 'uppercase'};
  line-height: 1.3;
  font-size: 15px;
  margin: 0;
  letter-spacing: 2px;
`
