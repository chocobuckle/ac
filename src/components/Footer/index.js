import React from 'react';
import GatsbyImage from 'gatsby-image';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImgAndContactTeam = styled.div`
  position: relative;
  width: 100%;
`;

const Img = styled(GatsbyImage)``;

const Text = styled.p`
  color: #fff;
  color: rgb(255, 255, 255);
  font-family: Myriad Pro;
  position: absolute;
  width: 80%;
`;

const ContactTeam = Text.extend`
  bottom: 2.1vw;
  font-size: 3.5vw;
  font-weight: bold;
  text-align: center;
  margin: 0 auto;
  width: 100%;
`;

const SmallPrintWrapper = styled.div`
  background: #010915;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 0.6em;
`;

const SmallPrint = Text.extend`
  color: #fff;
  font-size: 2.7vw;
  line-height: 2em;
  margin-bottom: 0;
  position: relative;
  text-align: center;
`;

function Footer({ footerSizes }) {
  return (
    <Wrapper>
      <ImgAndContactTeam>
        <Img alt="footer" imgStyle={{ marginBottom: 0 }} sizes={footerSizes} />
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
    </Wrapper>
  );
}

export default Footer;
