import React, { Component } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { ContentWrapper, ScalingText, ScalingH2 } from 'helpers/sharedStyles';

const ClickyThingWrapper = styled.div`
  cursor: pointer;
  max-width: 99px;
  position: relative;
  transition: all 0.2s ease-in-out;
  width: 10vw;
  :hover {
    transform: scale(1.2);
    transform-origin: left bottom;
  }
`;

const ClickyThing = styled(Img)``;

const YellowBall = styled.div`
  align-items: center;
  background-color: #f3b106;
  border-radius: 50%;
  display: flex;
  height: 5vw;
  justify-content: center;
  margin-right: 2vw;
  width: 5vw;
`;

const SelectedNumber = styled.p`
  color: #fff;
  margin-bottom: 0;
  position: relative;
  font-weight: 600;
  top: 0.205vw;
  font-size: 3.2vw;
`;

const AnimationInfoHeader = ScalingH2.extend`
  color: #f3b106;
  font-weight: 600;
  font-style: italic;
  margin-bottom: 0;
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
      inhalerAnimationImg
    } = this.props;
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
          <ClickyThing sizes={clickyThing1.sizes} />
        </ClickyThingWrapper>
        <ClickyThingWrapper
          clickyThingNumber={2}
          onClick={() => this.handleClick(2)}
          style={{
            bottom: '46vw',
            left: '34vw'
          }}>
          <ClickyThing sizes={clickyThing2.sizes} />
        </ClickyThingWrapper>
        <ClickyThingWrapper
          clickyThingNumber={3}
          onClick={() => this.handleClick(3)}
          style={{
            bottom: '48.5vw',
            left: '42.5vw'
          }}>
          <ClickyThing sizes={clickyThing3.sizes} />
        </ClickyThingWrapper>
        <ClickyThingWrapper
          clickyThingNumber={4}
          onClick={() => this.handleClick(4)}
          style={{
            bottom: '48.5vw',
            left: '80vw'
          }}>
          <ClickyThing sizes={clickyThing4.sizes} />
        </ClickyThingWrapper>
        <ClickyThingWrapper
          clickyThingNumber={5}
          onClick={() => this.handleClick(5)}
          style={{
            bottom: '33.5vw',
            left: '65vw'
          }}>
          <ClickyThing sizes={clickyThing5.sizes} />
        </ClickyThingWrapper>
        <ClickyThingWrapper
          clickyThingNumber={6}
          onClick={() => this.handleClick(6)}
          style={{
            bottom: '40.5vw',
            left: '42vw'
          }}>
          <ClickyThing sizes={clickyThing6.sizes} />
        </ClickyThingWrapper>
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
