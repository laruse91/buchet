import styled from '@emotion/styled'
import { BREAKPOINT } from 'modules/common/constants'
import { Sizes } from 'modules/common/models'
import { Paragraph, SubTitle, Title } from 'modules/typography'
import React, { FC } from 'react'

type Props = {
  title: string
  price: number,
  features: string[],
  description: string,
  promoPrice: number
  period?: string
  size?: Sizes
}
const { TABLET } = BREAKPOINT

export const TariffCard: FC<Props> = ({ title, price, features, description, promoPrice, period, size = 'M' }) => {
  return (
    <Wrapper size={size}>
      <SubTitle align='center'>{title}</SubTitle>

      <PriceBlock>
        <Price level={3} align='center'>
          от {promoPrice || price} Р
        </Price>
        <Paragraph>
          {period && `в ${period}`}
        </Paragraph>
      </PriceBlock>

      <Desc align='center'>
        {description}
      </Desc>

      <div>
        {features.map(it => <Feature key={it} color='main' align='center'>{it}</Feature>)}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div<{ size: Sizes }>`
  background: #fff;
  padding: 12px;
  display: grid;
  row-gap: 16px;
  grid-auto-rows: min-content;
  border-radius: 6px;
  margin: 0 32px;

  @media (min-width: ${TABLET}) {
    row-gap: 32px;
    padding: 48px;
    margin: 0;
  }
`

const PriceBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Price = styled(Title)`
  width: fit-content;
  color: #fff;
  position: relative;
  z-index: 10;
  margin: 0 auto;
  padding: 0 12px;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    z-index: -1;
    border-radius: 8px;
    background: #05bd93;
  }

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    border-radius: 8px;
    transform: rotate(-6deg);
    background: rgba(5, 189, 147, .58);
  }
`

const Feature = styled(Paragraph)`
  border-bottom: 1px solid #e9ecef;
  padding: 12px;
  width: 100%;

  @media (min-width: ${TABLET}) {
    width: 260px;
  }
`

const Desc = styled(Paragraph)`
  width: 100%;

  @media (min-width: ${TABLET}) {
    width: 260px;
  }
`
