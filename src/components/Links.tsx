import { FacebookIcon } from '@alwaystudios/as-ui-components'
import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #999999;
  background-color: #ffffff;
  width: 100%;
  padding: 0.75rem;

  & a {
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid #ffffff;
  }

  & a:hover {
    border: 1px solid gray;
  }
`

export const Links: FunctionComponent = () => (
  <Container>
    <a href="tel:+48 018 26 699 47">
      <img
        src="https://www.svgrepo.com/show/11602/telephone.svg"
        alt="phone"
        height="40px"
        width="40px"
      />
    </a>
    <a
      href="https://www.google.pl/maps/place/Ko%C5%9Bcielna+7,+34-400+Nowy+Targ,+Poland/@49.4832553,20.0293818,17z/data=!3m1!4b1!4m5!3m4!1s0x4715e4ec63360f6b:0x17c2ac1ca94aa5bd!8m2!3d49.4832553!4d20.0315705"
      target="googlemaps"
    >
      <img
        src="https://www.svgrepo.com/show/271100/google-maps.svg"
        alt="maps"
        height="40px"
        width="40px"
      />
    </a>
    <a href="https://www.facebook.com/Kora-Auto-Cze%C5%9Bci-878225795593110/" target="facebook">
      <FacebookIcon size="40px" />
    </a>
    <a href="mailto:kora-nt@pro.onet.pl" target="email">
      <img
        src="https://www.svgrepo.com/show/32285/email.svg"
        alt="maps"
        height="40px"
        width="40px"
      />
    </a>
  </Container>
)
