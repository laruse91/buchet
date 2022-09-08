import styled from '@emotion/styled'
import { LogoIcon } from 'assets'
import React, { FC } from 'react'

type Size = 'small' | 'large'
type Props = {
  onClick?: () => void
  color?: string
  size?: Size
}

export const Logo: FC<Props> = ({ onClick, color = '#161c2d', size = 'large' }) => {
  return (
    <A href="/" onClick={onClick} color={color}>
      <LogoIcon height={size === 'small' ? '24px' : '32px'} width={size === 'small' ? '75px' : '100px'}/>
    </A>
  )
}

const A = styled.a<{ color: string }>`
  color: ${({ color }) => color};
`
