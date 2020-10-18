import React, { FunctionComponent } from 'react'
import { NEWS } from '../tabs'
import { PageContent } from '../components/PageContent'
import { Para } from '../components/Para'

export const News: FunctionComponent = () => (
  <PageContent title={NEWS}>
    <Para>
      Zapewniamy, iż pomimo zagrożenia epidemiologicznego, sklep jest otwarty i oferujemy bezpieczną
      obsługę. W razie pytań lub wątpliwości zapraszamy do kontaktu mailowego lub telefonicznego.
    </Para>
    <img style={{ width: 'fit-content' }} src="./car1.jpeg" alt="car" />
  </PageContent>
)
