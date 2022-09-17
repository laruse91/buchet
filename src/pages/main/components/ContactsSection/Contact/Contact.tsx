import styled from '@emotion/styled'
import React, { FC, ReactNode } from 'react'

type Props = {
  title: string,
  contact: string,
  href: string,
  tag?: string
  icon: ReactNode
}

export const Contact: FC<Props> = ({ title, contact, icon, tag, href }) => {
  return (
    <Wrapper>
      <Button type={tag} href={href} target='_blank' rel='noreferrer noopener'>{icon}</Button>
      {/* <Title align="center" level={5}>{title}</Title> */}
      {/* <Paragraph>{contact}</Paragraph> */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
`
const Button = styled.a`
  text-decoration: none;
  color: transparent;
  background: #05bd93;
  height: 48px;
  width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px -6px rgb(5 189 147 / 60%);
  
  :hover{
    box-shadow: 0 0 8px 4px rgb(5 189 147 / 70%);
  }
  
  :focus{
    box-shadow: 0 0 10px 4px rgb(5 189 147 / 90%);
  }
`
