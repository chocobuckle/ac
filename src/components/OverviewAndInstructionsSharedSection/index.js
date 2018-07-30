import React, { Component } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { ContentWrapper, H2 } from 'helpers/sharedStyles';
import VideoPlayer from 'components/VideoPlayer';
import spinner from 'images/shared/spinner.gif';

const H2Wrapper = styled.div`
  margin: 1em auto;
  text-align: center;
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
            <H2Wrapper style={{ marginTop: '21.75vw' }}>
              <H2 style={{ marginBottom: '0.25em' }}>{headerFirstLine}</H2>
              <H2>{headerSecondLine}</H2>
            </H2Wrapper>
            <div
              style={{ textAlign: 'center' }}
              dangerouslySetInnerHTML={{ __html: subHeaderText }}
            />
          </ContentWrapper>
        </Gradient>
        <ContentWrapper>
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
              <p
                style={{
                  color: '#007fc8',
                  fontSize: '3vw',
                  lineHeight: '1.5em',
                  marginBottom: 0
                }}>
                AeroChamber Plus® Flow-Vu® is dishwasher safe on the top rack at
                temperatures up to 158°F (70°C).
              </p>
            </BPAImgAndTextWrapper>
          </BPAImgAndTextAndMacbookImgWrapper>
        </ContentWrapper>
      </div>
    );
  }
}

export default OverviewAndInstructionsSharedSection;
