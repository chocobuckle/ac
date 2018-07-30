import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const HeroImgAndTextWrapper = styled.div`
  position: relative;
`;

const HeroTextWrapper = styled.div`
  font-weight: 100;
  left: 5vw;
  position: absolute;
  top: 21vw;
  p:nth-child(2) {
    font-style: italic;
  }
`;

const HeroText = styled.p`
  color: #fff;
  font-family: Myriad Pro, sans-serif;
  font-weight: 100;
  font-size: 4.5vw;
  line-height: 1.3em;
  margin-bottom: 0;
`;

const flowVuImgStyle = {
  bottom: '34.5vw',
  left: '72.25vw',
  maxWidth: '263px',
  position: 'absolute',
  width: '17.5vw',
  zIndex: 2
};

function HeroImg({ backgroundImgSizes, flowVuSizes, location }) {
  return (
    <HeroImgAndTextWrapper>
      <Img sizes={backgroundImgSizes} />
      {location !== '/contact' && (
        <HeroTextWrapper>
          <HeroText>Helps Patients Inhale</HeroText>
          <HeroText>Metered Dose Inhaler (MDI’s)</HeroText>
          <HeroText>
            Medications Correctly<sup>1</sup>
          </HeroText>
        </HeroTextWrapper>
      )}
      {location !== '/contact' && (
        <Img sizes={flowVuSizes} style={{ ...flowVuImgStyle }} />
      )}
    </HeroImgAndTextWrapper>
  );
}

export default HeroImg;
