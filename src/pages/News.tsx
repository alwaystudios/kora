import React, { FunctionComponent } from 'react'
import { NEWS } from '../tabs'
import { PageContent } from '../components/PageContent'

export const News: FunctionComponent = () => (
  <PageContent title={NEWS}>
    <div className="para">
      Zapewniamy, iż pomimo zagrożenia epidemiologicznego, sklep jest otwarty i oferujemy bezpieczną
      obsługę. W razie pytań lub wątpliwości zapraszamy do kontaktu mailowego lub telefonicznego.
    </div>
    <img style={{ width: 'fit-content' }} src="./car1.jpeg" alt="car" />
  </PageContent>
)
