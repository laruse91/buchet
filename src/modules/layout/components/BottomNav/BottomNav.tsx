import styled from '@emotion/styled'
import { NAVIGATION } from 'pages/main/constants'
import React, { FC } from 'react'

type Props = { hidden: boolean }

export const BottomNav: FC<Props> = ({ hidden }) => {
  if (hidden) return null

  return (
    <Nav>
      {NAVIGATION.map(it => {
        // const active = String(it.match.some((path) => pathname.includes(path)))
        return (
          <NavButton key={it.anchor} href={it.anchor}>
            {it.icon}
            {it.label}
          </NavButton>
        )
      })}
    </Nav>
  )
}
const Nav = styled.nav`
  width: 100vw;
  z-index: 10;
  position: fixed;
  bottom: 0;
  background: #fff;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 10px;
  padding: 12px 8px 18px;
  box-shadow: 0 0 6px rgba(73, 73, 73, 0.31), 0 0 24px 6px rgba(97, 97, 97, 0.08), 0 0 48px 6px rgba(97, 97, 97, 0.08);
`

const NavButton = styled.a`
  height: auto;
  display: grid;
  place-items: center;
  row-gap: 4px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  transition: all 0.3s ease;
  text-decoration: none;
  color: #8492a6;

  & svg {
    color: #05bd93;
  };

  &:hover {
    color: #05bd93;
  };
`
