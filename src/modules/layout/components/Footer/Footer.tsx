import styled from '@emotion/styled'
import CoverFooterIcon from 'assets/svg/cover-footer.svg'
import { Container, Logo } from 'modules/layout/components'
import { Paragraph, Title } from 'modules/typography'
import React, { FC } from 'react'

type Props = unknown

export const Footer: FC<Props> = () => {
  return (
    <Wrapper>
      <Cover>
        <Container>
          <Flex>
            <Column>
              <Logo size='small' color='#fff' />
              <Paragraph>
                Доверьте бухгалтерский учёт нам
              </Paragraph>
            </Column>

            <Column>
              <Title level={5} color='white'>Контакты</Title>
              <Paragraph>+7 (995) 1125288</Paragraph>
              <Paragraph>Telegram</Paragraph>
              <Paragraph>Whatsapp</Paragraph>
            </Column>

            <Column>
              <Title level={5} color='white'>Помощь</Title>
              <Paragraph>
                Если у Вас есть вопросы, напишите нам удобным для Вас спрособом. Мы всегда на связи и рады ответить на
                любые вопросы.
              </Paragraph>
            </Column>
          </Flex>
        </Container>
      </Cover>

      <Bottom>
        <Container>
          <Paragraph align='center'>
            2022г-Бучёт. Не является публичной офертой
          </Paragraph>
        </Container>
      </Bottom>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  background: #f8f7ff;
  margin-top: auto;
`

const Cover = styled.div`
  background: url(${CoverFooterIcon}) no-repeat right;
  background-size: cover;
  padding: 32px;
`

const Flex = styled.div`
  display: flex;
  column-gap: 24px;
  row-gap: 24px;
  justify-content: space-between;
  flex-wrap: wrap;
`

const Column = styled.div`
  max-width: 280px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`

const Bottom = styled.div`
  background: #15242b;
  padding: 16px 0;
`
