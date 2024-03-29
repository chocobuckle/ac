import React, { Component } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { ContentWrapper, H2, H5 } from 'helpers/sharedStyles';
import VideoPlayer from 'components/VideoPlayer';
import spinner from 'images/shared/spinner.gif';

const OverviewAndInstructionsSharedSectionWrapper = styled.div`
  margin-top: -55.5vw;
  position: relative;
  z-index: 2;

  p {
    font-size: 3.15vw;
    line-height: 1.225em;
  }

  @media screen and (min-width: 360px) {
    p {
      font-size: 3vw;
      line-height: 1.25em;
    }
  }

  @media screen and (min-width: 420px) {
    p {
      font-size: 2.95vw;
      line-height: 1.3em;
    }
  }

  @media screen and (min-width: 500px) {
    p {
      font-size: 2.85vw;
      line-height: 1.25em;
    }
  }

  @media screen and (min-width: 550px) {
    p {
      font-size: 2.75vw;
      line-height: 1.3em;
    }
  }

  @media screen and (min-width: 600px) {
    p {
      font-size: 2.5vw;
      line-height: 1.35em;
    }
  }

  @media screen and (min-width: 700px) {
    p {
      font-size: 2.25vw;
      line-height: 1.4em;
    }
  }

  @media screen and (min-width: 800px) {
    p {
      font-size: 2vw;
    }
  }

  @media screen and (min-width: 996px) {
    margin-top: -552.78px;

    p {
      font-size: 19.92px;
      line-height: 1.5em;
    }
  }
`;

const H2Wrapper = styled.div`
  margin: 21.75vw auto 1em;
  text-align: center;

  @media screen and (min-width: 996px) {
    margin: 216.63px auto 1em;
  }
`;

const LocalH2 = H2.extend`
  @media screen and (min-width: 996px) {
    font-size: 52.788px;
  }
`;

const TextWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  @media screen and (min-width: 600px) {
    width: 90%;
  }
`;

const BPAImgAndTextAndMacbookImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 600px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const MacbookImgAndVideoAndSpinnerWrapper = styled.div`
  @media screen and (min-width: 600px) {
    order: 2;
    margin: 0 auto;
  }
`;

const MacBookImg = styled(Img)`
  max-width: 886px;
  margin-bottom: 2vw;
  width: 70vw;

  @media screen and (min-width: 996px) {
    margin-bottom: 19.92px;
    width: 697.188px;
  }
`;

const VideoAndSpinnerWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const Spinner = styled.img`
  width: 32.8%;
  position: absolute;
  z-index: 1;
  left: 33.6%;
  bottom: 134%;
`;

const BPAImgAndTextWrapper = styled.div`
  width: 31vw;
  text-align: center;

  @media screen and (min-width: 600px) {
    order: 1;
    width: 15%;
    position: absolute;
  }

  @media screen and (min-width: 996px) {
    width: 149.391px;
  }
`;

const BPAImg = styled(Img)`
  max-width: 749px;
  margin-bottom: 2vw;
  width: 30vw;

  @media screen and (min-width: 600px) {
    margin-bottom: 1vw;
    width: 100%;
  }

  @media screen and (min-width: 996px) {
    margin-bottom: 9.96px;
  }
`;

const LocalH5 = H5.extend`
  @media screen and (min-width: 600px) {
    font-size: 1.2vw;
  }

  @media screen and (min-width: 996px) {
    font-size: 11.952px;
  }
`;

class OverviewAndInstructionsSharedSection extends Component {
  state = {
    videoHasLoaded: false
  };

  handleVideoLoading = () => {
    this.setState({
      videoHasLoaded: true
    });
  };

  render() {
    const {
      bpaAndDishwasherSafe,
      headerFirstLine,
      headerSecondLine,
      subHeaderText,
      macbook
    } = this.props;
    const { videoHasLoaded } = this.state;
    return (
      <OverviewAndInstructionsSharedSectionWrapper>
        <ContentWrapper>
          <H2Wrapper>
            <LocalH2 style={{ marginBottom: '0.25em' }}>{headerFirstLine}</LocalH2>
            <LocalH2>{headerSecondLine}</LocalH2>
          </H2Wrapper>
          <TextWrapper
            style={{ textAlign: 'center' }}
            dangerouslySetInnerHTML={{ __html: subHeaderText }}
          />
        </ContentWrapper>
        <ContentWrapper style={{ paddingTop: '0.5em', paddingBottom: 0 }}>
          <BPAImgAndTextAndMacbookImgWrapper>
            <MacbookImgAndVideoAndSpinnerWrapper>
              <MacBookImg sizes={macbook.sizes} />
              <VideoAndSpinnerWrapper>
                {!videoHasLoaded && <Spinner src={spinner} alt="loading spinner" />}
                <VideoPlayer handleVideoLoading={this.handleVideoLoading} />
              </VideoAndSpinnerWrapper>
            </MacbookImgAndVideoAndSpinnerWrapper>
            <BPAImgAndTextWrapper>
              <BPAImg sizes={bpaAndDishwasherSafe.sizes} />
              <LocalH5
                style={{
                  color: '#007fc8',
                  fontWeight: 400,
                  marginBottom: 0
                }}>
                AeroChamber Plus® Flow-Vu® is dishwasher safe on the top rack at temperatures up to
                158°F (70°C).
              </LocalH5>
            </BPAImgAndTextWrapper>
          </BPAImgAndTextAndMacbookImgWrapper>
        </ContentWrapper>
      </OverviewAndInstructionsSharedSectionWrapper>
    );
  }
}

export default OverviewAndInstructionsSharedSection;
