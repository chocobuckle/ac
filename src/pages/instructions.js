import React, { Component } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import DownloadInstructionsForUse from 'components/DownloadInstructionsForUse';
import OverviewAndInstructionsSharedSection from 'components/OverviewAndInstructionsSharedSection';
import IndicationsForUse from 'components/IndicationsForUse';

const InstructionsWrapper = styled.div`
  line-height: 4.5vw;

  p,
  span,
  ul,
  li,
  b,
  sup,
  h1,
  h2 {
    font-family: Myriad Pro, sans-serif;
  }

  h1,
  h2 {
    color: #004899;
  }

  p,
  span {
    font-size: 3.9vw;
    margin-bottom: 2.25vw;
  }

  span {
    color: #007fc8;
  }
`;

class Instructions extends Component {
  state = {};

  render() {
    const { data } = this.props;
    return (
      <InstructionsWrapper>
        <OverviewAndInstructionsSharedSection
          headerFirstLine="Learning How to Use Your"
          headerSecondLine="AeroChamber Plus® Flow-Vu®"
          subHeaderText="<p>Watch the video below for instructions on using your <span>AeroChamber Plus®</span> with a metered dose inhaler, and for cleaning directions.</p>"
          macbook={data.macbook}
          bpaAndDishwasherSafe={data.bpaAndDishwasherSafe}
        />
        <DownloadInstructionsForUse
          download={data.download}
          bear={data.bear}
          smallMask={data.smallMask}
          largeMask={data.largeMask}
        />
        <IndicationsForUse />
      </InstructionsWrapper>
    );
  }
}

export const query = graphql`
  query InstructionsQuery {
    bpaAndDishwasherSafe: imageSharp(
      id: { regex: "/overview/bpa_and_dishwasher_safe.png/" }
    ) {
      sizes(maxWidth: 749) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    macbook: imageSharp(id: { regex: "/misc/macbook_small.png/" }) {
      sizes(maxWidth: 886) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    bear: imageSharp(id: { regex: "/overview/bear.png/" }) {
      sizes(maxWidth: 1636) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    smallMask: imageSharp(
      id: { regex: "/overview/small_mask_medium_mask.png/" }
    ) {
      sizes(maxWidth: 851) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    largeMask: imageSharp(
      id: { regex: "/overview/large_mask_mouthpiece.png/" }
    ) {
      sizes(maxWidth: 851) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    download: imageSharp(id: { regex: "/overview/download.png/" }) {
      sizes(maxWidth: 238) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
  }
`;

export default Instructions;
