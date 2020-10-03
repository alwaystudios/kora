import React from 'react'
import { Box } from '../Box'
import { FacebookIcon } from 'react-share'

export const Contact = () => (
  <Box title="ZAPRASZAMY DO SKLEPU">
    <a href="https://www.facebook.com/Kora-Auto-Cze%C5%9Bci-878225795593110/" target="facebook">
      <FacebookIcon borderRadius={50} size={40} />
    </a>
    <p>
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
      tel <a href="tel:+48 018 26 699 47">+48 018 26 699 47</a>
      <br />
      <a href="tel:+48 606 365 122">+48 606 365 122</a>
      <br />
      <a href="tel:+48 500 210 103">+48 500 210 103</a>
    </p>
    <a href="mailto:kora-nt@pro.onet.pl" target="email">
      email: kora-nt@pro.onet.pl
    </a>
  </Box>
)
