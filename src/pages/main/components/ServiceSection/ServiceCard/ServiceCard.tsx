import styled from '@emotion/styled'
import { Divider } from 'modules/common/components'
import { Sizes } from 'modules/common/models'
import { Paragraph, Title } from 'modules/typography'
import React, { FC } from 'react'

type Props = {
  shadow: boolean
  icon: string
  title: string
  text: string
  size?: Sizes
}

export const ServiceCard: FC<Props> = ({ shadow, title, icon, text, size='M' }) => {
  return (
    <Paper shadow={String(shadow)} size={size}>
      <Img src={icon} alt='ico'/>
      <Title level={5} align="center">{title}</Title>
      <Divider/>
      <Paragraph align="center">{text}</Paragraph>
    </Paper>
  )
}

const Paper = styled.div<{ shadow?: string, size: Sizes }>`
  padding: ${({ size }) => size === 'S' ? '24px 12px' : '40px 30px'};
  border-radius: 0.25rem;
  box-shadow: ${({ shadow }) => shadow === 'true' ? '0 10px 22px rgb(0 0 0 / 5%)' : 'none'};
  display: flex;
  flex-direction: column;
  row-gap: ${({ size }) => size === 'S' ? '8px' : '12px'};
  align-items: center;
`

const Img = styled.img`
  width: 55px;
  height: 55px;
`

