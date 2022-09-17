import styled from '@emotion/styled'
import { HomePng, ShapeIcon } from 'assets'
import { BREAKPOINT } from 'modules/common/constants'
import { Container } from 'modules/layout'
import { Paragraph, Title } from 'modules/typography'
import React, { FC } from 'react'

type Props = { id: string }

const { TABLET } = BREAKPOINT

export const HomeSection: FC<Props> = ({ id }) => {
  return (
    <Section id={id}>
      <Container>
        <Wrapper>
          <TextBlock>
            <Title level={6} upperCase>Бухгалтерия</Title>
            <Title level={1}>Бухгалтерия для Вашего бизнеса</Title>
            <Paragraph>
              Доверьтесь нам. Бучёт- это команда опытных профессионалов, которые любят то, что делают
            </Paragraph>
          </TextBlock>

          <Img src={HomePng} />
        </Wrapper>
      </Container>

      <Shape />
    </Section>
  )
}

const Section = styled.section`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #f8f7ff;
  position: relative;
  padding: 80px 0;

  @media (min-width: ${TABLET}) {
    padding: 140px 0;
  }
`

const Shape = styled(ShapeIcon)`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: auto;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;

  @media (min-width: ${TABLET}) {
    grid-template-columns: 1fr 1fr;
  }
`

const TextBlock = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  grid-row-gap: 16px;
`

const Img = styled.img`
  width: 100%;
`
