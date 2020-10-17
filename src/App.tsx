import React, { FunctionComponent, useState } from 'react'
import styled from 'styled-components'
import { Footer } from './components/Footer'
import { AppHeader } from './components/Header'
import { Content } from './components/Content'

export const COMPANY = 'o firmie'
export const SHOP = 'sklep online'
export const NEWS = 'aktualności'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  font-family: sans-serif;
`

const App: FunctionComponent = () => {
  const [tab, setTab] = useState(NEWS)
  return (
    <Container>
      <AppHeader setTab={setTab} />
      <Content tab={tab} />
      <Footer setTab={setTab} />
    </Container>
  )
}

export default App
