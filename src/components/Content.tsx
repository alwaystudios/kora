import React, { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'
import { getCurrentTab } from '../redux/selectors'
import { COMPANY, NEWS, SHOP } from './pages'
import { Company } from './pages/Company'
import { News } from './pages/News'
import { Shop } from './pages/Shop'

export const Content: FunctionComponent = () => {
  const currentTab = useSelector(getCurrentTab)
  return (
    <>
      {currentTab === NEWS && <News />}
      {currentTab === COMPANY && <Company />}
      {currentTab === SHOP && <Shop />}
    </>
  )
}
