import React, { Component } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { ContentWrapper, ScalingH2 } from 'helpers/sharedStyles';

const InteractiveInhalerImg = styled(Img)`
  width: 73vw;
  margin: 0 auto 34vw;

  @media screen and (min-width: 600px) {
    width: 438px;
  }
`;

const ClickThingImgContainer = styled.div`
  margin: 0 auto;
  width: 73vw;
`;

const ClickyThingImgWrapper = styled.div`
  cursor: pointer;
  max-width: 100px;
  position: absolute;
  transition: all 0.2s ease-in-out;
  width: 10vw;
  :hover {
    transform: scale(1.2);
  }

  @media screen and (min-width: 600px) {
    width: 60.0156px;
  }
`;

const ClickyThingImgWrapper1 = ClickyThingImgWrapper.extend`
  bottom: 65%;
  left: 5%;
  margin: 0 auto;
  transform-origin: right bottom;

  ${'' /* @media screen and (min-width: 600px) {
    bottom: 168px;
    left: 9px;
  } */}
`;
const ClickyThingImgWrapper2 = ClickyThingImgWrapper.extend`
  ${'' /* bottom: 45.5vw;
  left: 34.2vw;
  transform-origin: left bottom;

  @media screen and (min-width: 600px) {
    bottom: 273px;
    left: 205.2px;
  } */}
`;
const ClickyThingImgWrapper3 = ClickyThingImgWrapper.extend`
  ${'' /* bottom: 47.5vw;
  left: 42vw;
  transform-origin: left bottom;

  @media screen and (min-width: 600px) {
    bottom: 285px;
    left: 252px;
  } */}
`;
const ClickyThingImgWrapper4 = ClickyThingImgWrapper.extend`
  ${'' /* bottom: 48vw;
  left: 80vw;
  transform-origin: left bottom;

  @media screen and (min-width: 600px) {
    bottom: 288px;
    left: 480px;
  } */}
`;
const ClickyThingImgWrapper5 = ClickyThingImgWrapper.extend`
  ${'' /* bottom: 33.5vw;
  left: 65vw;
  transform-origin: left top;

  @media screen and (min-width: 600px) {
    bottom: 201px;
    left: 390px;
  } */}
`;
const ClickyThingImgWrapper6 = ClickyThingImgWrapper.extend`
  ${'' /* bottom: 39.5vw;
  left: 41.5vw;
  transform-origin: right top;

  @media screen and (min-width: 600px) {
    bottom: 237px;
    left: 249px;
  } */}
`;

const ClickyThingImg = styled(Img)``;

const YellowBall = styled.div`
  align-items: center;
  background-color: #f3b106;
  border-radius: 50%;
  display: flex;
  height: 5.5vw;
  justify-content: center;
  margin-right: 2vw;
  width: 5.5vw;
`;

const SelectedNumber = styled.p`
  color: #fff;
  margin-bottom: 0;
  position: relative;
  font-weight: 600;
  top: 0.205vw;
  font-size: 3.4vw;
`;

const AnimationInfoHeader = ScalingH2.extend`
  color: #f3b106;
  font-weight: 600;
  font-style: italic;
  margin-bottom: 0;
  position: relative;
  top: 0.25vw;
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
  margin: 0.2vw 0 0 6vw;
  padding: 1.25vw 0 0 0.25vw;

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
    const {
      clickyThing1,
      clickyThing2,
      clickyThing3,
      clickyThing4,
      clickyThing5,
      clickyThing6,
      interactiveInhaler
    } = this.props;
    const { activeClickyThingNumber } = this.state;
    return (
      <ContentWrapper style={{ position: 'relative', zIndex: 2 }}>
        <InteractiveInhalerImg sizes={interactiveInhaler.sizes} />
        <ClickThingImgContainer>
          <ClickyThingImgWrapper1 clickyThingNumber={1} onClick={() => this.handleClick(1)}>
            <ClickyThingImg sizes={clickyThing1.sizes} />
          </ClickyThingImgWrapper1>
          <ClickyThingImgWrapper2 clickyThingNumber={2} onClick={() => this.handleClick(2)}>
            <ClickyThingImg sizes={clickyThing2.sizes} />
          </ClickyThingImgWrapper2>
          <ClickyThingImgWrapper3 clickyThingNumber={3} onClick={() => this.handleClick(3)}>
            <ClickyThingImg sizes={clickyThing3.sizes} />
          </ClickyThingImgWrapper3>
          <ClickyThingImgWrapper4 clickyThingNumber={4} onClick={() => this.handleClick(4)}>
            <ClickyThingImg sizes={clickyThing4.sizes} />
          </ClickyThingImgWrapper4>
          <ClickyThingImgWrapper5 clickyThingNumber={5} onClick={() => this.handleClick(5)}>
            <ClickyThingImg sizes={clickyThing5.sizes} />
          </ClickyThingImgWrapper5>
          <ClickyThingImgWrapper6 clickyThingNumber={6} onClick={() => this.handleClick(6)}>
            <ClickyThingImg sizes={clickyThing6.sizes} />
          </ClickyThingImgWrapper6>
        </ClickThingImgContainer>
        <YellowBallAndInfoHeaderWrapper>
          <YellowBall>
            <SelectedNumber>{activeClickyThingNumber}</SelectedNumber>
          </YellowBall>
          <AnimationInfoHeader>
            {activeClickyThingNumber === 1 && 'ComfortSeal Mask'}
            {activeClickyThingNumber === 2 && 'EZ Flow Exhalation Valve'}
            {activeClickyThingNumber === 3 && 'New Flow-Vu Inhalation Indicator'}
            {activeClickyThingNumber === 4 && 'FlowSignal Whistle'}
            {activeClickyThingNumber === 5 && 'Responsive One-Way Inspiratory Valve'}
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
              <li>Opens with minimal inspiratory effort, closes on exhalation</li>
              <li>Retains medication inside the chamber for the next breath suspension time</li>
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
              <li>Opens with minimal inspiratory effort, closes on exhalation</li>
              <li>Retains medication inside the chamber for the next breath suspension time</li>
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
