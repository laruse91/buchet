import styled from '@emotion/styled'
import { AboutPng } from 'assets'
import { useMedia } from 'hooks'
import { BREAKPOINT } from 'modules/common/constants'
import { Container } from 'modules/layout'
import { SectionTitle } from 'pages/main/components/SectionTitle'
import { CLIENTS, SECTION_TITLE } from 'pages/main/constants'
import React, { FC } from 'react'
import { Progress } from './Progress'

type Props = unknown

const { TABLET } = BREAKPOINT

export const AboutSection: FC<Props> = () => {
  const tablet = useMedia({ minWidth: 768 })
  return (
    <Section>
      <Container>
        <Wrapper>
          <Paper>
            <SectionTitle size={!tablet ? 'S' : 'M'} {...SECTION_TITLE.ABOUT}/>

            <ClientsBlock>
              {CLIENTS.map(client => (<Progress {...client}/>))}
            </ClientsBlock>
          </Paper>

          <Image src={AboutPng}/>
        </Wrapper>
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  @media (min-width: ${TABLET}) {
    flex-direction: row;
    padding: 0 48px;
  }
`

const Paper = styled.div`
  background: #fff;
  border-radius: 5px;
  padding: 24px;
  display: grid;
  margin: 12px 0;
  z-index: 2;

  @media (min-width: ${TABLET}) {
    min-width: 400px;
  }
`

const ClientsBlock = styled.div`
  display: grid;
  grid-row-gap: 12px;
  margin-top: 16px;
`

const Image = styled.img`
  width: 100%;
  background: #fff;
  border-radius: 5px;

  @media (min-width: ${TABLET}) {
    width: 620px;
    position: absolute;
    right: 0;
    z-index: 1;
  }
`
