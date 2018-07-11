import React from 'react';
import GatsbyImage from 'gatsby-image';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
`;

const Img = styled(GatsbyImage)`
`;

const TextWrapper = styled.div`
  margin-left: 2em;
`;

const ContactTeam = styled.p`
  color: #ffffff;
  color: rgb(255, 255, 255);
  font-family: Myriad Pro;
  font-size: 0.8rem;
  font-weight: bold;
  position: absolute;
  margin-bottom: 5em;
  bottom: 3.4em;
`;

const SmallPrint = styled.div`
  position: absolute;
  bottom: 1.5em;
  display: flex;
  justify-content: space-between;
  width: 60%;
  div p {
    margin-bottom: 0;
    color: #ffffff;
    color: rgb(255, 255, 255);
    font-family: Myriad Pro;
    font-size: 0.6rem;
  }
`;

function Footer({ footerSizes }) {
  return (
    <Wrapper>
      <Img alt="footer" sizes={footerSizes} />
      <TextWrapper>
        <ContactTeam>
          Contact the Teva team for more information on the full respiratory
          portfolio
        </ContactTeam>
        <SmallPrint>
          <div>
            <p>Teva Pharmaceuticals, Floor 1, Wing A, Building 1</p>
            <p>
              Finnabair Business & Technology Park, Dundalk, Co. Louth, Ireland
            </p>
          </div>
          <div>
            <p>privacy policy | legal</p>
            <p>Date of preparation: July 2018</p>
            <p>Job Code: IE/AEC/18/0001e</p>
          </div>
        </SmallPrint>
      </TextWrapper>
    </Wrapper>
  );
}

export default Footer;
