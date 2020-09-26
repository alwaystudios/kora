import React from 'react'
import { Box } from '../Box'

export const Contact = () => (
  <Box title="Kontakt">
    <p>
      ZAPRASZAMY DO SKLEPU
      <br />
      ulica Kościelna 7<br />
      34-400 Nowy Targ
    </p>
    <a
      href="https://www.google.pl/maps/place/Ko%C5%9Bcielna+7,+34-400+Nowy+Targ,+Poland/@49.4832553,20.0293818,17z/data=!3m1!4b1!4m5!3m4!1s0x4715e4ec63360f6b:0x17c2ac1ca94aa5bd!8m2!3d49.4832553!4d20.0315705"
      target="googlemaps"
    >
      <img src="map.jpg" alt="map" />
    </a>
    <p>
      <b>CZYNNE:</b>
      <br />
      Pon - Pt: 8:00-17:00
      <br />
      Sobota: 9:00 - 13:00
    </p>
    <p>
      <b>tel.</b> 018 26 699 47
      <br />
      +48 606 365 122
      <br />
      +48 500 210 103
    </p>
    <a href="mailto:kora-nt@pro.onet.pl" target="email">
      email: kora-nt@pro.onet.pl
    </a>
  </Box>
)
