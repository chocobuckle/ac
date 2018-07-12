import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './index.css';

const Wrapper = styled.div`
  max-width: 996px;
  margin: 0 auto;
`;

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' }
      ]}
    />
    <Wrapper
      style={{
        margin: '0 auto',
        padding: 0
      }}>
      <Header logoSizes={data.logo.sizes} />
      {children()}
      <Footer footerSizes={data.footer.sizes} />
    </Wrapper>
  </div>
);

export default Layout;

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
    logo: imageSharp(id: { regex: "/shared/logo.png/" }) {
      sizes(maxWidth: 300) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    footer: imageSharp(id: { regex: "/shared/footer.png/" }) {
      sizes(maxWidth: 960) {
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
