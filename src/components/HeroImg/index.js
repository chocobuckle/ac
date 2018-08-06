import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const HeroImgAndTextWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const HeroTextWrapper = styled.div`
  font-weight: 100;
  left: 5vw;
  position: absolute;
  top: 21vw;
  p:nth-child(2) {
    font-style: italic;
  }

  @media screen and (min-width: 996px) {
    left: 49.8px;
    top: 209.16px;
  }
`;

const HeroText = styled.p`
  color: #fff;
  font-family: Myriad Pro, sans-serif;
  font-weight: 100;
  font-size: 4.5vw;
  line-height: 1.3em;
  margin-bottom: 0;

  @media screen and (min-width: 600px) {
    line-height: 1.225em;
  }

  @media screen and (min-width: 780px) {
    line-height: 1.175em;
  }

  @media screen and (min-width: 996px) {
    font-size: 44.82px;
  }
`;

const flowVuImgStyle = {
  bottom: '32.9%',
  left: '72.25%',
  maxWidth: '175px',
  position: 'absolute',
  width: '17.5%',
  zIndex: 2
}

const ContactPageGradient = styled.div`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 3%,
    rgba(255, 255, 255, 0.3) 7%,
    rgba(255, 255, 255, 0.55) 12%,
    rgba(255, 255, 255, 1) 31.5%
  );
  top: 0;
  left: 0;
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
`;

function HeroImg({ backgroundImgSizes, flowVuSizes, location }) {
  return (
    <HeroImgAndTextWrapper>
      <Img sizes={backgroundImgSizes} />
      {location === '/contact' && (
        <ContactPageGradient />
      )}
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
