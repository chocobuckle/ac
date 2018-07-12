import React from 'react';
import GatsbyImg from 'gatsby-image';
import styled from 'styled-components';
import Link from 'gatsby-link';

const ImgAndTextWrapper = styled.div`
  position: relative;
`;

const BackgroundImg = styled(GatsbyImg)`
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

const MacbookImg = styled(GatsbyImg)`
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
      </ImgAndTextWrapper>
      <MacbookWrapper>
        <MacbookImg sizes={data.macbook.sizes} />
        <VideoButtonWrapper>
          <VideoButton>VIDEO 1</VideoButton>
          <VideoButton>VIDEO 2</VideoButton>
          <VideoButton>VIDEO 3</VideoButton>
        </VideoButtonWrapper>
      </MacbookWrapper>
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
      sizes(maxWidth: 5464) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    macbook: imageSharp(id: { regex: "/shared/macbook_large.png/" }) {
      sizes(maxWidth: 1293) {
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
