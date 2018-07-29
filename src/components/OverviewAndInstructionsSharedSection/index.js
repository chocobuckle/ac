import React, { Component } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { ContentWrapper } from 'helpers/sharedStyles';
import VideoPlayer from 'components/VideoPlayer';
import spinner from 'images/shared/spinner.gif';

// const OverviewAndInstructionsSharedSection = ContentWrapper.extend`
//   ${'' /* background: linear-gradient(
//     180deg,
//     rgba(20, 255, 255, 0) 2.12%,
//     rgba(20, 255, 255, 0.04) 3.83%,
//     rgba(20, 255, 255, 1) 49.44%
//   ); */} text-align: center;
// `;

const H1Wrapper = styled.div`
  margin: 2vw auto;
  text-align: center;
`;

const H1 = styled.h1`
  font-size: 6vw;
  margin-bottom: 1vw;
`;

const Spinner = styled.img`
  width: 30vw;
  position: absolute;
  z-index: 1;
  left: 30.75vw;
  bottom: 8vw;
`;

const BPAImgAndTextWrapper = styled.div`
  width: 42vw;
`;

const BPAImgAndTextAndMacbookImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BPAImgStyle = {
  maxWidth: '749px',
  marginBottom: '2vw'
};

const macbookImgStyle = {
  maxWidth: '886px',
  marginBottom: '2vw',
  width: '70vw'
};

const Gradient = styled.div`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 2.12%,
    rgba(255, 255, 255, 0.04) 3.83%,
    rgba(255, 255, 255, 1) 43.44%
  );
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
      macbook
    } = this.props;
    const { videoHasLoaded } = this.state;
    return (
      <div>
        <Gradient>
          <ContentWrapper>
            <H1Wrapper style={{ marginTop: '25vw' }}>
              <H1>{headerFirstLine}</H1>
              <H1>{headerSecondLine}</H1>
            </H1Wrapper>
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
