import React, { Component } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { ContentWrapper, H2, H5 } from 'helpers/sharedStyles';
import VideoPlayer from 'components/VideoPlayer';
import spinner from 'images/shared/spinner.gif';

const H2Wrapper = styled.div`
  margin: 21.75vw auto 1em;
  text-align: center;

  @media screen and (min-width: 996px) {
    margin: 216.63px auto 1em;
  }
`;

const Spinner = styled.img`
  width: 30vw;
  position: absolute;
  z-index: 1;
  left: 30.75vw;
  bottom: 6vw;
`;

const BPAImgAndTextWrapper = styled.div`
  width: 31vw;
  text-align: center;
`;

const BPAImgAndTextAndMacbookImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BPAImgStyle = {
  maxWidth: '749px',
  marginBottom: '2vw',
  width: '30vw'
};

const macbookImgStyle = {
  maxWidth: '886px',
  marginBottom: '2vw',
  width: '70vw'
};

const Gradient = styled.div`
  background: ${({ pathname }) => {
    return pathname === '/overview'
      ? `linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 37%
      );`
      : `linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 54%
      );`;
  }}
  margin-top: -55.5vw;
  position: relative;
  z-index: 1;
`;

const TextWrapper = styled.div`
  @media screen and (min-width: 600px) {
    width: 80%;
    margin: 0 auto;
  }

  @media screen and (min-width: 840px) {
    width: 611.5px;
    margin: 0 auto;
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
      macbook,
      pathname
    } = this.props;
    const { videoHasLoaded } = this.state;
    return (
      <div>
        <Gradient pathname={pathname}>
          <ContentWrapper>
            <H2Wrapper>
              <H2 style={{ marginBottom: '0.25em' }}>{headerFirstLine}</H2>
              <H2>{headerSecondLine}</H2>
            </H2Wrapper>
            <TextWrapper
              style={{ textAlign: 'center' }}
              dangerouslySetInnerHTML={{ __html: subHeaderText }}
            />
          </ContentWrapper>
        </Gradient>
        <ContentWrapper style={{ paddingTop: '0.5em' }}>
          <BPAImgAndTextAndMacbookImgWrapper>
            <Img sizes={macbook.sizes} style={{ ...macbookImgStyle }} />
            <div style={{ width: '100%', position: 'relative' }}>
              {!videoHasLoaded && (
                <Spinner src={spinner} alt="loading spinner" />
              )}
              <VideoPlayer handleVideoLoading={this.handleVideoLoading} />
            </div>
            <BPAImgAndTextWrapper>
              <Img
                sizes={bpaAndDishwasherSafe.sizes}
                style={{ ...BPAImgStyle }}
              />
              <H5
                style={{
                  color: '#007fc8',
                  fontWeight: 400,
                  marginBottom: 0
                }}>
                AeroChamber Plus® Flow-Vu® is dishwasher safe on the top rack at
                temperatures up to 158°F (70°C).
              </H5>
            </BPAImgAndTextWrapper>
          </BPAImgAndTextAndMacbookImgWrapper>
        </ContentWrapper>
      </div>
    );
  }
}

export default OverviewAndInstructionsSharedSection;
