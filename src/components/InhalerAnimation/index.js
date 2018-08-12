import React, { Component } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { ContentWrapper, ScalingH2, ScalingText } from 'helpers/sharedStyles';

const LocalWrapper = ContentWrapper.extend`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  margin: 0 auto;

  @media screen and (min-width: 996px) {
    flex-direction: row;
    align-items: ${({ activeClickyThingNumber }) => {
      if (activeClickyThingNumber === 3 || activeClickyThingNumber === 5) {
        console.log('FLEX-START!!!');
        return `flex-start`;
      }
      console.log('CENTER!!!');
      return `center`;
    }};
    justify-content: space-around;
    margin-bottom: -145px;
    padding: 0 0;
    width: 100%;
  }
`;

const InteractiveInhalerContainer = styled.div`
  width: 73vw;
  margin: 0 auto 34vw;
  position: relative;

  @media screen and (min-width: 600px) {
    width: 438px;
    margin: 0 auto 204px;
  }

  @media screen and (min-width: 996px) {
    margin: 0 0 204px 15px;
  }
`;

const ClickyThingImgWrapper = styled.div`
  cursor: pointer;
  position: absolute;
  transition: all 0.2s ease-in-out;
  width: 11vw;
  :hover {
    transform: scale(1.2);
  }

  @media screen and (min-width: 600px) {
    width: 60.0156px;
  }
`;

const ClickyThingImgWrapper1 = ClickyThingImgWrapper.extend`
  bottom: 50%;
  left: -11.5%;
  transform-origin: right bottom;
  @media screen and (min-width: 996px) {
    left: -5.5%;
  }
`;
const ClickyThingImgWrapper2 = ClickyThingImgWrapper.extend`
  bottom: 76%;
  left: 34.5%;
  transform-origin: left bottom;
`;
const ClickyThingImgWrapper3 = ClickyThingImgWrapper.extend`
  bottom: 67.5%;
  left: 45%;
  transform-origin: left bottom;
`;
const ClickyThingImgWrapper4 = ClickyThingImgWrapper.extend`
  bottom: 56.5%;
  left: 96.5%;
  transform-origin: left bottom;
`;
const ClickyThingImgWrapper5 = ClickyThingImgWrapper.extend`
  bottom: 12%;
  left: 74%;
  transform-origin: left top;
`;
const ClickyThingImgWrapper6 = ClickyThingImgWrapper.extend`
  bottom: 15%;
  left: 44%;
  transform-origin: right top;
`;

const YellowBallAndInfoHeaderAndAnimationListWrapper = styled.div`
  margin: 0 auto;
  width: 70%;

  @media screen and (min-width: 600px) {
    width: 382px;
  }

  @media screen and (min-width: 996px) {
    margin: 0 0;
  }
`;

const YellowBallAndInfoHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: -27vw auto 0.3em;
  width: 120%;

  @media screen and (min-width: 600px) {
    margin: -185px auto 0.3em;
  }

  @media screen and (min-width: 996px) {
    ${({ activeClickyThingNumber }) => {
      if (activeClickyThingNumber === 3 || activeClickyThingNumber === 5) {
        return `margin-top: 0`;
      }
      if (activeClickyThingNumber === 2) {
        return `margin-top: -194px`;
      }
    }};
  }
`;

const YellowBall = styled(Img)`
  width: 6.25vw;
  margin-right: 1.75vw;

  @media screen and (min-width: 450px) {
    width: 6vw;
    margin-right: 1.5vw;
  }

  @media screen and (min-width: 600px) {
    width: 36px;
    margin-right: 9px;
  }
`;

const InfoHeader = ScalingH2.extend`
  color: #f3b106;
  font-weight: 600;
  font-style: italic;
  line-height: 1em;
  margin-bottom: 0;
  position: relative;
  top: 0.4vw;

  @media screen and (min-width: 600px) {
    top: 2.4px;
  }

  @media screen and (min-width: 996px) {
    font-size: 40px;
    width: 360px;
  }
`;

const AnimationInfoList = ScalingText.withComponent('ul').extend`
  border: 0.25em solid #007fc8;
  border-right: 0;
  border-bottom: 0;
  border-radius: 0.25em 0 0 0;
  padding: 0.35em 0 0 0;
  margin: 0 0 0 2em;

  li {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    margin-left: 2em;
    margin-bottom: 0.25em;
  }

  li:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 500px) {
    li {
      margin-left: 1.9em;
    }
  }

  @media screen and (min-width: 900px) {
    li {
      margin-left: 1.8em;
    }
  }

  @media screen and (min-width: 996px) {
    li {
      margin-left: 1.7em;
    }
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
      ball1,
      ball2,
      ball3,
      ball4,
      ball5,
      ball6,
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
      <LocalWrapper activeClickyThingNumber={activeClickyThingNumber}>
        <InteractiveInhalerContainer>
          <Img sizes={interactiveInhaler.sizes} />
          <ClickyThingImgWrapper1 clickyThingNumber={1} onClick={() => this.handleClick(1)}>
            <Img sizes={clickyThing1.sizes} />
          </ClickyThingImgWrapper1>
          <ClickyThingImgWrapper2 clickyThingNumber={2} onClick={() => this.handleClick(2)}>
            <Img sizes={clickyThing2.sizes} />
          </ClickyThingImgWrapper2>
          <ClickyThingImgWrapper3 clickyThingNumber={3} onClick={() => this.handleClick(3)}>
            <Img sizes={clickyThing3.sizes} />
          </ClickyThingImgWrapper3>
          <ClickyThingImgWrapper4 clickyThingNumber={4} onClick={() => this.handleClick(4)}>
            <Img sizes={clickyThing4.sizes} />
          </ClickyThingImgWrapper4>
          <ClickyThingImgWrapper5 clickyThingNumber={5} onClick={() => this.handleClick(5)}>
            <Img sizes={clickyThing5.sizes} />
          </ClickyThingImgWrapper5>
          <ClickyThingImgWrapper6 clickyThingNumber={6} onClick={() => this.handleClick(6)}>
            <Img sizes={clickyThing6.sizes} />
          </ClickyThingImgWrapper6>
        </InteractiveInhalerContainer>
        <YellowBallAndInfoHeaderAndAnimationListWrapper>
          <YellowBallAndInfoHeaderWrapper activeClickyThingNumber={activeClickyThingNumber}>
            {activeClickyThingNumber === 1 && <YellowBall sizes={ball1.sizes} />}
            {activeClickyThingNumber === 2 && <YellowBall sizes={ball2.sizes} />}
            {activeClickyThingNumber === 3 && <YellowBall sizes={ball3.sizes} />}
            {activeClickyThingNumber === 4 && <YellowBall sizes={ball4.sizes} />}
            {activeClickyThingNumber === 5 && <YellowBall sizes={ball5.sizes} />}
            {activeClickyThingNumber === 6 && <YellowBall sizes={ball6.sizes} />}
            <InfoHeader>
              {activeClickyThingNumber === 1 && 'ComfortSeal Mask'}
              {activeClickyThingNumber === 2 && 'EZ Flow Exhalation Valve'}
              {activeClickyThingNumber === 3 && 'New Flow-Vu Inhalation Indicator'}
              {activeClickyThingNumber === 4 && 'FlowSignal Whistle'}
              {activeClickyThingNumber === 5 && 'Responsive One-Way Inspiratory Valve'}
              {activeClickyThingNumber === 6 && 'New Anti-Static Chamber'}
            </InfoHeader>
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
        </YellowBallAndInfoHeaderAndAnimationListWrapper>
      </LocalWrapper>
    );
  }
}

export default InhalerAnimation;
