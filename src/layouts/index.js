import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Header from 'components/Header';
import Footer from 'components/Footer';
import HeroImg from 'components/HeroImg';
import './index.css';
import './myStyles.css';

const Wrapper = styled.div`
  max-width: 996px;
  margin: 0 auto;
`;

const Layout = ({ children, data, location }) => {
  const {
    site,
    logo,
    background,
    flowVu,
    footer,
    tevaLogo,
    respiratory
  } = data;
  return (
    <div>
      <Helmet
        title={site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' }
        ]}
      />
      <Wrapper
        id="outer-container"
        style={{
          margin: '0 auto',
          padding: 0
        }}>
        <Header logoSizes={logo.sizes} />
        <div style={{ position: 'relative', top: '25.1vw' }}>
          <HeroImg
            backgroundImgSizes={background.sizes}
            flowVuSizes={flowVu.sizes}
            location={location.pathname}
          />
          {children()}
          <Footer
            footer={footer.sizes}
            tevaLogo={tevaLogo.sizes}
            respiratory={respiratory.sizes}
          />
        </div>
      </Wrapper>
    </div>
  );
};

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
    tevaLogo: imageSharp(id: { regex: "/shared/teva_logo.png/" }) {
      sizes(maxWidth: 125) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    respiratory: imageSharp(id: { regex: "/shared/respiratory.png/" }) {
      sizes(maxWidth: 234) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
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
