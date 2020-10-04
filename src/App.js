import React, { useState } from 'react'
import styled from 'styled-components'
import { Footer } from './components/Footer'
import { AppHeader } from './components/Header'
import { Content } from './components/Content'

export const COMPANY = 'O Firmie'
export const SHOP = 'Sklep Online'
export const NEWS = 'Aktualności'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`

const App = () => {
  const [tab, setTab] = useState(NEWS)
  return (
    <Container>
      <AppHeader setTab={setTab} tab={tab} />
      <Content tab={tab} />
      <Footer setTab={setTab} />
    </Container>
  )
}

export default App
