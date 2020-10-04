import React from 'react'
import styled from 'styled-components'
import { COMPANY, NEWS, SHOP } from '../App'
import { FooterLink } from './FooterLink'

const Container = styled.footer`
  display: flex;
  flex-direction: row;
  padding-top: 1rem;
  margin-bottom: 2rem;
  border-top: 1px solid black;
  justify-content: center;
`

export const Footer = ({ setTab }) => {
  return (
    <Container>
      <FooterLink setTab={setTab} text={NEWS} />
      <FooterLink setTab={setTab} text={COMPANY} />
      <FooterLink setTab={setTab} text={SHOP} />
    </Container>
  )
}
