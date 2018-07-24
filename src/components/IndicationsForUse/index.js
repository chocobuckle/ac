import React from 'react';
import styled from 'styled-components';
import { ContentWrapper } from 'helpers/sharedStyles';

const IndicationsForUseWrapper = ContentWrapper.extend`
  line-height: 4.5vw;

  p,
  span,
  ul,
  li,
  b,
  sup,
  h1,
  h2 {
    font-family: Myriad Pro, sans-serif;
  }

  h1,
  h2 {
    color: #004899;
  }

  p,
  span {
    font-size: 3.9vw;
    margin-bottom: 2.25vw;
  }

  span {
    color: #007fc8;
  }
`;

const H2 = styled.h2`
  font-size: 5.3vw;
  margin-bottom: 2vw;
  span {
    font-size: 5.3vw;
  }
`;

const CautionsList = styled.ul`
  margin-left: none;
`;

function IndicationsForUse() {
  return (
    <IndicationsForUseWrapper>
      <H2>Indications For Use</H2>
      <p>
        This product is intended to be used by patients who are under the care
        or treatment of a physician or licensed healthcare professional. The
        device is intended to be used by these patients to administer
        aerosolized medication from most pressurized Metered Dose Inhalers. The
        intended environments for use include the home, hospitals and clinics.
      </p>
      <H2>Cautions:</H2>
      <CautionsList>
        <li>
          PRODUCT MAY BE PERMANENTLY DAMAGED IF BOILED, STERILIZED, OR CLEANED
          IN A DISHWASHER AT TEMPERATURES ABOVE 158°F (70°C).
        </li>
        <li>Do not leave the chamber unattended with children.</li>
      </CautionsList>
      <b>Please see Instructions for Use</b>
    </IndicationsForUseWrapper>
  );
}

export default IndicationsForUse;
