import React from 'react';
import GatsbyImg from 'gatsby-image';
import styled from 'styled-components';
import Link from 'gatsby-link';

const BackgroundImg = styled(GatsbyImg)`
  width: 100%;
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
  max-width: 70%;
`;

const VideoButton = styled.button`
  color : #FFFFFF;
  color : rgb(255, 255, 255);
  margin: 0 1em;
  padding: 0.7em;
  cursor: pointer;
  font-family : Myriad Pro;
  background : linear-gradient(90deg, rgba(0, 72, 153, 1) 15.05%, rgba(0, 127, 200, 1) 100%);
`;

const IndexPage = ({ data }) => {
  return (
    <div>
      <BackgroundImg sizes={data.background.sizes} />
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
