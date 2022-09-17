import styled from '@emotion/styled'
import { Divider } from 'modules/common/components'
import { Sizes } from 'modules/common/models'
import { FONT_ALIGN, Paragraph, SubTitle, Title } from 'modules/typography'
import React, { FC } from 'react'

type Props = {
  subtitle?: string
  title: string
  description: string
  size?: Sizes
}

export const SectionTitle: FC<Props> = ({ subtitle, title, description, size = 'M' }) => {
  return (
    <Wrapper size={size}>
      {subtitle && <SubTitle align='center'>{subtitle}</SubTitle>}

      <Title level={3} align={FONT_ALIGN.CENTER}>{title}</Title>
      <Divider />
      <Paragraph align='center'>{description}</Paragraph>
    </Wrapper>
  )
}

const Wrapper = styled.div<{ size: Sizes }>`
  width: ${({ size }) => size === 'S' ? '90%' : '60%'};
  justify-content: center;
  display: flex;
  flex-direction: column;
  grid-row-gap: ${({ size }) => size === 'S' ? '12px' : '16px'};
  margin: ${({ size }) => size === 'S' ? '0 auto 20px' : '0 auto 40px'};
`

