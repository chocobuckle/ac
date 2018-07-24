import React, { Component } from 'react';
import styled from 'styled-components';
import DownloadInstructionsForUse from 'components/DownloadInstructionsForUse';
import OverviewAndInstructionsSharedSection from 'components/OverviewAndInstructionsSharedSection';
import IndicationsForUse from 'components/IndicationsForUse';
import Img from 'gatsby-image';
import { ContentWrapper } from 'helpers/sharedStyles';

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

const InstructionsMenu = ContentWrapper.extend`
  border-radius: 1.5vw;
  border: 0.75vw solid #f2a900;
  margin-top: 5vw;
  position: relative;
`;

const SubMenuWrapper = styled.div`
  bottom: 6.75vw;
  display: flex;
  justify-content: space-around;
  position: absolute;
  width: 100%;
`;

const SubMenuTab = styled.div`
  border-radius: 1vw;
  color: #fff;
  cursor: pointer;
  padding: 0.35em 0;
  width: 24.5%;

  background-color: ${({ subHeaderNumber, smallMask, activeSubMenuTab }) => {
    if (smallMask) {
      return subHeaderNumber === activeSubMenuTab ? `#f2a900;` : `#fceecc;`;
    }

    return subHeaderNumber === activeSubMenuTab ? `#004899;` : `#ccdaeb;`;
  }};
`;

const SubMenuTitle = styled.p`
  && {
    color: #fff;
    font-size: 1.8vw;
    font-weight: bold;
    line-height: 2.8vw;
    margin-bottom: 0;
    text-align: center;
  }
`;

const SelectedInstructions = styled.div`
  padding: 0 1vw;
  position: relative;
  top: 0.75vw;
`;

const InstructionImgAndTextWrapper = styled.div``;

class Instructions extends Component {
  state = {
    activeSubMenuTab: 1
  };

  handleSubMenu = (selectedSubMenuTab) => {
    this.setState((prevState) => {
      if (selectedSubMenuTab !== prevState.activeSubMenuTab) {
        return {
          activeSubMenuTab: selectedSubMenuTab
        };
      }
    });
  };

  render() {
    const { data } = this.props;
    const { activeSubMenuTab } = this.state;
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
        {/* <IndicationsForUse /> */}
        <InstructionsMenu>
          <SubMenuWrapper>
            <SubMenuTab
              activeSubMenuTab={activeSubMenuTab}
              onClick={() => this.handleSubMenu(1)}
              smallMask
              subHeaderNumber={1}>
              <SubMenuTitle>Small/Medium Mask</SubMenuTitle>
              <SubMenuTitle>Instructions for Use</SubMenuTitle>
            </SubMenuTab>
            <SubMenuTab
              activeSubMenuTab={activeSubMenuTab}
              onClick={() => this.handleSubMenu(2)}
              smallMask
              subHeaderNumber={2}>
              <SubMenuTitle>Small/Medium Mask</SubMenuTitle>
              <SubMenuTitle>Cleaning Instructions</SubMenuTitle>
            </SubMenuTab>
            <SubMenuTab
              activeSubMenuTab={activeSubMenuTab}
              onClick={() => this.handleSubMenu(3)}
              subHeaderNumber={3}>
              <SubMenuTitle>Large Mask/Mouthpiece</SubMenuTitle>
              <SubMenuTitle>Instructions for Use</SubMenuTitle>
            </SubMenuTab>
            <SubMenuTab
              activeSubMenuTab={activeSubMenuTab}
              onClick={() => this.handleSubMenu(4)}
              subHeaderNumber={4}>
              <SubMenuTitle>Large Mask/Mouthpiece</SubMenuTitle>
              <SubMenuTitle>Cleaning Instructions</SubMenuTitle>
            </SubMenuTab>
          </SubMenuWrapper>
          <SelectedInstructions>
            {activeSubMenuTab === 1 && (
              <InstructionImgAndTextWrapper>
                <Img sizes={data.SMInstruct_1.sizes} />
                {/* <p>
                  Carefully examine the product for damage, missing parts, or
                  foreign objects. Remove any foreign objects prior to use.
                  The product should be replaced IMMEDIATELY if there are any
                  damaged or missing parts. If necessary, use the Metered Dose
                  Inhaler (MDI) alone until a replacement is obtained. If the
                  patient's symptoms worsen, please seek immediate medical
                  attention.
                </p> */}
                11111
              </InstructionImgAndTextWrapper>
            )}
            {activeSubMenuTab === 2 && <InstructionImgAndTextWrapper>22222</InstructionImgAndTextWrapper>}
            {activeSubMenuTab === 3 && <InstructionImgAndTextWrapper>33333</InstructionImgAndTextWrapper>}
            {activeSubMenuTab === 4 && <InstructionImgAndTextWrapper>44444</InstructionImgAndTextWrapper>}
          </SelectedInstructions>
        </InstructionsMenu>
      </InstructionsWrapper>
    );
  }
}

export const query = graphql`
  query InstructionsQuery {
    bpaAndDishwasherSafe: imageSharp(
      id: { regex: "/shared/bpa_and_dishwasher_safe.png/" }
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
    bear: imageSharp(id: { regex: "/shared/bear.png/" }) {
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
      id: { regex: "/shared/small_mask_medium_mask.png/" }
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
      id: { regex: "/shared/large_mask_mouthpiece.png/" }
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
    download: imageSharp(id: { regex: "/shared/download.png/" }) {
      sizes(maxWidth: 238) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    SMInstruct_PawPrint: imageSharp(id: { regex: "/instructions/PawPrint.png/" }) {
      sizes(maxWidth: 55) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    SMInstruct_PDF: imageSharp(id: { regex: "/instructions/pdf.png/" }) {
      sizes(maxWidth: 137) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    SMInstruct_1: imageSharp(id: { regex: "/instructions/SMInstruct/SMInstruct_1.png/" }) {
      sizes(maxWidth: 217) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    SMInstruct_2: imageSharp(id: { regex: "/instructions/SMInstruct/SMInstruct_2.png/" }) {
      sizes(maxWidth: 217) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    SMInstruct_3: imageSharp(id: { regex: "/instructions/SMInstruct/SMInstruct_3.png/" }) {
      sizes(maxWidth: 217) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    SMInstruct_4: imageSharp(id: { regex: "/instructions/SMInstruct/SMInstruct_4.png/" }) {
      sizes(maxWidth: 217) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    SMInstruct_5: imageSharp(id: { regex: "/instructions/SMInstruct/SMInstruct_5.png/" }) {
      sizes(maxWidth: 217) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    SMInstruct_5b: imageSharp(id: { regex: "/instructions/SMInstruct/SMInstruct_5b.png/" }) {
      sizes(maxWidth: 217) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    SMInstruct_6: imageSharp(id: { regex: "/instructions/SMInstruct/SMInstruct_6.png/" }) {
      sizes(maxWidth: 217) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    SMInstruct_7: imageSharp(id: { regex: "/instructions/SMInstruct/SMInstruct_7.png/" }) {
      sizes(maxWidth: 217) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    SMClean_1: imageSharp(id: { regex: "/instructions/SMClean/SMClean_1.png/" }) {
      sizes(maxWidth: 217) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    SMClean_2: imageSharp(id: { regex: "/instructions/SMClean/SMClean_2.png/" }) {
      sizes(maxWidth: 217) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    SMClean_2b: imageSharp(id: { regex: "/instructions/SMClean/SMClean_2b.png/" }) {
      sizes(maxWidth: 217) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    SMClean_3: imageSharp(id: { regex: "/instructions/SMClean/SMClean_3.png/" }) {
      sizes(maxWidth: 217) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    SMClean_4: imageSharp(id: { regex: "/instructions/SMClean/SMClean_4.png/" }) {
      sizes(maxWidth: 217) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    SMClean_5: imageSharp(id: { regex: "/instructions/SMClean/SMClean_5.png/" }) {
      sizes(maxWidth: 217) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    LMInstruct_1: imageSharp(id: { regex: "/instructions/LMInstruct/LMInstruct_1.png/" }) {
      sizes(maxWidth: 217) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    LMInstruct_2: imageSharp(id: { regex: "/instructions/LMInstruct/LMInstruct_2.png/" }) {
      sizes(maxWidth: 217) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    LMInstruct_3: imageSharp(id: { regex: "/instructions/LMInstruct/LMInstruct_3.png/" }) {
      sizes(maxWidth: 217) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    LMInstruct_4: imageSharp(id: { regex: "/instructions/LMInstruct/LMInstruct_4.png/" }) {
      sizes(maxWidth: 217) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    LMInstruct_5: imageSharp(id: { regex: "/instructions/LMInstruct/LMInstruct_5.png/" }) {
      sizes(maxWidth: 217) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    LMInstruct_6: imageSharp(id: { regex: "/instructions/LMInstruct/LMInstruct_6.png/" }) {
      sizes(maxWidth: 217) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    LMInstruct_7: imageSharp(id: { regex: "/instructions/LMInstruct/LMInstruct_7.png/" }) {
      sizes(maxWidth: 217) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    LMClean_1: imageSharp(id: { regex: "/instructions/LMClean/LMClean_1.png/" }) {
      sizes(maxWidth: 217) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    LMClean_2: imageSharp(id: { regex: "/instructions/LMClean/LMClean_2.png/" }) {
      sizes(maxWidth: 217) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    LMClean_2b: imageSharp(id: { regex: "/instructions/LMClean/LMClean_2b.png/" }) {
      sizes(maxWidth: 217) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    LMClean_3: imageSharp(id: { regex: "/instructions/LMClean/LMClean_3.png/" }) {
      sizes(maxWidth: 217) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    LMClean_4: imageSharp(id: { regex: "/instructions/LMClean/LMClean_4.png/" }) {
      sizes(maxWidth: 217) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    LMClean_5: imageSharp(id: { regex: "/instructions/LMClean/LMClean_5.png/" }) {
      sizes(maxWidth: 217) {
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
