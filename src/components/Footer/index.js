import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  p {
    color: #fff;
    font-family: Myriad Pro;
    margin-bottom: 0;
    text-align: center;
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

const SmallPrintWrapper = styled.div`
  align-items: center;
  background: #010915;
  display: flex;
  flex-direction: column;
  padding-bottom: 0.55em;
`;

const SmallPrint = styled.p`
  font-size: 3.1vw;
  line-height: 1.8em;
`;

function Footer({ footerSizes }) {
  return (
    <FooterWrapper>
      <ImgAndContactTeam>
        <Img sizes={footerSizes} alt="footer" />
        <ContactTeam>
          Contact the Teva team for more information on the full respiratory
          portfolio
        </ContactTeam>
      </ImgAndContactTeam>
      <SmallPrintWrapper>
        <SmallPrint>
          Teva Pharmaceuticals, Floor 1, Wing A, Building 1
        </SmallPrint>
        <SmallPrint>
          Finnabair Business & Technology Park, Dundalk, Co. Louth, Ireland
        </SmallPrint>
        <SmallPrint>
          Freephone:&nbsp;&nbsp;&nbsp;1800&nbsp;-&nbsp;201&nbsp;700&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;Email:
          info@teva.ie&nbsp;&nbsp;&nbsp;
        </SmallPrint>
        <SmallPrint>Web: www.teva.ie</SmallPrint>
        <SmallPrint>privacy policy | legal</SmallPrint>
        <SmallPrint>Date of preparation: July 2018</SmallPrint>
        <SmallPrint>Job Code: IE/AEC/18/0001e</SmallPrint>
      </SmallPrintWrapper>
    </FooterWrapper>
  );
}

export default Footer;
