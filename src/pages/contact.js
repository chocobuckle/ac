import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import {
  ContentWrapper,
  H1,
  H2,
  LightBlueSpan,
  Text
} from 'helpers/sharedStyles';

const LocalContentWrapper = ContentWrapper.extend`
  margin-top: -116.5vw;
  position: relative;
  text-align: center;
  z-index: 1;

  @media screen and (min-width: 996px) {
    display: flex;
    margin-top: -1160.34px;
    text-align: left;
  }
`;

const LocalH1 = H1.extend`
  margin-top: 29vw;

  @media screen and (min-width: 600px) {
    font-size: 46.5px;
  }

  @media screen and (min-width: 996px) {
    margin-top: 288.84px;
  }
`;

const LocalH2 = H2.extend`
  @media screen and (min-width: 600px) {
    font-size: 31.8px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 996px) {
    flex-shrink: 0;
    z-index: 1;
  }
`;

const LocalText = Text.extend`
  @media screen and (min-width: 600px) {
    font-size: 23.4px;
  }
`;

const Address = styled.div`
  margin: 0.8em 0;
  p {
    margin-bottom: 0.08em;
  }
`;

const MapImg = styled(Img)`
  margin: 0 auto;
  @media screen and (min-width: 600px) {
    width: 546px;
  }

  @media screen and (min-width: 996px) {
    width: 750px;
    position: absolute;
    top: 295px;
    right: 100px;
  }
`;

function Contact({ data }) {
  return (
    <LocalContentWrapper style={{ paddingBottom: 0 }}>
      <TextWrapper>
        <LocalH1>Contact Us</LocalH1>
        <LocalH2 style={{ marginBottom: 0 }}>Commercial Division</LocalH2>
        <LocalH2>Co. Louth, Ireland</LocalH2>

        <Address>
          <LocalText>
            <b>Teva Pharmaceuticals</b>
          </LocalText>
          <LocalText>Finnabair Business Park, Dundalk,</LocalText>
          <LocalText>Co. Louth, Ireland.</LocalText>
        </Address>

        <LocalText>
          <LightBlueSpan>Freephone:</LightBlueSpan> 1800 - 201 700
        </LocalText>
        <LocalText>
          <LightBlueSpan>Tel:</LightBlueSpan> 051 - 321740
        </LocalText>
        <LocalText>
          <LightBlueSpan>Fax:</LightBlueSpan> 042 - 9351516
        </LocalText>
        <LocalText style={{ marginBottom: 0 }}>
          <LightBlueSpan>Email:</LightBlueSpan> info@teva.ie
        </LocalText>

        <LocalH2 style={{ margin: '0.75em 0' }}>Retails Representatives</LocalH2>

        <LocalText>
          <LightBlueSpan>Phil Osborn (Group accounts)</LightBlueSpan>
          <br />087 050 8779 - phil.osborn@teva.ie
        </LocalText>
        <LocalText>
          <LightBlueSpan>Avril Ryan (South East)</LightBlueSpan>
          <br />087 223 4895 - avril.ryan@teva.ie
        </LocalText>
        <LocalText>
          <LightBlueSpan>Jane Clements (West)</LightBlueSpan>
          <br />087 120 9148 - jane.clements@teva.ie
        </LocalText>
        <LocalText>
          <LightBlueSpan>Paul Moran (Midlands)</LightBlueSpan>
          <br />087 799 2896 - paul.moran@teva.ie
        </LocalText>
        <LocalText>
          <LightBlueSpan>Sinead Finucane (South West)</LightBlueSpan>
          <br />087 799 2858 - sinead.finucane@teva.ie
        </LocalText>
        <LocalText style={{ marginBottom: 0 }}>
          <LightBlueSpan>Collin Botha (North East)</LightBlueSpan>
          <br />087 668 5876 - collin.botha@teva.ie
        </LocalText>
      </TextWrapper>
      <MapImg sizes={data.map.sizes} />
    </LocalContentWrapper>
  );
}

export const query = graphql`
  query ContactQuery {
    map: imageSharp(id: { regex: "/contact/map.png/" }) {
      sizes(maxWidth: 750) {
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
