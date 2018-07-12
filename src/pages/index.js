import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

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

const InhalerTipsWrapper = styled.div`
  width: 100%;
`;

const InhalingRed = styled(Img)``;
const InhalingWithLogo = styled(Img)``;
const HomeInstructions1 = styled(Img)``;
const HomeInstructions2 = styled(Img)``;
const HomeInstructions3 = styled(Img)``;

const BubblesInnerImg = styled(Img)`
  width: 50px;
`;

const DishWasherSafeImg = BubblesInnerImg.extend``;
const Replace12MonthsImg = BubblesInnerImg.extend``;
const BPAFreeImg = BubblesInnerImg.extend``;

const IndexPage = ({ data }) => {
  return (
    <div>
      <MacbookWrapper>
        <MacbookImg sizes={data.macbook.sizes} />
        <VideoButtonWrapper>
          <VideoButton>VIDEO 1</VideoButton>
          <VideoButton>VIDEO 2</VideoButton>
          <VideoButton>VIDEO 3</VideoButton>
        </VideoButtonWrapper>
      </MacbookWrapper>
      <InhalerTipsWrapper>
        <InhalingRed sizes={data.inhalingRed.sizes} />
        <InhalingWithLogo sizes={data.inhalingWithLogo.sizes} />
        <HomeInstructions1 sizes={data.homeInstructions1.sizes} />
        <HomeInstructions2 sizes={data.homeInstructions2.sizes} />
        <HomeInstructions3 sizes={data.homeInstructions3.sizes} />
      </InhalerTipsWrapper>
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
    inhalingRed: imageSharp(id: { regex: "/home/inhaling_red.png/" }) {
      sizes(maxWidth: 350) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    inhalingWithLogo: imageSharp(id: { regex: "/home/inhaling_with_logo.png/" }) {
      sizes(maxWidth: 350) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    homeInstructions1: imageSharp(id: { regex: "/home/home_instructions_1.png/" }) {
      sizes(maxWidth: 117) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    homeInstructions2: imageSharp(id: { regex: "/home/home_instructions_2.png/" }) {
      sizes(maxWidth: 178) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    homeInstructions3: imageSharp(id: { regex: "/home/home_instructions_3.png/" }) {
      sizes(maxWidth: 206) {
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
