import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { ContentWrapper } from 'helpers/sharedStyles';

const H1 = styled.h1`
  font-size: 7vw;
  font-weight: 600;
  margin-bottom: 0;
`;

const H2 = H1.withComponent('h2').extend`
  font-size: 5.3vw;
`;

const LightBlueSpan = styled.span`
  color: #007fc8;
`;

const FlexColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.p`
  margin-bottom: 1vw;
`;

const Address = styled.div`
  margin: 4vw 0;
  p {
    margin-bottom: 0;
  }
`;

function Contact({ data }) {
  return (
    <ContentWrapper style={{ paddingBottom: 0 }}>
      <H1 style={{ marginBottom: '4vw' }}>Contact Us</H1>
      <FlexColumnWrapper>
        <H2>Commercial Division</H2>
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
          <LightBlueSpan>Tel:</LightBlueSpan> 051-321740
        </Text>
        <Text>
          <LightBlueSpan>Fax:</LightBlueSpan> 042 - 9351516
        </Text>
        <Text style={{ marginBottom: 0 }}>
          <LightBlueSpan>Email:</LightBlueSpan> info@teva.ie
        </Text>

        <H2 style={{ margin: '4vw 0' }}>Retails Representatives</H2>

        <LightBlueSpan>Phil Osborn (Group accounts)</LightBlueSpan>
        <Text>087 050 8779 - phil.osborn@teva.ie</Text>
        <LightBlueSpan>Avril Ryan (South East)</LightBlueSpan>
        <Text>087 223 4895 - avril.ryan@teva.ie</Text>
        <LightBlueSpan>Jane Clements (West)</LightBlueSpan>
        <Text>087 120 9148 - jane.clements@teva.ie</Text>
        <LightBlueSpan>Paul Moran (Midlands)</LightBlueSpan>
        <Text>087 799 2896 - paul.moran@teva.ie</Text>
        <LightBlueSpan>Sinead Finucane (South West)</LightBlueSpan>
        <Text>087 799 2858 - sinead.finucane@teva.ie</Text>
        <LightBlueSpan>Collin Botha (North East)</LightBlueSpan>
        <Text>087 668 5876 - collin.botha@teva.ie</Text>
        <Img sizes={data.map.sizes} />
      </FlexColumnWrapper>
    </ContentWrapper>
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
