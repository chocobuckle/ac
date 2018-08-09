import React, { Component } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { ContentWrapper, ScalingText } from 'helpers/sharedStyles';

const ClickyThingWrapper = styled.div`
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.2);
    transform-origin: 0% 100%;
  }
`;

const ClickyThingNumber = ScalingText.extend`
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

const YellowBall = styled.div`
  align-items: center;
  background-color: #f3b106;
  border-radius: 50%;
  display: flex;
  height: 6vw;
  justify-content: center;
  margin-right: 2vw;
  width: 6vw;
`;

const SelectedNumber = ScalingText.extend`
  color: #fff;
  margin-bottom: 0;
  position: relative;
  font-weight: 600;
  top: 0.325vw;
`;

const AnimationInfoHeader = ScalingText.extend`
  color: #f3b106;
  font-weight: 600;
  font-style: italic;
  margin-bottom: 0;
  font-size: 3.9vw;
  position: relative;
  top: 0.4vw;
`;

const YellowBallAndInfoHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: -27vw auto 0;
  width: 90vw;
`;

const AnimationInfoList = styled.ul`
  border: 0.25em solid #007fc8;
  border-right: 0;
  border-bottom: 0;
  border-radius: 0.25em 0 0 0;
  width: 80%;
  margin-left: 6vw;
  margin-top: 0.75vw;
  margin-bottom: 0;
  padding: 1.5vw 1.5vw 0;

  li {
    margin-left: 4.25vw;
    margin-bottom: 1vw;
  }

  li:last-child {
    margin-bottom: 0;
  }
`;

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
      <ContentWrapper style={{ position: 'relative', zIndex: 2 }}>
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
        <YellowBallAndInfoHeaderWrapper>
          <YellowBall>
            <SelectedNumber>{activeClickyThingNumber}</SelectedNumber>
          </YellowBall>
          <AnimationInfoHeader>
            {activeClickyThingNumber === 1 && 'ComfortSeal Mask'}
            {activeClickyThingNumber === 2 && 'EZ Flow Exhalation Valve'}
            {activeClickyThingNumber === 3 &&
              'New Flow-Vu Inhalation Indicator'}
            {activeClickyThingNumber === 4 && 'FlowSignal Whistle'}
            {activeClickyThingNumber === 5 &&
              'Responsive One-Way Inspiratory Valve'}
            {activeClickyThingNumber === 6 && 'New Anti-Static Chamber'}
          </AnimationInfoHeader>
        </YellowBallAndInfoHeaderWrapper>
        <AnimationInfoList>
          {activeClickyThingNumber === 1 && (
            <div>
              <li>Flexible, anatomically designed</li>
              <li>Specifically designed paediatric options</li>
            </div>
          )}
          {activeClickyThingNumber === 2 && (
            <div>
              <li>Minimize re-breathing</li>
              <li>Directs exhaled flow away from the patients face</li>
            </div>
          )}
          {activeClickyThingNumber === 3 && (
            <div>
              <li>
                Opens with minimal inspiratory effort, closes on exhalation
              </li>
              <li>
                Retains medication inside the chamber for the next breath
                suspension time
              </li>
            </div>
          )}
          {activeClickyThingNumber === 4 && (
            <div>
              <li>Sounds when the patient is inhaling too rapidly</li>
              <li>Encourages patients to breathe slowly</li>
            </div>
          )}
          {activeClickyThingNumber === 5 && (
            <div>
              <li>
                Opens with minimal inspiratory effort, closes on exhalation
              </li>
              <li>
                Retains medication inside the chamber for the next breath
                suspension time
              </li>
            </div>
          )}
          {activeClickyThingNumber === 6 && (
            <div>
              <li>Can be used out of package without pre-treatment</li>
              <li>Maximizes aerosol suspension time </li>
            </div>
          )}
        </AnimationInfoList>
      </ContentWrapper>
    );
  }
}

export default InhalerAnimation;
