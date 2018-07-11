import React from 'react';
import GatsbyImg from 'gatsby-image';
import styled from 'styled-components';
import Link from 'gatsby-link';

const Img = styled(GatsbyImg)`
  width: 100%;
`;

const IndexPage = ({ data }) => {
  return (
    <div>
      <Img sizes={data.background.sizes} />
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
  }
`;

export default IndexPage;
