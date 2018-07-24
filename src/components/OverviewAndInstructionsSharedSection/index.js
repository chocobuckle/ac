import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { ContentWrapper } from 'helpers/sharedStyles';

// const OverviewAndInstructionsSharedSection = ContentWrapper.extend`
//   ${'' /* background: linear-gradient(
//     180deg,
//     rgba(20, 255, 255, 0) 2.12%,
//     rgba(20, 255, 255, 0.04) 3.83%,
//     rgba(20, 255, 255, 1) 49.44%
//   ); */} text-align: center;
// `;

const H1Wrapper = styled.div`
  margin: 2vw auto;
  text-align: center;
`;

const H1 = styled.h1`
  font-size: 6vw;
  margin-bottom: 1vw;
`;

const BPAImgAndTextWrapper = styled.div`
  width: 42vw;
`;

const BPAImgAndTextAndMacbookImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BPAImgStyle = {
  maxWidth: '749px',
  marginBottom: '2vw'
};

const macbookImgStyle = {
  maxWidth: '886px',
  marginBottom: '2vw',
  width: '70vw'
};

function OverviewAndInstructionsSharedSection({ macbook, bpaAndDishwasherSafe }) {
  return (
    <ContentWrapper>
      <H1Wrapper>
        <H1>AeroChamber Plus® Flow-Vu®:</H1>
        <H1>Seeing Is The Difference</H1>
      </H1Wrapper>
      <p>
        <span>AeroChamber Plus® Flow-Vu®</span> is an anti-static valved holding
        chamber designed with patients in mind. Patients can use an{' '}
        <span>AeroChamber Plus® Flow-Vu®</span> to help improve medication
        delivery from a metered dose inhaler (MDI).
      </p>
      <p>
        Watch <b>Seeing Is the Difference</b> for a behind-the-scenes look at
        how
        <span> AeroChamber Plus®</span> is designed, manufactured, and tested:
      </p>
      <BPAImgAndTextAndMacbookImgWrapper>
        <Img sizes={macbook.sizes} style={{ ...macbookImgStyle }} />
        <BPAImgAndTextWrapper>
          <Img
            sizes={bpaAndDishwasherSafe.sizes}
            style={{ ...BPAImgStyle }}
          />
          <p
            style={{
              color: '#007fc8',
              fontSize: '3vw',
              lineHeight: '1.5em',
              marginBottom: 0
            }}>
            AeroChamber Plus® Flow-Vu® is dishwasher safe on the top rack at
            temperatures up to 158°F (70°C).
          </p>
        </BPAImgAndTextWrapper>
      </BPAImgAndTextAndMacbookImgWrapper>
    </ContentWrapper>
  );
}

export default OverviewAndInstructionsSharedSection;
