import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 0.8rem;
  text-decoration: underline;

  &: hover {
    color: #5a91e8;
    cursor: pointer;
  }
`

export const FooterLink = ({ setTab, text }) => {
  return <Container onClick={() => setTab(text)}>{text}</Container>
}
