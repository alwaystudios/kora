import React, { FunctionComponent } from 'react'
import { SHOP } from '../tabs'
import { PageContent } from '../components/PageContent'
import { Para } from '../components/Para'

export const Shop: FunctionComponent = () => (
  <PageContent title={SHOP}>
    <Para>Przepraszamy. Strona w konstrukcji</Para>
    <img style={{ width: 'fit-content' }} src="./car2.jpeg" alt="car" />
  </PageContent>
)
