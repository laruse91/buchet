import styled from '@emotion/styled'
import { CoverPng } from 'assets'
import { useMedia } from 'hooks'
import { BREAKPOINT } from 'modules/common/constants'
import { Container } from 'modules/layout'
import { SectionTitle } from 'pages/main/components'
import { CONTACTS, SECTION_TITLE } from 'pages/main/constants'
import React, { FC } from 'react'
import { Contact } from './Contact'

type Props = { id: string }
const { TABLET } = BREAKPOINT

export const ContactsSection: FC<Props> = ({ id }) => {
  const tablet = useMedia({ minWidth: 768 })
  return (
    <Section id={id}>
      <Container>
        <Cover>
          <SectionTitle size={!tablet ? 'S' : 'M'} {...SECTION_TITLE.CONTACTS}/>
          <Flex>
            {CONTACTS.map(it => <Contact key={it.title} {...it}/>)}
          </Flex>
        </Cover>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  background: rgb(223 249 235);
  padding: 40px 0;

  @media (min-width: ${TABLET}) {
    padding: 80px 0;
  }
`

const Cover = styled.div`
  background: url(${CoverPng}) no-repeat center;
  background-size: cover;
`

const Flex = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 24px;
  row-gap: 24px;
  flex-wrap: wrap;
`
