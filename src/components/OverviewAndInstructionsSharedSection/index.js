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

const Gradient = styled.div`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 2.12%,
    rgba(255, 255, 255, 0.04) 3.83%,
    rgba(255, 255, 255, 1) 43.44%
  );
  margin-top: -55.5vw;
  position: relative;
  z-index: 1;
`;

function OverviewAndInstructionsSharedSection({
  bpaAndDishwasherSafe,
  headerFirstLine,
  headerSecondLine,
  subHeaderText,
  macbook
}) {
  return (
    <div>
      <Gradient>
        <ContentWrapper>
          <H1Wrapper style={{ marginTop: '25vw' }}>
            <H1>{headerFirstLine}</H1>
            <H1>{headerSecondLine}</H1>
          </H1Wrapper>
          <div
            style={{ textAlign: 'center' }}
            dangerouslySetInnerHTML={{ __html: subHeaderText }}
          />
        </ContentWrapper>
      </Gradient>
      <ContentWrapper>
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
    </div>
  );
}

export default OverviewAndInstructionsSharedSection;
