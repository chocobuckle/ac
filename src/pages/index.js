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

  @media screen and (min-width: 800px) {
    font-size: 1em;
  }
`;

const InhalerFigure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
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

  @media screen and (min-width: 996px) {
    margin-top: -538px;
  }
`;

const MacbookImg = styled(Img)`
  margin-top: 26.5vw;
  width: 86vw;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 996px) {
    margin-top: 263.94px;
    width: 856.547px;
  }
`;

const LoadingSpinner = styled.img`
  width: 30%;
  position: absolute;
  z-index: 1;
  left: 35%;
  bottom: 25%;
`;

const VideoButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const VideoButton = styled.button`
  background: linear-gradient(90deg, rgba(0, 72, 153, 1) 15.05%, rgba(0, 127, 200, 1) 100%);
  margin: 0 1.5vw;
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

  @media screen and (min-width: 625px) {
    margin: 0 1.5vw;
    padding: 1.5vw;

    span {
      font-size: 3vw;
      top: 0.15vw;
    }
  }

  @media screen and (min-width: 996px) {
    margin: 0 14.94px;
    padding: 14.94px;

    span {
      font-size: 29.88px;
      top: 1.494px;
    }
  }
`;

const PlayButtonImg = styled(Img)`
  width: 3.5vw;
  margin-right: 1vw;

  @media screen and (min-width: 625px) {
    width: 2.25vw;
    margin-right: 0.9vw;
  }

  @media screen and (min-width: 996px) {
    width: 22.4062px;
    margin-right: 8.964px;
  }
`;

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

  @media screen and (min-width: 750px) {
    width: 65%;
  }

  @media screen and (min-width: 900px) {
    width: 70%;
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

  @media screen and (min-width: 996px) {
    mrgin-top: 12.948px;
  }
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
    font-size: 6.75vw;
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

  @media screen and (min-width: 750px) {
    width: 35%;
  }

  @media screen and (min-width: 900px) {
    width: 30%;
  }
`;
const EasyInstructionsImgAndTextWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

const EasyInstructions1Img = styled(Img)`
  margin-left: 4vw;
  margin-right: 2.75vw;
  max-width: 117px;
  width: 22vw;

  @media screen and (min-width: 600px) {
    margin-left: 0;
    margin-right: 2vw;
    width: 8vw;
  }

  @media screen and (min-width: 900px) {
    margin-right: 1.5vw;
    width: 6.5vw;
  }

  @media screen and (min-width: 996px) {
    margin-right: 13px;
    width: 3.75em;
  }
`;

const EasyInstructions2Img = styled(Img)`
  max-width: 178px;
  margin-left: 2.75vw;
  width: 29vw;

  @media screen and (min-width: 600px) {
    width: 11.75vw;
    margin-left: 0;
    margin-top: 1.5em;
  }

  @media screen and (min-width: 900px) {
    width: 10vw;
    margin-left: -7px;
    margin-top: 1.5em;
  }

  @media screen and (min-width: 996px) {
    width: 5.5em;
    margin-left: -19px;
    margin-top: 1.5em;
  }
`;

const EasyInstructions3Img = styled(Img)`
  margin-right: 4.75vw;
  margin-top: 2vw;
  width: 38vw;

  @media screen and (min-width: 600px) {
    margin-right: 2vw;
    width: 16.5vw;
    margin-top: -4%;
  }

  @media screen and (min-width: 900px) {
    width: 13.25vw;
    margin-top: -4%;
  }

  @media screen and (min-width: 996px) {
    width: 131.969px;
    margin-top: -5.96875px;
    margin-right: 17.43px;
  }
`;

const FlowVuLogoImg = styled(Img)`
  width: 26vw;

  @media screen and (min-width: 600px) {
    width: 5em;
    margin-left: 0.5em;
  }
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

  @media screen and (min-width: 600px) {
    padding: 0.75em 0;
  }

  @media screen and (min-width: 996px) {
    width: 797.594px;
  }
`;

const WhiteBannerChildImg = styled(Img)`
  max-width: 135px;
  width: 20vw;

  @media screen and (min-width: 600px) {
    width: 11vw;
  }

  @media screen and (min-width: 996px) {
    width: 109.547px;
  }
`;

const SixInhalers = ContentWrapper.extend`
  @media screen and (min-width: 800px) {
    h2 {
      font-size: 2.35rem;
    }
    h2 + h3 {
      font-size: 2rem;
    }
  }
`;
const SixInhalerImgsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`;
const InhalerAndBucketBorderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5vw;
  width: 100%;
  @media screen and (min-width: 800px) {
    width: 48%;
    margin: 0 auto;
  }
`;
const InhalerAndBucketBorderWrapper2 = InhalerAndBucketBorderWrapper.extend`
  margin-bottom: 0;
`;
const ThreeInhalers = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 90%;
  position: relative;
  left: 0.4em;

  figcaption {
    margin-top: 1.75vw;

    @media screen and (min-width: 996px) {
      margin-top: 17.43px;
    }
  }
`;

const ThreeInhalers2 = ThreeInhalers.extend`
  left: 1.1em;
  @media screen and (min-width: 800px) {
    margin-top: -0.2em;
  }
`;

const Inhaler1Img = styled(Img)`
  max-width: 138px;
  width: 20vw;

  @media screen and (min-width: 800px) {
    width: 10vw;
  }

  @media screen and (min-width: 996px) {
    width: 99.5938px;
  }
`;

const Inhaler2Img = styled(Img)`
  max-width: 173px;
  width: 24.5vw;

  @media screen and (min-width: 800px) {
    width: 12.25vw;
  }

  @media screen and (min-width: 996px) {
    width: 122px;
  }
`;

const Inhaler3Img = styled(Img)`
  max-width: 117px;
  width: 16.5vw;

  @media screen and (min-width: 800px) {
    width: 8.25vw;
  }

  @media screen and (min-width: 996px) {
    width: 82.1562px;
  }
`;

const Inhaler4Img = styled(Img)`
  max-width: 120px;
  width: 16.5vw;

  @media screen and (min-width: 800px) {
    width: 8.25vw;
  }

  @media screen and (min-width: 996px) {
    width: 82.1562px;
  }
`;
const Inhaler5Img = styled(Img)`
  max-width: 178px;
  width: 23vw;

  @media screen and (min-width: 800px) {
    width: 11.5vw;
  }

  @media screen and (min-width: 996px) {
    width: 114.531px;
  }
`;

const Inhaler6Img = styled(Img)`
  max-width: 222px;
  width: 28.5vw;

  @media screen and (min-width: 800px) {
    width: 14.25vw;
  }

  @media screen and (min-width: 996px) {
    width: 141.922px;
  }
`;

const BucketBorder = styled.div`
  border: 0.4vw solid #007fc8;
  border-top: none;
  height: 7vw;
  margin-top: -10.25vw;
  width: 100%;

  @media screen and (min-width: 500px) {
    height: 7.5vw;
  }

  @media screen and (min-width: 600px) {
    height: 8.25vw;
  }

  @media screen and (min-width: 700px) {
    height: 8.5vw;
  }

  @media screen and (min-width: 800px) {
    height: 9vw;
    border: 0.3vw solid #007fc8;
    border-top: none;
  }

  @media screen and (min-width: 996px) {
    height: 92.125px;
    border: 2.98438px solid #007fc8;
    border-top: none;
    margin-top: -102.09px;
  }
`;

const AdultOrChild = H3.extend`
  color: #007fc8;
  font-size: 4.4vw;
  font-weight: 600;
  text-align: center;
  margin-top: 0.5em;
  margin-bottom: 0;

  @media screen and (min-width: 800px) {
    font-size: 1.5em;
  }
`;
const Footnotes = ContentWrapper.extend`
  text-align: left;
  padding: 0 0;
  @media screen and (min-width: 996px) {
    padding: 0 0;
  }
`;

const FootnotesHeaderText = Text.extend`
  @media screen and (min-width: 600px) {
    font-size: 1.05rem;
  }
`;

const FootnoteSmallPrint = Text.extend`
  font-weight: 400;
  font-size: 2.6vw;
  margin-bottom: 0.3em;
  line-height: 1.45em;

  @media screen and (min-width: 600px) {
    font-size: 0.65rem;
    line-height: 1.7em;
  }
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
    const { data, location } = this.props;
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
            <MacbookImg
              sizes={macbook.sizes}
            />
            {(!videoHasLoaded) && (
              <LoadingSpinner location={location.pathname} src={spinner} alt="loading spinner" />
            )}
            <VideoPlayer
              activeVideoURL={activeVideoURL}
              handleVideoLoading={this.handleVideoLoading}
            />
            <VideoButtonWrapper>
              <VideoButton onClick={() => this.handleVideoSelection('https://vimeo.com/281972542')}>
                <PlayButtonImg sizes={playButton.sizes} />
                <span>VIDEO 1</span>
              </VideoButton>
              <VideoButton onClick={() => this.handleVideoSelection('https://vimeo.com/281972758')}>
                <PlayButtonImg sizes={playButton.sizes} />
                <span>VIDEO 2</span>
              </VideoButton>
              <VideoButton onClick={() => this.handleVideoSelection('https://vimeo.com/281972704')}>
                <PlayButtonImg sizes={playButton.sizes} />
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
                <Img sizes={inhalingRed.sizes} style={{ marginBottom: 0 }} />
                <InhalerImgCaption>Inhaler alone</InhalerImgCaption>
              </InhalingRedImgWrapper>
              <InhalingWithLogoImgWrapper>
                <Img sizes={inhalingWithLogo.sizes} />
                <InhalerImgCaption style={{ marginLeft: '7%', marginBottom: 0 }}>
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
            <div>
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
              <EasyInstructionsImgAndTextWrapper
                style={{ alignItems: 'center', marginTop: '1.2em' }}>
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
                style={{ alignItems: 'flex-start', justifyContent: 'center', marginTop: '2.42em' }}>
                <Text>
                  The <span style={{ fontWeight: '600' }}>Flow-Vu</span> Inhalation Indicator moves
                  as you inhale and helps provide visual assurance of correct use and medication
                  delivery.
                </Text>
                <FlowVuLogoImg sizes={flowVuLogo.sizes} />
              </EasyInstructionsImgAndTextWrapper>
            </div>
          </EasyInstructionsWrapper>
        </InhalerTips>
        <BubblesAndBanner>
          <Img sizes={bubblesBG.sizes} />
          <WhiteBanner>
            <WhiteBannerChildImgFlexWrapper>
              <WhiteBannerChildImg
                sizes={dishwasherSafe.sizes}
                style={{
                  postion: 'relative',
                  top: '0.25em'
                }}
              />
              <WhiteBannerChildImg sizes={replace12Months.sizes} />
              <WhiteBannerChildImg sizes={bpaFree.sizes} />
            </WhiteBannerChildImgFlexWrapper>
          </WhiteBanner>
        </BubblesAndBanner>
        <SixInhalers>
          <H2 style={{ color: '#007FC8', marginTop: '0.1em', marginBottom: 0 }}>
            <em>AeroChamber Plus Flow-Vu</em>
          </H2>
          <H3 style={{ color: '#858585' }}>Anti Static Valved Holding Chamber (VHC)</H3>
          <SixInhalerImgsWrapper>
            <InhalerAndBucketBorderWrapper>
              <ThreeInhalers>
                <InhalerFigure>
                  <Inhaler1Img sizes={inhaler1.sizes} />
                  <Figcaption style={{ right: '15.5%' }}>
                    Small<br />Mask
                  </Figcaption>
                </InhalerFigure>
                <InhalerFigure>
                  <Inhaler2Img sizes={inhaler2.sizes} />
                  <Figcaption style={{ right: '7.5%' }}>
                    Medium<br />Mask
                  </Figcaption>
                </InhalerFigure>
                <InhalerFigure>
                  <Inhaler3Img sizes={inhaler3.sizes} />
                  <Figcaption style={{ right: '8%' }}>
                    Youth<br />Mouthpiece
                  </Figcaption>
                </InhalerFigure>
              </ThreeInhalers>
              <BucketBorder />
              <AdultOrChild>CHILD</AdultOrChild>
            </InhalerAndBucketBorderWrapper>
            <InhalerAndBucketBorderWrapper2>
              <ThreeInhalers2>
                <InhalerFigure>
                  <Inhaler4Img sizes={inhaler4.sizes} />
                  <Figcaption style={{ right: '12.75%' }}>
                    Mouthpiece
                    <br />
                    <br />
                  </Figcaption>
                </InhalerFigure>
                <InhalerFigure>
                  <Inhaler5Img sizes={inhaler5.sizes} />
                  <Figcaption style={{ right: '11.75%' }}>
                    Small<br />Mask
                  </Figcaption>
                </InhalerFigure>
                <InhalerFigure>
                  <Inhaler6Img sizes={inhaler6.sizes} />
                  <Figcaption style={{ right: '9.5%' }}>
                    Large<br />Mask
                  </Figcaption>
                </InhalerFigure>
              </ThreeInhalers2>
              <BucketBorder />
              <AdultOrChild>ADULT</AdultOrChild>
            </InhalerAndBucketBorderWrapper2>
          </SixInhalerImgsWrapper>
        </SixInhalers>
        <Footnotes>
          <FootnotesHeaderText>Children should transition to a mouthpiece around the age of 5</FootnotesHeaderText>
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
          <FootnoteSmallPrint style={{ marginBottom: 0 }}>
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
