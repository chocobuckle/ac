import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const HeroImgAndTextWrapper = styled.div`
  position: relative;
`;

const HeroTextWrapper = styled.div`
  font-weight: 100;
  left: 5vw;
  line-height: 0;
  position: absolute;
  top: 22vw;
  p:nth-child(2) {
    font-style: italic;
    font-weight: bolder;
  }
`;

const HeroText = styled.p`
  color: #fff;
  font-family: Myriad Pro, sans-serif;
  font-weight: 100;
  font-size: 4.5vw;
  line-height: 0.75vw;
`;

const flowVuImgStyle = {
  bottom: '34.5vw',
  left: '72.25vw',
  maxWidth: '263px',
  position: 'absolute',
  width: '17.5vw'
};

function HeroImg({ backgroundImgSizes, flowVuSizes }) {
  return (
    <HeroImgAndTextWrapper>
      <Img sizes={backgroundImgSizes} />
      <HeroTextWrapper>
        <HeroText>Helps Patients Inhale</HeroText>
        <HeroText>Metered Dose Inhaler (MDI’s)</HeroText>
        <HeroText>
          Medications Correctly<sup>1</sup>
        </HeroText>
      </HeroTextWrapper>
      <Img sizes={flowVuSizes} style={{ ...flowVuImgStyle }} />
    </HeroImgAndTextWrapper>
  );
}

export default HeroImg;
