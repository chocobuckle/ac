import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const HeroImgAndTextWrapper = styled.div`
  position: relative;
`;

const BackgroundImg = styled(Img)`
  width: 100%;
`;

const HeroTextWrapper = styled.div`
  position: absolute;
  top: 22vw;
  left: 5vw;
  line-height: 0;
  font-weight: 100;
  p:nth-child(2) {
    font-style: italic;
    font-weight: bolder;
  }
`;

const HeroText = styled.p`
  color: #fff;
  font-family: Myriad Pro;
  font-size: 4.5vw;
  font-weight: 100;
  line-height: 0.75vw;
`;

function HeroImg({ backgroundImgSizes }) {
  return (
    <HeroImgAndTextWrapper>
      <BackgroundImg sizes={backgroundImgSizes} />
      <HeroTextWrapper>
        <HeroText>Helps Patients Inhale</HeroText>
        <HeroText>Metered Dose Inhaler (MDI’s)</HeroText>
        <HeroText>Medications Correctly<sup>1</sup></HeroText>
      </HeroTextWrapper>
    </HeroImgAndTextWrapper>
  );
}

export default HeroImg;
