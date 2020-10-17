import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Footer } from './components/Footer'
import { AppHeader } from './components/Header'
import { Content } from './components/Content'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  font-family: sans-serif;
`

const App: FunctionComponent = () => (
  <Container>
    <AppHeader />
    <Content />
    <Footer />
  </Container>
)

export default App
