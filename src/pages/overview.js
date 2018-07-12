import React from 'react';
import styled from 'styled-components';

const AdditionalFeatures = styled.div`
  background: #f5f5f5;
  background: rgba(245, 245, 245, 1);
  width: 100%;
  line-height: 4.5vw;
`;

const AdditionalFeaturesTextWrapper = styled.div`
  width: 90%;
  padding: 3vw;
  font-family: Myriad Pro;
  p,
  span {
    font-size: 3vw;
    margin-bottom: 2.25vw;
  }
`;

const AdditionalFeaturesH2 = styled.h2`
  font-size: 3.5vw;
  margin-bottom: 3vw;
  color: #004899;
  color: rgb(0, 72, 153);
`;

const AdditionalFeaturesText = styled.p`
`;

const AdditionalFeaturesSpan = styled.span`
  color: #007fc8;
  color: rgb(0, 127, 200);
`;

function Overview() {
  return (
    <div>
      <AdditionalFeatures>
        <AdditionalFeaturesTextWrapper>
          <AdditionalFeaturesH2>
            Additional features of AeroChamber Plus® Flow-Vu® VHC
          </AdditionalFeaturesH2>
          <AdditionalFeaturesText>
            <AdditionalFeaturesSpan>
              "EZ Flow" Exhalation Valve
            </AdditionalFeaturesSpan>{' '}
            - Directs exhaled medication away from the patient's face and eyes.5
          </AdditionalFeaturesText>
          <AdditionalFeaturesText>
            <AdditionalFeaturesSpan>Inhalation Valve</AdditionalFeaturesSpan> -
            Built-in, low-resistance, 1-way valve opens easily and prevents
            exhalation back into the chamber.5
          </AdditionalFeaturesText>
          <AdditionalFeaturesText>
            <AdditionalFeaturesSpan>Anti-static Chamber</AdditionalFeaturesSpan>{' '}
            - Improves the delivery of MDIs used with AeroChamber® due to
            medication not adhering to chamber walls.6
          </AdditionalFeaturesText>
          <AdditionalFeaturesSpan>
            Not made (or manufactured) with BPA (bisphenol A), phthalates,
            latex, lead, or PVC1,7
          </AdditionalFeaturesSpan>
        </AdditionalFeaturesTextWrapper>
      </AdditionalFeatures>
    </div>
  );
}

export default Overview;
