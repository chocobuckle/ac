import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const ImgAndTextWrapper = styled.div`
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
  margin-bottom: 6vw;
`;

const FlowVuImg = styled(Img)`
  position: absolute;
  width: 20vw;
  max-width: 263px;
  bottom: 54vw;
  left: 72vw;
`;

const MacbookWrapper = styled.div`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 2.12%,
    rgba(255, 255, 255, 0.04) 3.83%,
    rgba(255, 255, 255, 1) 49.44%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
`;

const MacbookImg = styled(Img)`
  max-width: 80.813em;
`;

const VideoButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 90%;
`;

const VideoButton = styled.button`
  color: #ffffff;
  color: rgb(255, 255, 255);
  margin: 0 1vw;
  font-size: 5vw;
  padding: 2vw 3vw;
  cursor: pointer;
  font-family: Myriad Pro;
  background: linear-gradient(
    90deg,
    rgba(0, 72, 153, 1) 15.05%,
    rgba(0, 127, 200, 1) 100%
  );
`;

const BubblesAndBannerWrapper = styled.div`
  width: 100%;
`;

const Bubbles = styled(Img)`
  width: 100%;
  margin: 1.5em auto;
`;

const BubblesImgStyle = {
  marginBottom: 0
};

const WhiteBanner = styled.div`
  background: #fff;
  background: rgba(255, 255, 255, 1);
  opacity: 0.5;
  width: 100%;
  position: relative;
  bottom: 29vw;
  padding: 0.25em;
`;

const WhiteBannerInnerImgWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 60%;
  margin: 0 auto;
`;

const BubblesInnerImg = styled(Img)`
  width: 50px;
`;

const DishWasherSafeImg = BubblesInnerImg.extend``;
const Replace12MonthsImg = BubblesInnerImg.extend``;
const BPAFreeImg = BubblesInnerImg.extend``;

const IndexPage = ({ data }) => {
  return (
    <div>
      <ImgAndTextWrapper>
        <BackgroundImg sizes={data.background.sizes} />
        <HeroTextWrapper>
          <HeroText>Helps Patients Inhale</HeroText>
          <HeroText>Metered Dose Inhaler (MDI’s)</HeroText>
          <HeroText>Medications Correctly1</HeroText>
        </HeroTextWrapper>
        <FlowVuImg sizes={data.flowVu.sizes} />
      </ImgAndTextWrapper>
      <MacbookWrapper>
        <MacbookImg sizes={data.macbook.sizes} />
        <VideoButtonWrapper>
          <VideoButton>VIDEO 1</VideoButton>
          <VideoButton>VIDEO 2</VideoButton>
          <VideoButton>VIDEO 3</VideoButton>
        </VideoButtonWrapper>
      </MacbookWrapper>
      <BubblesAndBannerWrapper>
        <Bubbles
          imgStyle={{ ...BubblesImgStyle }}
          sizes={data.bubblesBG.sizes}
        />
        <WhiteBanner>
          <WhiteBannerInnerImgWrapper>
            <DishWasherSafeImg sizes={data.dishwasherSafe.sizes} />
            <Replace12MonthsImg sizes={data.replace12Months.sizes} />
            <BPAFreeImg sizes={data.bpaFree.sizes} />
          </WhiteBannerInnerImgWrapper>
        </WhiteBanner>
      </BubblesAndBannerWrapper>
    </div>
  );
};

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    background: imageSharp(id: { regex: "/shared/background.png/" }) {
      sizes(maxWidth: 960) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    macbook: imageSharp(id: { regex: "/shared/macbook_large.png/" }) {
      sizes(maxWidth: 960) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    flowVu: imageSharp(id: { regex: "/home/flow_vu_large.png/" }) {
      sizes(maxWidth: 263) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    bubblesBG: imageSharp(id: { regex: "/home/bubbles_crop_bg.png/" }) {
      sizes(maxWidth: 960) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    dishwasherSafe: imageSharp(id: { regex: "/home/dishwasher_safe.png/" }) {
      sizes(maxWidth: 135) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    replace12Months: imageSharp(id: { regex: "/home/replace_12_months.png/" }) {
      sizes(maxWidth: 135) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    bpaFree: imageSharp(id: { regex: "/home/bpa_free.png/" }) {
      sizes(maxWidth: 135) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
  }
`;

export default IndexPage;
