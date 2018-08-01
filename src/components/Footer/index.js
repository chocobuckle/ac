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
`;

const SmallPrintAndTevaLogoWrapper = styled.div`
  align-items: center;
  background: #010915;
  display: flex;
  flex-direction: column;
  padding-bottom: 0.55em;

  @media screen and (min-width: 600px) {
    flex-direction: row;
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

const TevaLogo = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2.5vw;

  @media screen and (min-width: 600px) {
    margin-bottom: 0;
    order: 3;
    width: 30%;
  }
`;

const AddressAndContactDetails = styled.div`
  text-align: center;
  @media screen and (min-width: 600px) {
    order: 1;
    width: 50%;
    text-align: left;
  }
`;

const PrivacyPolicy = styled.div`
  text-align: center;
  @media screen and (min-width: 600px) {
    order: 2;
    width: 20%;
    text-align: left;
  }
`;

const Wrapper1 = styled.div``;

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
        <TevaLogo>
          <Img sizes={tevaLogo} alt="Teva logo" style={{ width: '12.9341vw', marginRight: '0.75vw' }} />
          <Img sizes={respiratory} alt="Respiratory" style={{ width: '24.4vw' }} />
        </TevaLogo>
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
