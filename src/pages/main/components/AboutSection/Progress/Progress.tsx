import styled from '@emotion/styled'
import { Paragraph } from 'modules/typography'
import React, { FC } from 'react'

type Props = {
  value: number
  title: string
}

export const Progress: FC<Props> = ({ value, title }) => {
  return (
    <div>
      <Paragraph color='main'>{title}</Paragraph>
      <ProgressRange>
        <FillRange value={value} />
      </ProgressRange>
    </div>
  )
}

const ProgressRange = styled.div`
  display: flex;
  width: 100%;
  background: #e9ecef;
  border-radius: 4px;
  height: 8px;
  margin-top: 6px;
`
const FillRange = styled.div<{ value: number }>`
  width: ${({ value }) => value + '%'};
  background: #05bd93;
  border-radius: 4px;
  position: relative;

  &::after {
    content: ${({ value }) => `"${value}%"`};
    position: absolute;
    right: -10px;
    bottom: 14px;
  }
`
