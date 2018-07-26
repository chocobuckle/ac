import React, { Component } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { ContentWrapper } from 'helpers/sharedStyles';

const ClickyThingWrapper = styled.div`
  position: relative;
  cursor: pointer;
  width: 0%;
  transition: all .2s ease-in-out;
  :hover {
    transform: scale(1.2);
    transform-origin: bottom right;
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
    return (
      <ContentWrapper style={{ marginBottom: '-28.75vw' }}>
        <Img
          sizes={inhalerAnimationImg.sizes}
          style={{ maxWidth: '933px', width: '73vw', margin: '0 auto' }}
        />
        <ClickyThingWrapper
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
      </ContentWrapper>
    );
  }
}

export default InhalerAnimation;
