import styled from '@emotion/styled'
import { useMedia } from 'hooks'
import React, { FC, ReactNode } from 'react'
import { BottomNav } from '../BottomNav'
import { Footer } from '../Footer'
import { Header } from '../Header'

type Props = {
  children: ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
  const tablet = useMedia({ minWidth: 756 })
  return (
    <Wrapper>
      <Header nav={tablet} />
      <Main>
        {children}
      </Main>
      <Footer />
      <BottomNav hidden={tablet} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-bottom: 76px;
  
  @media(min-width: 756px){
    padding-bottom: 0;
  }
`
const Main = styled.main`

`
