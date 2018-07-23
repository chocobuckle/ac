import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { ContentWrapper } from '../helpers/sharedStyles';

const IndexWrapper = styled.div`
  line-height: 4.5vw;

  p,
  span,
  ul,
  li,
  button,
  b,
  sup,
  h1,
  h2,
  h3 {
    font-family: Myriad Pro, sans-serif;
  }

  h1,
  h2 {
    color: #004899;
  }

  p,
  span {
    font-size: 3.9vw;
    margin-bottom: 2.25vw;
  }

  span {
    color: #007fc8;
  }
`;

const H1 = styled.h1`
  font-size: 6vw;
  font-weight: bold;
  font-style: italic;
  margin-bottom: 1vw;
`;

const H2 = styled.h2`
  font-size: 5.3vw;
  margin-bottom: 3vw;
  span {
    font-size: 5.3vw;
  }
`;

const H3 = styled.h3`
  font-weight: 200;
  font-size: 4.7vw;
  margin-bottom: 1.5vw;
  color: #007fc8;
  span {
    font-weight: bold;
    font-style: italic;
    font-size: 4.7vw;
  }
`;

const Macbook = ContentWrapper.extend`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 2.12%,
    rgba(255, 255, 255, 0.04) 3.83%,
    rgba(255, 255, 255, 1) 49.44%
  );
`;
const macbookImgStyle = {};
const VideoButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const VideoButton = styled.button`
  background: linear-gradient(
    90deg,
    rgba(0, 72, 153, 1) 15.05%,
    rgba(0, 127, 200, 1) 100%
  );
  color: #fff;
  cursor: pointer;
  font-size: 4vw;
  margin: 0 1.5vw;
  padding: 2vw 1.75vw;
`;

const InhalerTipsWrapper = ContentWrapper.extend`
  display: flex;
  flex-direction: column;
`;
const BetterControlTextAndTorsoImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const TorsoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  sup {
    color: #706f6f;
  }
  span {
    color: #007fc8;
  }
`;
const TorsoTextWrapper = styled.div`
  width: 48%;
`;
const TorsoImgWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const InhalingRedImgWrapper = styled.div`
  width: 41.1%;
  margin-top: 1.3vw;
`;
const InhalingWithLogoImgWrapper = styled.div`
  width: 51.5%;
`;
const InhalerImgCaption = styled.p`
  margin-top: 0.2em;
`;
const inhalingRedImgStyle = {};
const inhalingWithLogoImgStyle = {};
// const EasyInstructionsWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
// `;
// const EasyInstructionsImgAndTextWrapper = styled.div``;
// const easyInstructions1ImgStyle = {
//   width: '50%'
// };
// const easyInstructions2ImgStyle = {
//   width: '50%'
// };
// const easyInstructions3ImgStyle = {
//   width: '50%'
// };
// const flowVuLogoImgStyle = {
//   width: '50%'
// };

const bubblesImgStyle = {};
const whiteBannerChildImgStyle = {
  maxWidth: '135px',
  width: '10vw'
};
const BubblesAndBanner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;
const WhiteBanner = styled.div`
  background: rgb(255, 255, 255, 0.5);
  left: 0;
  position: absolute;
  right: 0;
`;
const WhiteBannerChildImgFlexWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;
  padding: 0.5em 0;
  width: 60vw;
`;

const SixInhalers = ContentWrapper.extend``;
const SixInhalerImgsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`;
const InhalerAndBucketBorderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5vw;
  width: 100%;
`;
const ThreeInhalers = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  width: 90%;
`;
const inhaler1ImgStyle = { width: '20vw', maxWidth: '138px' };
const inhaler2ImgStyle = { width: '24.5vw', maxWidth: '173px'};
const inhaler3ImgStyle = { width: '16.5vw', maxWidth: '117px' };
const inhaler4ImgStyle = { width: '16.5vw', maxWidth: '120px', position: 'relative', left: '1.5vw' };
const inhaler5ImgStyle = { width: '23vw', maxWidth: '178px', position: 'relative', left: '8vw'};
const inhaler6ImgStyle = { width: '28.5vw', maxWidth: '222px', position: 'relative', left: '5.5vw' };


const BucketBorder = styled.div``;

const IndexPage = ({ data }) => {
  const {
    macbook,
    inhalingRed,
    inhalingWithLogo,
    easyInstructions1,
    easyInstructions2,
    easyInstructions3,
    easyInstructions4,
    inhaler1,
    inhaler2,
    inhaler3,
    inhaler4,
    inhaler5,
    inhaler6,
    bubblesBG,
    dishwasherSafe,
    bpaFree,
    replace12Months
  } = data;
  return (
    <IndexWrapper>
      <Macbook>
        <Img sizes={macbook.sizes} style={{ ...macbookImgStyle }} />
        <VideoButtonWrapper>
          <VideoButton>VIDEO 1</VideoButton>
          <VideoButton>VIDEO 2</VideoButton>
          <VideoButton>VIDEO 3</VideoButton>
        </VideoButtonWrapper>
      </Macbook>
      <InhalerTipsWrapper>
        <BetterControlTextAndTorsoImgWrapper>
          <H2>
            People who use a valved holding chamber with their inhaler have
            better control.<sup>1</sup>
          </H2>
          <TorsoWrapper>
            <TorsoTextWrapper>
              <H3>
                Did you <span>know?</span>
              </H3>
              <p>
                Guidelines recommend chambers for children and adults.<sup>
                  2
                </sup>
              </p>
              <p>
                The majority of adults do not use their inhalers properly.<sup>
                  3
                </sup>{' '}
                This is why doctors recommend using an{' '}
                <span>AeroChamber Plus Flow-Vu</span> Chamber with your inhaler.
              </p>
            </TorsoTextWrapper>
            <TorsoTextWrapper>
              <H3>
                <span>Ensure</span> your inhaler <span>medicine</span> is
                delivered where it is needed
              </H3>
              <p>
                Inhalers can be challenging because the medicine comes out very
                quickly and can end up in your mouth and throat. This can lead
                to side effects such as sore throat and oral infections.
              </p>
              <p>
                Using an <span>AeroChamber Plus Flow-Vu Chamber</span> with your
                inhaler helps ensure the medicine is delivered to your lungs.
              </p>
            </TorsoTextWrapper>
          </TorsoWrapper>
          <TorsoImgWrapper>
            <InhalingRedImgWrapper>
              <Img
                sizes={inhalingRed.sizes}
                style={{ ...inhalingRedImgStyle }}
              />
              <InhalerImgCaption>Inhaler alone</InhalerImgCaption>
            </InhalingRedImgWrapper>
            <InhalingWithLogoImgWrapper>
              <Img
                sizes={inhalingWithLogo.sizes}
                style={{ ...inhalingWithLogoImgStyle }}
              />
              <InhalerImgCaption style={{ marginLeft: '7%' }}>
                Inhaler with{' '}
                <span style={{ color: '#007fc8', fontWeight: 'bold' }}>
                  AeroChamber Plus{' '}
                </span>Brand of Chamber
              </InhalerImgCaption>
            </InhalingWithLogoImgWrapper>
          </TorsoImgWrapper>
        </BetterControlTextAndTorsoImgWrapper>
        {/* <EasyInstructionsWrapper>
          <H3 style={{ fontSize: '5.1vw' }}>
            <span style={{ fontSize: '5.1vw' }}>Easy</span> as 1-2-3
          </H3>
          <EasyInstructionsImgAndTextWrapper>
            <Img
              sizes={easyInstructions1.sizes}
              style={{ ...easyInstructions1ImgStyle }}
            />
            <p>Shake inhaler and remove cap.</p>
          </EasyInstructionsImgAndTextWrapper>
          <EasyInstructionsImgAndTextWrapper>
            <Img
              sizes={easyInstructions2.sizes}
              style={{ ...easyInstructions2ImgStyle }}
            />
            <p>Insert inhaler into chamber.</p>
          </EasyInstructionsImgAndTextWrapper>
          <EasyInstructionsImgAndTextWrapper>
            <Img
              sizes={easyInstructions3.sizes}
              style={{ ...easyInstructions3ImgStyle }}
            />
            <p>
              Press inhaler and inhale slowly and deeply, holding your breath
              for 5-10 seconds.
              <span
                style={{
                  display: 'block',
                  fontStyle: 'italic',
                  fontWeight: '600'
                }}>
                OR
              </span>Press inhaler and breathe in and out through the chamber
              for 2-3 breaths.
            </p>
          </EasyInstructionsImgAndTextWrapper>
          <EasyInstructionsImgAndTextWrapper>
            <Img
              sizes={flowVuLogo.sizes}
              style={{ ...flowVuLogoImgStyle }}
            />
            <p>
              The <span style={{ fontWeight: '600' }}>Flow-Vu</span> Inhalation Indicator moves as you inhale and helps
              provide visual assurance of correct use and medication delivery.
            </p>
          </EasyInstructionsImgAndTextWrapper>
        </EasyInstructionsWrapper> */}
      </InhalerTipsWrapper>
      <BubblesAndBanner>
        <Img sizes={bubblesBG.sizes} style={{ ...bubblesImgStyle }} />
        <WhiteBanner>
          <WhiteBannerChildImgFlexWrapper>
            <Img
              sizes={dishwasherSafe.sizes}
              style={{ ...whiteBannerChildImgStyle }}
            />
            <Img
              sizes={replace12Months.sizes}
              style={{ ...whiteBannerChildImgStyle }}
            />
            <Img
              sizes={bpaFree.sizes}
              style={{ ...whiteBannerChildImgStyle }}
            />
          </WhiteBannerChildImgFlexWrapper>
        </WhiteBanner>
      </BubblesAndBanner>
      <SixInhalers>
        <H1 style={{ color: '#007FC8', marginBottom: 0 }}>
          AeroChamber Plus Flow-Vu
        </H1>
        <H2 style={{ color: '#858585', fontWeight: 400 }}>
          Anti Static Valved Holding Chamber (VHC)
        </H2>
        <SixInhalerImgsWrapper>
          <InhalerAndBucketBorderWrapper>
            <ThreeInhalers>
              <Img
                sizes={inhaler1.sizes}
                style={{ ...inhaler1ImgStyle }}
              />
              <Img
                sizes={inhaler2.sizes}
                style={{ ...inhaler2ImgStyle }}
              />
              <Img
                sizes={inhaler3.sizes}
                style={{ ...inhaler3ImgStyle }}
              />
            </ThreeInhalers>
            <BucketBorder />
          </InhalerAndBucketBorderWrapper>
          <InhalerAndBucketBorderWrapper>
            <ThreeInhalers>
              <Img
                sizes={inhaler4.sizes}
                style={{ ...inhaler4ImgStyle }}
              />
              <Img
                sizes={inhaler5.sizes}
                style={{ ...inhaler5ImgStyle }}
              />
              <Img
                sizes={inhaler6.sizes}
                style={{ ...inhaler6ImgStyle }}
              />
            </ThreeInhalers>
            <BucketBorder />
          </InhalerAndBucketBorderWrapper>
        </SixInhalerImgsWrapper>
      </SixInhalers>
    </IndexWrapper>
  );
};

export const query = graphql`
  query IndexQuery {
    inhalingRed: imageSharp(id: { regex: "/home/inhaling_red.png/" }) {
      sizes(maxWidth: 350) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    inhalingWithLogo: imageSharp(
      id: { regex: "/home/inhaling_with_logo.png/" }
    ) {
      sizes(maxWidth: 350) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    easyInstructions1: imageSharp(
      id: { regex: "/home/easy_instructions_1.png/" }
    ) {
      sizes(maxWidth: 117) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    easyInstructions2: imageSharp(
      id: { regex: "/home/easy_instructions_2.png/" }
    ) {
      sizes(maxWidth: 178) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    easyInstructions3: imageSharp(
      id: { regex: "/home/easy_instructions_3.png/" }
    ) {
      sizes(maxWidth: 206) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    flowVuLogo: imageSharp(id: { regex: "/home/flow_vu_large.png/" }) {
      sizes(maxWidth: 178) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    macbook: imageSharp(id: { regex: "/shared/macbook_large.png/" }) {
      sizes(maxWidth: 960) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    bubblesBG: imageSharp(id: { regex: "/home/bubbles_crop_bg.png/" }) {
      sizes(maxWidth: 960) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    dishwasherSafe: imageSharp(id: { regex: "/home/dishwasher_safe.png/" }) {
      sizes(maxWidth: 135) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    replace12Months: imageSharp(id: { regex: "/home/replace_12_months.png/" }) {
      sizes(maxWidth: 135) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    bpaFree: imageSharp(id: { regex: "/home/bpa_free.png/" }) {
      sizes(maxWidth: 135) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    inhaler1: imageSharp(id: { regex: "/home/inhaler1.png/" }) {
      sizes(maxWidth: 138) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    inhaler2: imageSharp(id: { regex: "/home/inhaler2.png/" }) {
      sizes(maxWidth: 173) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    inhaler3: imageSharp(id: { regex: "/home/inhaler3.png/" }) {
      sizes(maxWidth: 117) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    inhaler4: imageSharp(id: { regex: "/home/inhaler4.png/" }) {
      sizes(maxWidth: 120) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    inhaler5: imageSharp(id: { regex: "/home/inhaler5.png/" }) {
      sizes(maxWidth: 178) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    inhaler6: imageSharp(id: { regex: "/home/inhaler6.png/" }) {
      sizes(maxWidth: 222) {
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

export default IndexPage;
