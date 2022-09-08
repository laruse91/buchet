import styled from '@emotion/styled'
import { useMedia } from 'hooks'
import { BREAKPOINT } from 'modules/common/constants'
import { Container } from 'modules/layout'
import { SectionTitle } from 'pages/main/components'
import { SECTION_TITLE, SERVICE_CARDS } from 'pages/main/constants'
import React, { FC } from 'react'
import { ServiceCard } from './ServiceCard'

type Props = { id: string }

const { TABLET } = BREAKPOINT

export const ServiceSection: FC<Props> = ({ id }) => {
  const tablet = useMedia({ minWidth: 768 })

  return (
    <Section id={id}>
      <Container>
        <SectionTitle size={!tablet ? 'S' : 'M'} {...SECTION_TITLE.SERVICE}/>

        <Grid>
          {SERVICE_CARDS.map((card, i) => (
            <ServiceCard
              key={card.title}
              size={!tablet ? 'S' : 'M'}
              shadow={tablet ? !!(i % 2) : true}
              {...card}
            />
          ))}
        </Grid>
      </Container>

    </Section>
  )
}

const Section = styled.section`
  background-color: #fff;
  padding: 40px 0;

  @media (min-width: ${TABLET}) {
    padding: 80px 0;
  }
`

const Grid = styled.div`
  grid-row-gap: 30px;
  grid-column-gap: 30px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(200px, 520px);
  justify-content: center;

  @media (min-width: ${TABLET}) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 360px));
  }
`
