import React from 'react'
import { Contact } from './Contact'
import { COMPANY, NEWS, SHOP } from '../App'
import { Company } from './Company'
import { News } from './News'
import { Shop } from './Shop'
import styled from 'styled-components'
import { smallScreen } from '../breakpoints'

const Container = styled.div`
  display: flex;
  flex-direciton: row;
  justify-content: center;

  @media only screen and (max-width: ${smallScreen}px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`

const ContentContainer = styled.div`
  display: flex;
  min-width: 50%;
  width: 50%;
  max-width: 50%;

  @media only screen and (max-width: ${smallScreen}px) {
    min-width: 100%;
    width: 100%;
  }
`

export const Content = ({ tab }) => (
  <Container>
    <Contact className="contact" />
    <ContentContainer>
      {tab === NEWS && <News className="main" />}
      {tab === COMPANY && <Company className="main" />}
      {tab === SHOP && <Shop className="main" />}
    </ContentContainer>
  </Container>
)
