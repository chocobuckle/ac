import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Text } from 'helpers/sharedStyles';

const FooterWrapper = styled.div`
  position: relative;
  p {
    font-family: Myriad Pro, sans-serif;
    margin-bottom: 0;
  }
`;

const ImgAndContactTeam = styled.div`
  position: relative;
`;

const ContactTeam = styled.p`
  bottom: 2.6vw;
  color: #fff;
  font-size: 3.6vw;
  font-weight: bold;
  line-height: 1.5em;
  position: absolute;
  text-align: center;

  @media screen and (min-width: 600px) {
    font-size: 2.2vw;
    padding-left: 3vw;
    bottom: 5.8em;
    text-align: left;
  }

  @media screen and (min-width: 996px) {
    font-size: 21.912px;
    padding-left: 29.88px;
    bottom: 127.09px;
  }
`;

const SmallPrintAndTevaLogoWrapper = styled.div`
  align-items: center;
  background: #010915;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding-bottom: 0.55em;

  @media screen and (min-width: 600px) {
    background: none;
    flex-direction: row;
    padding: 0 0 0 3vw;
    justify-content: space-between;
    align-items: flex-start;
    position: absolute;
    bottom: 1.75vw;
    width: 100%;
  }

  @media screen and (min-width: 996px) {
    padding: 0 0 0 29.88px;
    bottom: 17.43px;
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

const SmallPrint = Text.extend`
  font-size: 3.1vw;
  line-height: 1.8em;

  @media screen and (min-width: 600px) {
    font-size: 1.5vw;
  }

  @media screen and (min-width: 996px) {
    font-size: 14.94px;
  }
`;

const TevaLogo1Wrapper = styled.div`
  @media screen and (max-width: 599px) {
    display: flex;
    justify-content: center;
    margin-bottom: 2.5vw;
  }
  @media screen and (min-width: 600px) {
    display: none;
  }
`;

const TevaLogo2Wrapper = styled.div`
  display: none;
  @media screen and (min-width: 600px) {
    display: flex;
    justify-content: center;
    margin-bottom: 0;
    order: 3;
  }
`;

const TevaLogo1Img = styled(Img)`
  margin-right: 0.75vw;
  width: 12.9341vw;
`;
const Respiratory1Img = styled(Img)`
  width: 24.4vw;
`;
const TevaLogo2Img = styled(Img)`
  width: 8.43vw;
  margin-right: 0.75vw;

  @media screen and (min-width: 996px) {
    margin-right: 7.47px;
    width: 83.9531px;
  }
`;
const Respiratory2Img = styled(Img)`
  width: 15.825vw;

  @media screen and (min-width: 996px) {
    width: 157.609px;
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
        <Img sizes={footer} alt="footer" imgStyle={{ marginBottom: 0 }} />
        <ContactTeam>
          Contact the Teva team for more information on the full respiratory
          portfolio
        </ContactTeam>
      </ImgAndContactTeam>
      <SmallPrintAndTevaLogoWrapper>
        <TevaLogo1Wrapper>
          <TevaLogo1Img sizes={tevaLogo} alt="Teva logo" />
          <Respiratory1Img sizes={respiratory} alt="Respiratory" />
        </TevaLogo1Wrapper>
        <TevaLogo2Wrapper>
          <TevaLogo2Img sizes={tevaLogo} alt="Teva logo" />
          <Respiratory2Img sizes={respiratory} alt="Respiratory" />
        </TevaLogo2Wrapper>
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
