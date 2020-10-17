import React, { FunctionComponent } from 'react'
import { SHOP } from '.'
import { Img } from '../Img'
import { MainContent } from './MainContent'

export const Shop: FunctionComponent = () => (
  <MainContent title={SHOP}>
    <Img src="./car2.jpeg" alt="car" />
  </MainContent>
)
