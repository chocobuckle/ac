import React, { Component } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { ContentWrapper } from 'helpers/sharedStyles';

const ClickyThingWrapper = styled.div`
  position: relative;
  cursor: pointer;
  width: 0%;
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.2);
    transform-origin: 0% 100%;
  }
`;

const ClickyThingNumber = styled.p`
  color: #fff;
  font-weight: 600;
  position: absolute;
`;

const clickyThingImgStyle = {
  maxWidth: '99px',
  width: '10vw'
};

const flipHorizontal = {
  display: 'inline-block',
  transform: 'scale(-1,1)'
};

const flipVertical = {
  display: 'inline-block',
  transform: 'scale(1,-1)'
};

const flipHorizontalAndVertical = {
  display: 'inline-block',
  transform: 'scale(-1,-1)'
};

const AnimationInfo = styled.div`
  width: 69vw;
  margin: 0 auto;
`;

const RedBall = styled.div`
  align-items: center;
  background-color: #e84e1b;
  border-radius: 50%;
  display: flex;
  height: 6vw;
  justify-content: center;
  margin-right: 2vw;
  width: 6vw;
`;

const SelectedNumber = styled.p`
  && {
    color: #fff;
    margin-bottom: 0;
    position: relative;
    top: 0.325vw;
  }
`;

const AnimationInfoHeader = styled.p`
  && {
    color: #f3b106;
    font-weight: 600;
    font-style: italic;
    margin-bottom: 0;
    font-size: 3.9vw;
    position: relative;
    top: 0.4vw;
  }
`;

const RedBallAndInfoHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: -27vw auto 0;
  width: 90vw;
`;

const AnimationInfoList = styled.ul`
  border: 1vw solid #007FC8;
  border-right: 0;
  border-bottom: 0;
  border-radius: 0.4vw;
  width: 80.25vw;
  margin-left: 6vw;
  margin-top: 0.75vw;
  margin-bottom: 0;
  padding: 1.5vw;
`;

function getHeader(activeClickyThingNumber) {
  switch (activeClickyThingNumber) {
    case 1:
      return 'ComfortSeal Mask';
    case 2:
      return 'EZ Flow Exhalation Valve';
    case 3:
      return 'New Flow-Vu Inhalation Indicator';
    case 4:
      return 'FlowSignal Whistle';
    case 5:
      return 'Responsive One-Way Inspiratory Valve';
    case 6:
      return 'New Anti-Static Chamber';
    default:
      break;
  }
}

class InhalerAnimation extends Component {
  state = {
    activeClickyThingNumber: 1
  };

  handleClick = (clickyThingNumber) => {
    this.setState((prevState) => {
      if (clickyThingNumber !== prevState.activeClickyThingNumber) {
        return {
          activeClickyThingNumber: clickyThingNumber
        };
      }
    });
  };

  render() {
    const { animationClickyThing, inhalerAnimationImg } = this.props;
    const { activeClickyThingNumber } = this.state;
    return (
      <ContentWrapper>
        <Img
          sizes={inhalerAnimationImg.sizes}
          style={{ maxWidth: '933px', width: '73vw', margin: '0 auto' }}
        />
        <ClickyThingWrapper
          clickyThingNumber={1}
          onClick={() => this.handleClick(1)}
          style={{
            bottom: '28vw',
            left: '1.5vw'
          }}>
          <Img
            sizes={animationClickyThing.sizes}
            style={{
              ...clickyThingImgStyle,
              ...flipHorizontal
            }}
          />
          <ClickyThingNumber
            style={{
              left: '1.8vw',
              top: '0.8vw'
            }}>
            1
          </ClickyThingNumber>
        </ClickyThingWrapper>
        <ClickyThingWrapper
          clickyThingNumber={2}
          onClick={() => this.handleClick(2)}
          style={{
            bottom: '46vw',
            left: '34vw'
          }}>
          <Img
            sizes={animationClickyThing.sizes}
            style={{ ...clickyThingImgStyle }}
          />
          <ClickyThingNumber
            style={{
              left: '6vw',
              top: '0.8vw'
            }}>
            2
          </ClickyThingNumber>
        </ClickyThingWrapper>
        <ClickyThingWrapper
          clickyThingNumber={3}
          onClick={() => this.handleClick(3)}
          style={{
            bottom: '48.5vw',
            left: '42.5vw'
          }}>
          <Img
            sizes={animationClickyThing.sizes}
            style={{ ...clickyThingImgStyle }}
          />
          <ClickyThingNumber
            style={{
              left: '6vw',
              top: '0.8vw'
            }}>
            3
          </ClickyThingNumber>
        </ClickyThingWrapper>
        <ClickyThingWrapper
          clickyThingNumber={4}
          onClick={() => this.handleClick(4)}
          style={{
            bottom: '48.5vw',
            left: '80vw'
          }}>
          <Img
            sizes={animationClickyThing.sizes}
            style={{ ...clickyThingImgStyle }}
          />
          <ClickyThingNumber
            style={{
              left: '6vw',
              top: '0.8vw'
            }}>
            4
          </ClickyThingNumber>
        </ClickyThingWrapper>
        <ClickyThingWrapper
          clickyThingNumber={5}
          onClick={() => this.handleClick(5)}
          style={{
            bottom: '33.5vw',
            left: '65vw'
          }}>
          <Img
            sizes={animationClickyThing.sizes}
            style={{ ...clickyThingImgStyle, ...flipVertical }}
          />
          <ClickyThingNumber
            style={{
              left: '6vw',
              top: '0.8vw'
            }}>
            5
          </ClickyThingNumber>
        </ClickyThingWrapper>
        <ClickyThingWrapper
          clickyThingNumber={6}
          onClick={() => this.handleClick(6)}
          style={{
            bottom: '40.5vw',
            left: '42vw'
          }}>
          <Img
            sizes={animationClickyThing.sizes}
            style={{ ...clickyThingImgStyle, ...flipHorizontalAndVertical }}
          />
          <ClickyThingNumber
            style={{
              left: '2vw',
              top: '0.8vw'
            }}>
            6
          </ClickyThingNumber>
        </ClickyThingWrapper>
        <RedBallAndInfoHeaderWrapper>
          <RedBall>
            <SelectedNumber>{activeClickyThingNumber}</SelectedNumber>
          </RedBall>
          <AnimationInfoHeader>
            {getHeader(activeClickyThingNumber)}
          </AnimationInfoHeader>
        </RedBallAndInfoHeaderWrapper>
        <AnimationInfoList>
          TEST
        </AnimationInfoList>
      </ContentWrapper>
    );
  }
}

export default InhalerAnimation;
