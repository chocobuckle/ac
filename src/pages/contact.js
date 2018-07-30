import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import {
  ContentWrapper,
  H1,
  H2,
  LightBlueSpan,
  Text,
  FlexColumnWrapper
} from 'helpers/sharedStyles';

const Address = styled.div`
  margin: 0.8em 0;
  p {
    margin-bottom: 0.08em;
  }
`;

const Gradient = styled.div`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 5%,
    rgba(255, 255, 255, 0.65) 8%,
    rgba(255, 255, 255, 0.85) 12%,
    rgba(255, 255, 255, 1) 16%
  );
  margin-top: -116.5vw;
  position: relative;
  z-index: 1;
`;

function Contact({ data }) {
  return (
    <Gradient>
      <ContentWrapper style={{ paddingBottom: 0 }}>
        <H1 style={{ marginTop: '3.75em' }}>Contact Us</H1>
        <FlexColumnWrapper>
          <H2 style={{ marginBottom: 0 }}>Commercial Division</H2>
          <H2>Co. Louth, Ireland</H2>

          <Address>
            <Text>
              <b>Teva Pharmaceuticals</b>
            </Text>
            <Text>Finnabair Business Park, Dundalk,</Text>
            <Text>Co. Louth, Ireland.</Text>
          </Address>

          <Text>
            <LightBlueSpan>Freephone:</LightBlueSpan> 1800 - 201 700
          </Text>
          <Text>
            <LightBlueSpan>Tel:</LightBlueSpan> 051 - 321740
          </Text>
          <Text>
            <LightBlueSpan>Fax:</LightBlueSpan> 042 - 9351516
          </Text>
          <Text style={{ marginBottom: 0 }}>
            <LightBlueSpan>Email:</LightBlueSpan> info@teva.ie
          </Text>

          <H2 style={{ margin: '0.75em 0' }}>Retails Representatives</H2>

          <Text>
            <LightBlueSpan>Phil Osborn (Group accounts)</LightBlueSpan>
            <br />087 050 8779 - phil.osborn@teva.ie
          </Text>
          <Text>
            <LightBlueSpan>Avril Ryan (South East)</LightBlueSpan>
            <br />087 223 4895 - avril.ryan@teva.ie
          </Text>
          <Text>
            <LightBlueSpan>Jane Clements (West)</LightBlueSpan>
            <br />087 120 9148 - jane.clements@teva.ie
          </Text>
          <Text>
            <LightBlueSpan>Paul Moran (Midlands)</LightBlueSpan>
            <br />087 799 2896 - paul.moran@teva.ie
          </Text>
          <Text>
            <LightBlueSpan>Sinead Finucane (South West)</LightBlueSpan>
            <br />087 799 2858 - sinead.finucane@teva.ie
          </Text>
          <Text style={{ marginBottom: 0 }}>
            <LightBlueSpan>Collin Botha (North East)</LightBlueSpan>
            <br />087 668 5876 - collin.botha@teva.ie
          </Text>
          <Img sizes={data.map.sizes} />
        </FlexColumnWrapper>
      </ContentWrapper>
    </Gradient>
  );
}

export const query = graphql`
  query ContactQuery {
    map: imageSharp(id: { regex: "/contact/map.png/" }) {
      sizes(maxWidth: 676) {
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

export default Contact;
