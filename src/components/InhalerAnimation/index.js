import React, { Component } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { ContentWrapper } from 'helpers/sharedStyles';

const ClickyThingWrapper = styled.div`
  position: relative;
`;

const ClickyThingNumber = styled.p`
  color: #fff;
  font-weight: 600;
  position: absolute;
  left: 6vw;
  top: 0.8vw;
`;

const clickyThingImgStyle = {
  maxWidth: '99px',
  width: '10vw'
};

class InhalerAnimation extends Component {
  state = {};

  render() {
    const { animationClickyThing, inhalerAnimationImg } = this.props;
    return (
      <ContentWrapper>
        <Img
          sizes={inhalerAnimationImg.sizes}
          style={{ maxWidth: '933px', width: '73vw', margin: '0 auto' }}
        />
        <ClickyThingWrapper>
          <Img
            sizes={animationClickyThing.sizes}
            style={{ ...clickyThingImgStyle }}
          />
          <ClickyThingNumber>1</ClickyThingNumber>
        </ClickyThingWrapper>
        <ClickyThingWrapper>
          <Img
            sizes={animationClickyThing.sizes}
            style={{ ...clickyThingImgStyle }}
          />
          <ClickyThingNumber>2</ClickyThingNumber>
        </ClickyThingWrapper>
        <ClickyThingWrapper>
          <Img
            sizes={animationClickyThing.sizes}
            style={{ ...clickyThingImgStyle }}
          />
          <ClickyThingNumber>3</ClickyThingNumber>
        </ClickyThingWrapper>
        <ClickyThingWrapper>
          <Img
            sizes={animationClickyThing.sizes}
            style={{ ...clickyThingImgStyle }}
          />
          <ClickyThingNumber>4</ClickyThingNumber>
        </ClickyThingWrapper>
        <ClickyThingWrapper>
          <Img
            sizes={animationClickyThing.sizes}
            style={{ ...clickyThingImgStyle }}
          />
          <ClickyThingNumber>5</ClickyThingNumber>
        </ClickyThingWrapper>
        <ClickyThingWrapper>
          <Img
            sizes={animationClickyThing.sizes}
            style={{ ...clickyThingImgStyle }}
          />
          <ClickyThingNumber>6</ClickyThingNumber>
        </ClickyThingWrapper>
      </ContentWrapper>
    );
  }
}

export default InhalerAnimation;
