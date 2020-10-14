import React from 'react'
import { Img } from '../Img'
import { MainContent } from './MainContent'

export const Company = () => (
  <MainContent title="Samochody to nasza pasja">
    <img
      style={{
        objectFit: 'cover',
        width: '80%',
        overflow: 'hidden',
        maxHeight: '200px',
        marginBottom: '1rem',
      }}
      src="./shop_photo.jpg"
      alt="shop"
    />
    <div className="para">
      Sklep motoryzacyjny Kora to rodzinna firma z długoletnią tradycją. Naszym celem jest
      zapewnienie klientom doskonałej obsługi, a dzięki ponad 40-letniemu doświadczeniu czujemy, że
      jesteśmy w stanie to zapewnić. Właściciel sklepu, mgr. inż Zbigniew Ptaś, dba o bezpośredni
      kontakt z odbiorcą, gwarantuje fachową obsługę i służy rzetelną informacją.
    </div>
    <div className="para">
      Oferujemy szeroką gamę części zamiennych do samochodów eksploatacyjnych, jak i silnikowych.
      Serdecznie zapraszamy do współpracy zarówno warsztaty, stacje obsługi, jak i klientów
      detalicznych.
    </div>
    <div className="para">
      Warto zaglądnąć na naszą zakładkę Sklep Online (Allegro), gdzie oferujemy najciekawsze
      artykuły w najniższych cenach, możliwe do odebrania osobiście lub wysłania w dowolne miejsce
      Polski.
    </div>
    <Img src="./car2.jpeg" alt="car" />
    <div style={{ fontSize: 'xx-large' }}>Posiadamy w stałej sprzedaży:</div>
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
    </ul>
  </MainContent>
)
