import styled from '@emotion/styled'
import { useMedia } from 'hooks'
import { BREAKPOINT } from 'modules/common/constants'
import { Container } from 'modules/layout'
import { SectionTitle } from 'pages/main/components'
import { TariffCard } from 'pages/main/components/PricingSection/TariffCard'
import { SECTION_TITLE, TARIFFS } from 'pages/main/constants'
import React, { FC } from 'react'

type Props = { id: string }

const { TABLET } = BREAKPOINT

export const PricingSection: FC<Props> = ({ id }) => {
  const tablet = useMedia({ minWidth: 768 })
  return (
    <Section id={id}>
      <Container>
        <SectionTitle size={!tablet ? 'S' : 'M'} {...SECTION_TITLE.PRICING}/>
        <Flex>
          {TARIFFS.map(tariff => <TariffCard key={tariff.title} {...tariff}/>)}
        </Flex>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  background: #f8f7ff;
  padding: 40px 0;

  @media (min-width: ${TABLET}) {
    padding: 80px 0;
  }
`

const Flex = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 24px;
  row-gap: 24px;
  flex-wrap: wrap;
`
