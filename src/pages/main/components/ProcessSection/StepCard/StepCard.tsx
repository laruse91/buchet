import styled from '@emotion/styled'
import { Sizes } from 'modules/common/models'
import { Paragraph, Title } from 'modules/typography'
import React, { FC } from 'react'

type Props = {
  step: number,
  title: string,
  description: string
  size?: Sizes
}

export const StepCard: FC<Props> = ({ step, title, description, size = 'M' }) => {
  return (
    <Wrapper size={size}>
      <Circle size={size} level={3} align='center'>{`0${step}`}</Circle>

      <Content size={size}>
        <Title align='center' level={5}>{title}</Title>
        <Paragraph align='center'>{description}</Paragraph>
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div<{ size: Sizes }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:before {
    content: "";
    position: absolute;
    height: ${({ size }) => size === 'S' ? '60px' : '74px'};
    width: ${({ size }) => size === 'S' ? '60px' : '74px'};
    border-radius: 50%;
    border: 6px solid rgba(5, 189, 147, 0.5);
    opacity: 0;
    transition: opacity .5s ease;

    top: ${({ size }) => size === 'S' ? '30px' : '37px'};
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:hover {
    &:before {
      opacity: 1;
    }
  }
`

const Circle = styled(Title)<{ size: Sizes }>`
  height: ${({ size }) => size === 'S' ? '60px' : '74px'};
  width: ${({ size }) => size === 'S' ? '60px' : '74px'};
  border-radius: 50%;
  background: #05bd93;
  color: #fff;
  line-height: ${({ size }) => size === 'S' ? '60px' : '74px'};
  margin: ${({ size }) => size === 'S' ? '0 auto 24px' : '0 auto 48px'};
`

const Content = styled.div<{ size: Sizes }>`
  background: #f9f9f9;
  position: relative;
  border-radius: 6px;
  padding: 24px;
  width: ${({ size }) => size === 'S' ? '80%' : 'auto'};

  &:before {
    content: "";
    position: absolute;
    width: 28px;
    height: 28px;
    background-color: #f9f9f9;
    transform: rotate(45deg);
    left: 0;
    right: 0;
    margin: -35px auto 0;
  }
`
