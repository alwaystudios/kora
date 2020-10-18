import React, { FunctionComponent } from 'react'
import { Footer } from './components/Footer'
import { AppHeader } from './components/Header'
import { useSelector } from 'react-redux'
import { NEWS, COMPANY, SHOP } from './tabs'
import { Company } from './pages/Company'
import { News } from './pages/News'
import { Shop } from './pages/Shop'
import { getCurrentTab } from './redux/selectors'

const App: FunctionComponent = () => {
  const currentTab = useSelector(getCurrentTab)
  return (
    <div className="app">
      <AppHeader />
      <>
        {currentTab === NEWS && <News />}
        {currentTab === COMPANY && <Company />}
        {currentTab === SHOP && <Shop />}
      </>
      <Footer />
    </div>
  )
}

export default App
