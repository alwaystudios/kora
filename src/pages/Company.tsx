import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { PageContent } from '../components/PageContent'
import { Para } from '../components/Para'

const Img = styled.img`
  width: 100%;
  overflow: hidden;
  max-height: 200px;
  object-fit: cover;
`

export const Company: FunctionComponent = () => (
  <PageContent title="Samochody to nasza pasja">
    <div style={{ marginBottom: '1rem' }}>
      <Img src="./shop_photo.jpg" alt="shop" />
    </div>
    <Para>
      Sklep motoryzacyjny Kora to rodzinna firma z długoletnią tradycją. Naszym celem jest
      zapewnienie klientom doskonałej obsługi, a dzięki ponad 40-letniemu doświadczeniu czujemy, że
      jesteśmy w stanie to zapewnić. Właściciel sklepu, mgr. inż Zbigniew Ptaś, dba o bezpośredni
      kontakt z odbiorcą, gwarantuje fachową obsługę i służy rzetelną informacją.
    </Para>
    <Para>
      Oferujemy szeroką gamę części zamiennych do samochodów eksploatacyjnych, jak i silnikowych.
      Serdecznie zapraszamy do współpracy zarówno warsztaty, stacje obsługi, jak i klientów
      detalicznych.
    </Para>
    <Para>
      Warto zaglądnąć na naszą zakładkę Sklep Online (Allegro), gdzie oferujemy najciekawsze
      artykuły w najniższych cenach, możliwe do odebrania osobiście lub wysłania w dowolne miejsce
      Polski.
    </Para>
    <img style={{ width: 'fit-content' }} src="./car2.jpeg" alt="car" />
    {/* <div className="para" style={{ fontSize: 'xx-large' }}>
      Posiadamy w stałej sprzedaży:
    </Para>
    <ul style={{ textAlign: 'left' }}>
      <li>części eksploatacyjne /filtry</li>
      <li>klocki</li>
      <li>tarcze hamulcowe</li>
      <li>szczęki</li>
      <li>końcówki drążków</li>
      <li>pompy wody</li>
      <li>paliwa</li>
      <li>tarcze hamulcowe</li>
      <li>tuleje metalowo-gumowe zawieszenia</li>
      <li>łączniki stabilizatora</li>
      <li>amortyzatory</li>
      <li>elementy blacharskie</li>
      <li>oświetlenie </li>
      <li>zderzaki</li>
      <li>oleje, smary i plyny chłodnicze, oraz wiele wiele innych produktów</li>
    </ul> */}
  </PageContent>
)
