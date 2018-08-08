import React from 'react';
import { ContentWrapper, ScalingH2, ScalingText, List } from 'helpers/sharedStyles';

const IndicationsForUseWrapper = ContentWrapper.extend``;

function IndicationsForUse({ style }) {
  return (
    <IndicationsForUseWrapper style={style}>
      <ScalingH2 style={{ marginTop: '0.75em'}}>Indications For Use</ScalingH2>
      <ScalingText style={{ marginBottom: '0.75em' }}>
        This product is intended to be used by patients who are under the care
        or treatment of a physician or licensed healthcare professional. The
        device is intended to be used by these patients to administer
        aerosolized medication from most pressurized Metered Dose Inhalers. The
        intended environments for use include the home, hospitals and clinics.
      </ScalingText>
      <ScalingH2>Cautions:</ScalingH2>
      <List style={{ marginLeft: '1em' }}>
        <li>
          PRODUCT MAY BE PERMANENTLY DAMAGED IF BOILED, STERILIZED, OR CLEANED
          IN A DISHWASHER AT TEMPERATURES ABOVE 158°F (70°C).
        </li>
        <li>Do not leave the chamber unattended with children.</li>
      </List>
      <ScalingText style={{ marginBottom: 0 }}><b>Please see Instructions for Use</b></ScalingText>
    </IndicationsForUseWrapper>
  );
}

export default IndicationsForUse;
