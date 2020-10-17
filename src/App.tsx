import React, { FunctionComponent } from 'react'
import { Footer } from './components/Footer'
import { AppHeader } from './components/Header'
import { Content } from './components/Content'

const App: FunctionComponent = () => (
  <div className="app">
    <AppHeader />
    <Content />
    <Footer />
  </div>
)

export default App
