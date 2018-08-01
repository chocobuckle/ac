import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Text } from 'helpers/sharedStyles';

const FooterWrapper = styled.div`
  p {
    color: #fff;
    font-family: Myriad Pro, sans-serif;
    margin-bottom: 0;
  }
`;

const ImgAndContactTeam = styled.div`
  position: relative;
`;

const ContactTeam = styled.p`
  bottom: 2.6vw;
  font-size: 3.6vw;
  font-weight: bold;
  line-height: 1.5em;
  position: absolute;

  @media screen and (min-width: 600px) {
    font-size: 2.4vw;
  }
`;

const SmallPrintAndTevaLogoWrapper = styled.div`
  align-items: center;
  background: #010915;
  display: flex;
  flex-direction: column;
  padding-bottom: 0.55em;

  @media screen and (min-width: 600px) {
    flex-direction: row;
    padding: 0 3vw;
    justify-content: space-between;
    align-items: center
    padding-bottom: 0.75em;
  }
`;

const SmallPrint = Text.extend`
  font-size: 3.1vw;
  line-height: 1.8em;

  @media screen and (min-width: 600px) {
    font-size: 2.2vw;
    line-height: 1.8em;
  }
`;

const TevaLogo1 = styled.div`
  @media screen and (max-width: 599px) {
    display: flex;
    justify-content: center;
    margin-bottom: 2.5vw;
  }
  @media screen and (min-width: 600px) {
    display: none;
  }
`;

const TevaLogo2 = styled.div`
  display: none;
  @media screen and (min-width: 600px) {
    display: flex;
    justify-content: center;
    margin-bottom: 0;
    order: 3;
  }
`;

const AddressAndContactDetails = styled.div`
  text-align: center;
  @media screen and (min-width: 600px) {
    order: 1;
    width: 50%;
    text-align: left;

    p {
      font-size: 1.5vw;
    }
  }
`;

const PrivacyPolicy = styled.div`
  text-align: center;
  @media screen and (min-width: 600px) {
    order: 2;
    width: 20%;
    text-align: left;

    p {
      font-size: 1.5vw;
    }
  }
`;

const Wrapper1 = styled.div`
  @media screen and (min-width: 600px) {
    margin-bottom: 0.75em;
  }
`;

const Wrapper2 = styled.div``;

function Footer({ footer, tevaLogo, respiratory }) {
  return (
    <FooterWrapper>
      <ImgAndContactTeam>
        <Img sizes={footer} alt="footer" />
        <ContactTeam>
          Contact the Teva team for more information on the full respiratory
          portfolio
        </ContactTeam>
      </ImgAndContactTeam>
      <SmallPrintAndTevaLogoWrapper>
        <TevaLogo1>
          <Img sizes={tevaLogo} alt="Teva logo" style={{ width: '12.9341vw', marginRight: '0.75vw' }} />
          <Img sizes={respiratory} alt="Respiratory" style={{ width: '24.4vw' }} />
        </TevaLogo1>
        <TevaLogo2>
          <Img sizes={tevaLogo} alt="Teva logo" style={{ width: '7.525vw', marginRight: '0.75vw' }} />
          <Img sizes={respiratory} alt="Respiratory" style={{ width: '14.1vw' }} />
        </TevaLogo2>
        <AddressAndContactDetails>
          <Wrapper1>
            <SmallPrint>
              Teva Pharmaceuticals, Floor 1, Wing A, Building 1
            </SmallPrint>
            <SmallPrint>
              Finnabair Business & Technology Park, Dundalk, Co. Louth, Ireland
            </SmallPrint>
          </Wrapper1>
          <Wrapper2>
            <SmallPrint>
              Freephone:&nbsp;&nbsp;&nbsp;1800&nbsp;-&nbsp;201&nbsp;700&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;Email:
              info@teva.ie&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;Web: www.teva.ie
            </SmallPrint>
          </Wrapper2>
        </AddressAndContactDetails>
        <PrivacyPolicy>
          <Wrapper1>
            <SmallPrint>privacy policy | legal</SmallPrint>
            <SmallPrint>Date of preparation: July 2018</SmallPrint>
          </Wrapper1>
          <Wrapper2>
            <SmallPrint>Job Code: IE/AEC/18/0001e</SmallPrint>
          </Wrapper2>
        </PrivacyPolicy>
      </SmallPrintAndTevaLogoWrapper>
    </FooterWrapper>
  );
}

export default Footer;
