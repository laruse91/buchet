import styled from '@emotion/styled'
import React, { FC } from 'react'

type Props = unknown

export const Divider: FC<Props> = () => {
  return (
    <StyledDiv />
  )
}

const StyledDiv = styled.div`
  width: 80px;
  height: 1px;
  background: #05bd93;
  background: linear-gradient(to right, transparent, #05bd93, transparent);
  margin: 0 auto;
`
