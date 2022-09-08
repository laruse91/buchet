import styled from '@emotion/styled'
import { Logo } from 'modules/layout/components'
import { NAV_ITEMS } from 'modules/layout/constants'
import { FONT_COLOR, Link } from 'modules/typography'
import React, { FC } from 'react'

type Props = { nav: boolean }

export const Header: FC<Props> = ({ nav }) => {
  return (
    <Wrapper>
      <Container>
        <Logo/>
        <Nav hidden={!nav}>
          {NAV_ITEMS.map(it => (
            <NavItem
              color={FONT_COLOR.MAIN}
              active={false}
              key={it.to}
              href={it.to}
            >
              {it.text}
            </NavItem>
          ))}
        </Nav>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  background: #fff;
  box-shadow: 0 3px 10px 0 rgb(22 28 45 / 8%);
  padding: 10px 0;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1200px;
`

const Nav = styled.nav<{ hidden?: boolean }>`
  display: ${({ hidden }) => !hidden ? 'flex' : 'none'};
  align-items: center;
`

const NavItem = styled(Link)<{ active: boolean }>`
  color: ${({ active }) => active && '#05BD91'};
  text-decoration: none;
  margin: 6px 10px;
  transition: all .3s ease;

  &:hover {
    color: #05BD91;
  }
`
