import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { COMPANY, NEWS, SHOP } from './pages'
import { FooterLink } from './FooterLink'

const Container = styled.footer`
  display: flex;
  flex-direction: row;
  padding-top: 1rem;
  margin-bottom: 2rem;
  border-top: 1px solid black;
  justify-content: center;
  white-space: nowrap;
  overflow: hidden;
`

export const Footer: FunctionComponent = () => (
  <Container>
    <FooterLink text={NEWS} />
    <FooterLink text={COMPANY} />
    <FooterLink text={SHOP} />
  </Container>
)
