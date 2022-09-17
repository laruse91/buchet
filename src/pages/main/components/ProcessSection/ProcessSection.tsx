import styled from '@emotion/styled'
import { useMedia } from 'hooks'
import { BREAKPOINT } from 'modules/common/constants'
import { Container } from 'modules/layout'
import { SectionTitle } from 'pages/main/components'
import { PROCESS_STEPS, SECTION_TITLE } from 'pages/main/constants'
import React, { FC } from 'react'
import { StepCard } from './StepCard'

type Props = { id: string }
const { TABLET, MEDIUM } = BREAKPOINT

export const ProcessSection: FC<Props> = ({ id }) => {
  const tablet = useMedia({ minWidth: 768 })
  return (
    <Section id={id}>
      <Container>
        <SectionTitle size={!tablet ? 'S' : 'M'} {...SECTION_TITLE.PROCESS} />

        <Grid>
          {PROCESS_STEPS.map((step, i) => (
            <StepCard key={step.title} size={!tablet ? 'S' : 'M'} step={i + 1} {...step} />
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
  margin: 48px auto 0;
  display: grid;
  grid-template-columns: minmax(200px, 520px);
  justify-content: center;

  @media (min-width: ${TABLET}) {
    grid-template-columns: repeat(2, minmax(215px, 336px));
  }
  @media (min-width: ${MEDIUM}) {
    grid-template-columns: repeat(auto-fill, minmax(215px, 260px));
  }
`
