import React, { Component } from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { ContentWrapper, H2, H3, Text } from 'helpers/sharedStyles';
import VideoPlayer from 'components/VideoPlayer';
import spinner from 'images/shared/spinner.gif';

const IndexWrapper = styled.div`
  span {
    color: #007fc8;
  }
`;

const Figcaption = styled.figcaption`
  text-align: center;
  font-weight: 100;
  font-size: 3.25vw;
  position: relative;
`;

const Macbook = styled.div`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 2.12%,
    rgba(255, 255, 255, 0.04) 3.83%,
    rgba(255, 255, 255, 1) 49.44%
  );
  margin-top: -54vw;
  position: relative;
  z-index: 1;
`;

const spinnerStyle = {
  width: '30vw',
  position: 'absolute',
  zIndex: 1,
  left: '35vw',
  bottom: '21.5vw'
};

const VideoButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const VideoButton = styled.button`
  background: linear-gradient(90deg, rgba(0, 72, 153, 1) 15.05%, rgba(0, 127, 200, 1) 100%);
  ${'' /* font-size: 4vw; */} margin: 0 1.5vw;
  padding: 1.5vw 1.75vw;
  display: flex;
  align-items: center;

  :hover {
    cursor: pointer;
  }

  span {
    color: #fff;
    font-size: 3.5vw;
    position: relative;
    top: 0.25vw;
    margin-bottom: 0;
  }
`;

const playButtonStyle = {
  width: '3.5vw',
  marginRight: '1vw'
};

const InhalerTips = ContentWrapper.extend`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 600px) {
    flex-direction: row;
  }
`;
const BetterControlTextAndTorsoImgWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 600px) {
    width: 60%;

    h2 {
      font-size: 125%;
    }

    h3 {
      font-size: 110%;
    }

    p {
      font-size: 0.75em;
    }
  }
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
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const InhalingRedImgWrapper = styled.div`
  margin-top: 1.3vw;
  width: 41.1%;
`;
const InhalingWithLogoImgWrapper = styled.div`
  width: 51.4%;

  @media screen and (min-width: 600px) {
    margin-top: 0.75%;
  }
`;
const InhalerImgCaption = Text.extend`
  margin-top: 0.75vw;

  @media screen and (min-width: 600px) {
    && {
      margin-top: 1.5%;
      font-size: 0.65em;
    }
  }
`;

const EasyInstructionsWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  h2 {
    color: #007fc8;
    font-weight: 400;
    margin: 0.5em auto;
  }

  p {
    margin-bottom: 0;
    width: 50%;
  }

  @media screen and (min-width: 600px) {
    width: 40%;
    margin-left: 4%;

    h2 {
      margin: 0 0 0.5em;
      align-self: flex-start;
      font-size: 170%;
    }

    p {
      font-size: 0.75em;
    }
  }
`;
const EasyInstructionsImgAndTextWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

const EasyInstructions1Img = styled(Img)`
  margin-left: 4vw;
  margin-right: 2vw;
  max-width: 117px;
  width: 22vw;

  @media screen and (min-width: 600px) {
    margin-left: 0;
    width: 3em;
  }
`;

const EasyInstructions2Img = styled(Img)`
  max-width: 178px;
  margin-left: 3vw;
  width: 32.5vw;

  @media screen and (min-width: 600px) {
    width: 4.5em;
    margin-left: 0;
    margin-top: 1.5em;
  }
`;

const EasyInstructions3Img = styled(Img)`
  margin-right: 2.5vw;
  margin-top: 2vw;
  width: 40vw;

  @media screen and (min-width: 600px) {
    width: 6.5em;
    margin-top: -4%;
  }
`;

const FlowVuLogoImg = styled(Img)`
  width: 26vw;
`;

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
  width: 80vw;
`;
const whiteBannerChildImgStyle = {
  maxWidth: '135px',
  width: '20vw'
};

const SixInhalers = ContentWrapper.extend``;
const SixInhalerImgsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`;
const InhalerAndBucketBorderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const ThreeInhalers = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 90%;
  figcaption {
    margin-top: 1.75vw;
  }
`;

const inhaler1ImgStyle = { maxWidth: '138px', width: '20vw' };
const inhaler2ImgStyle = { maxWidth: '173px', width: '24.5vw' };
const inhaler3ImgStyle = { maxWidth: '117px', width: '16.5vw' };
const inhaler4ImgStyle = { maxWidth: '120px', width: '16.5vw' };
const inhaler5ImgStyle = { maxWidth: '178px', width: '23vw' };
const inhaler6ImgStyle = { maxWidth: '222px', width: '28.5vw' };

const BucketBorder = styled.div`
  border: 0.5vw solid #007fc8;
  border-top: none;
  height: 7vw;
  margin-top: -10.25vw;
`;
const AdultOrChild = H3.extend`
  color: #007fc8;
  font-size: 4.4vw;
  font-weight: 600;
  text-align: center;
  margin-top: 0.5em;
`;
const Footnotes = ContentWrapper.extend`
  text-align: left;
  padding: 0 0;
`;

const FootnoteSmallPrint = Text.extend`
  font-weight: 400;
  font-size: 2.6vw;
  margin-bottom: 0.3em;
  line-height: 1.45em;
`;

class IndexPage extends Component {
  state = {
    activeVideoURL: 'https://vimeo.com/281972542',
    videoHasLoaded: false
  };

  handleVideoSelection = (selectedVideoURL) => {
    this.setState((prevState) => {
      if (selectedVideoURL !== prevState.activeVideoURL) {
        return {
          activeVideoURL: selectedVideoURL,
          videoHasLoaded: false
        };
      }
    });
  };

  handleVideoLoading = () => {
    this.setState({
      videoHasLoaded: true
    });
  };

  render() {
    const { data } = this.props;
    const {
      macbook,
      playButton,
      inhalingRed,
      inhalingWithLogo,
      easyInstructions1,
      easyInstructions2,
      easyInstructions3,
      flowVuLogo,
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
    const { activeVideoURL, videoHasLoaded } = this.state;
    return (
      <IndexWrapper>
        <Macbook>
          <ContentWrapper>
            <Img
              sizes={macbook.sizes}
              style={{
                marginTop: '26.5vw',
                width: '86vw',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            />
            {!videoHasLoaded && (
              <img src={spinner} alt="loading spinner" style={{ ...spinnerStyle }} />
            )}
            <VideoPlayer
              activeVideoURL={activeVideoURL}
              handleVideoLoading={this.handleVideoLoading}
            />
            <VideoButtonWrapper>
              <VideoButton onClick={() => this.handleVideoSelection('https://vimeo.com/281972542')}>
                <Img sizes={playButton.sizes} style={{ ...playButtonStyle }} />
                <span>VIDEO 1</span>
              </VideoButton>
              <VideoButton onClick={() => this.handleVideoSelection('https://vimeo.com/281972758')}>
                <Img sizes={playButton.sizes} style={{ ...playButtonStyle }} />
                <span>VIDEO 2</span>
              </VideoButton>
              <VideoButton onClick={() => this.handleVideoSelection('https://vimeo.com/281972704')}>
                <Img sizes={playButton.sizes} style={{ ...playButtonStyle }} />
                <span>VIDEO 3</span>
              </VideoButton>
            </VideoButtonWrapper>
          </ContentWrapper>
        </Macbook>
        <InhalerTips>
          <BetterControlTextAndTorsoImgWrapper>
            <H2>
              People who use a valved holding chamber with their inhaler have better control.
              <sup>1</sup>
            </H2>
            <TorsoWrapper>
              <TorsoTextWrapper>
                <H3 style={{ color: '#007fc8' }}>
                  Did you
                  <em>
                    <b> know?</b>
                  </em>
                </H3>
                <Text>
                  Guidelines recommend chambers for children and adults.
                  <sup>2</sup>
                </Text>
                <Text>
                  The majority of adults do not use their inhalers properly.
                  <sup>3</sup> This is why doctors recommend using an{' '}
                  <span>AeroChamber Plus Flow-Vu</span> Chamber with your inhaler.
                </Text>
              </TorsoTextWrapper>
              <TorsoTextWrapper>
                <H3 style={{ color: '#007fc8' }}>
                  <em>
                    <b>Ensure </b>
                  </em>your inhaler
                  <em>
                    <b> medicine </b>
                  </em>is delivered where it is needed
                </H3>
                <Text>
                  Inhalers can be challenging because the medicine comes out very quickly and can
                  end up in your mouth and throat. This can lead to side effects such as sore throat
                  and oral infections.
                </Text>
                <Text>
                  Using an <span>AeroChamber Plus Flow-Vu Chamber</span> with your inhaler helps
                  ensure the medicine is delivered to your lungs.
                </Text>
              </TorsoTextWrapper>
            </TorsoWrapper>
            <TorsoImgWrapper>
              <InhalingRedImgWrapper>
                <Img sizes={inhalingRed.sizes} />
                <InhalerImgCaption>Inhaler alone</InhalerImgCaption>
              </InhalingRedImgWrapper>
              <InhalingWithLogoImgWrapper>
                <Img sizes={inhalingWithLogo.sizes} />
                <InhalerImgCaption style={{ marginLeft: '7%' }}>
                  Inhaler with{' '}
                  <span style={{ color: '#007fc8', fontWeight: 'bold' }}>AeroChamber Plus </span>Brand
                  of Chamber
                </InhalerImgCaption>
              </InhalingWithLogoImgWrapper>
            </TorsoImgWrapper>
          </BetterControlTextAndTorsoImgWrapper>
          <EasyInstructionsWrapper>
            <H2>
              <em>
                <b>Easy </b>
              </em>as 1-2-3
            </H2>
            <EasyInstructionsImgAndTextWrapper>
              <EasyInstructions1Img sizes={easyInstructions1.sizes} />
              <Text>Shake inhaler and remove cap.</Text>
            </EasyInstructionsImgAndTextWrapper>
            <EasyInstructionsImgAndTextWrapper
              style={{
                position: 'relative',
                marginTop: '-0.9em'
              }}>
              <Text>Insert inhaler into chamber.</Text>
              <EasyInstructions2Img sizes={easyInstructions2.sizes} />
            </EasyInstructionsImgAndTextWrapper>
            <EasyInstructionsImgAndTextWrapper style={{ alignItems: 'center', marginTop: '0.5em' }}>
              <EasyInstructions3Img sizes={easyInstructions3.sizes} />
              <Text style={{ marginBottom: 0 }}>
                Press inhaler and inhale slowly and deeply, holding your breath for 5-10 seconds.
                <span
                  style={{
                    display: 'block',
                    fontStyle: 'italic',
                    fontWeight: 'bold',
                    margin: '0.125em auto'
                  }}>
                  OR
                </span>Press inhaler and breathe in and out through the chamber for 2-3 breaths.
              </Text>
            </EasyInstructionsImgAndTextWrapper>
            <EasyInstructionsImgAndTextWrapper
              style={{ alignItems: 'flex-start', marginTop: '2em' }}>
              <Text>
                The <span style={{ fontWeight: '600' }}>Flow-Vu</span> Inhalation Indicator moves as
                you inhale and helps provide visual assurance of correct use and medication
                delivery.
              </Text>
              <FlowVuLogoImg sizes={flowVuLogo.sizes} />
            </EasyInstructionsImgAndTextWrapper>
          </EasyInstructionsWrapper>
        </InhalerTips>
        <BubblesAndBanner>
          <Img sizes={bubblesBG.sizes} />
          <WhiteBanner>
            <WhiteBannerChildImgFlexWrapper>
              <Img
                sizes={dishwasherSafe.sizes}
                style={{
                  ...whiteBannerChildImgStyle,
                  postion: 'relative',
                  top: '1vw'
                }}
              />
              <Img sizes={replace12Months.sizes} style={{ ...whiteBannerChildImgStyle }} />
              <Img sizes={bpaFree.sizes} style={{ ...whiteBannerChildImgStyle }} />
            </WhiteBannerChildImgFlexWrapper>
          </WhiteBanner>
        </BubblesAndBanner>
        <SixInhalers>
          <H2 style={{ color: '#007FC8', marginTop: '1em', marginBottom: 0 }}>
            <em>AeroChamber Plus Flow-Vu</em>
          </H2>
          <H3 style={{ color: '#858585' }}>Anti Static Valved Holding Chamber (VHC)</H3>
          <SixInhalerImgsWrapper>
            <InhalerAndBucketBorderWrapper style={{ marginBottom: '5vw' }}>
              <ThreeInhalers style={{ position: 'relative', left: '1vw' }}>
                <figure>
                  <Img sizes={inhaler1.sizes} style={{ ...inhaler1ImgStyle }} />
                  <Figcaption style={{ right: '15.5%' }}>
                    Small<br />Mask
                  </Figcaption>
                </figure>
                <figure>
                  <Img sizes={inhaler2.sizes} style={{ ...inhaler2ImgStyle }} />
                  <Figcaption style={{ right: '7.5%' }}>
                    Medium<br />Mask
                  </Figcaption>
                </figure>
                <figure>
                  <Img sizes={inhaler3.sizes} style={{ ...inhaler3ImgStyle }} />
                  <Figcaption style={{ right: '11%' }}>
                    Youth<br />Mouthpiece
                  </Figcaption>
                </figure>
              </ThreeInhalers>
              <BucketBorder />
              <AdultOrChild>CHILD</AdultOrChild>
            </InhalerAndBucketBorderWrapper>
            <InhalerAndBucketBorderWrapper>
              <ThreeInhalers style={{ position: 'relative', left: '5vw' }}>
                <figure>
                  <Img sizes={inhaler4.sizes} style={{ ...inhaler4ImgStyle }} />
                  <Figcaption style={{ right: '12.75%' }}>
                    Mouthpiece
                    <br />
                    <br />
                  </Figcaption>
                </figure>
                <figure>
                  <Img sizes={inhaler5.sizes} style={{ ...inhaler5ImgStyle }} />
                  <Figcaption style={{ right: '11.75%' }}>
                    Small<br />Mask
                  </Figcaption>
                </figure>
                <figure>
                  <Img sizes={inhaler6.sizes} style={{ ...inhaler6ImgStyle }} />
                  <Figcaption style={{ right: '9.5%' }}>
                    Large<br />Mask
                  </Figcaption>
                </figure>
              </ThreeInhalers>
              <BucketBorder />
              <AdultOrChild>ADULT</AdultOrChild>
            </InhalerAndBucketBorderWrapper>
          </SixInhalerImgsWrapper>
        </SixInhalers>
        <Footnotes>
          <Text>Children should transition to a mouthpiece around the age of 5</Text>
          <FootnoteSmallPrint>
            <b>1.</b> McIvor et al. Optimizing the Delivery of Inhaled Medication for Respiratory
            Patients: The Role of Valved Holding Chambers.
          </FootnoteSmallPrint>
          <FootnoteSmallPrint>
            <b>2.</b> Global Initiative for Asthma. Global strategy for asthma management and
            prevention 2011. Available at:<br />
            <a
              href="http://ginasthma.org/2018-gina-report-global-strategy-for-asthma-management-and-prevention/"
              target="_blank"
              rel="noopener noreferrer">
              http://ginasthma.org/2018-gina-report-global-strategy-for-asthma-management-and-prevention/
            </a>
          </FootnoteSmallPrint>
          <FootnoteSmallPrint>
            <b>3.</b> Plaza et al. Medical Personnel and Patient Skill in the Use of Metered Dose
            Inhalers: A Multicentric Study.
          </FootnoteSmallPrint>
        </Footnotes>
      </IndexWrapper>
    );
  }
}

export const query = graphql`
  query IndexQuery {
    playButton: imageSharp(id: { regex: "/home/play_button.png/" }) {
      sizes(maxWidth: 31) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
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
    inhalingWithLogo: imageSharp(id: { regex: "/home/inhaling_with_logo.png/" }) {
      sizes(maxWidth: 350) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    easyInstructions1: imageSharp(id: { regex: "/home/easy_instructions_1.png/" }) {
      sizes(maxWidth: 117) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    easyInstructions2: imageSharp(id: { regex: "/home/easy_instructions_2.png/" }) {
      sizes(maxWidth: 178) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    easyInstructions3: imageSharp(id: { regex: "/home/easy_instructions_3.png/" }) {
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
