import React, { Component, Fragment } from 'react';
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
  margin-top: 6.5vw;
  padding: 0;
`;

const SubMenuWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: -6.25vw;
  width: 100%;
`;

const SubMenuTab = styled.div`
  border-radius: 1vw;
  color: #fff;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.2em 0.3em;
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
    font-size: 2.3vw;
    flex-wrap: wrap;
    line-height: 2.8vw;
    margin-bottom: 0;
    text-align: center;
  }
`;

const InstructionImgAndTextWrapper = styled.div`
  display: flex;
  margin: 3vw auto 6vw;
  width: 80vw;
`;

const InstructionsBlueHeader = styled.p`
  && {
    color: #004899;
    font-size: 2.5vw;
    font-weight: 400;
    line-height: 3vw;
    margin: 1.75vw auto 0;
    text-align: center;
    width: 80vw;
  }
`;

const InstructionImg = styled(Img)`
  max-width: 217px;
  width: 20vw;
`;

const InstructionText = styled.p`
  && {
    font-size: 2.4vw;
    line-height: 2.8vw;
    position: relative;
    right: 6vw;
  }
`;

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
          {activeSubMenuTab === 1 && (
            <div>
              <InstructionImgAndTextWrapper>
                <InstructionImg sizes={data.SMInstruct_1.sizes} />
                <InstructionText style={{ top: '3.5vw' }}>
                  Carefully examine the product for damage, missing parts, or
                  foreign objects. Remove any foreign objects prior to use. The
                  product should be replaced IMMEDIATELY if there are any
                  damaged or missing parts. If necessary, use the Metered Dose
                  Inhaler (MDI) alone until a replacement is obtained. If the
                  patient's symptoms worsen, please seek immediate medical
                  attention.
                </InstructionText>
              </InstructionImgAndTextWrapper>
              <InstructionImgAndTextWrapper>
                <InstructionImg sizes={data.SMInstruct_2.sizes} />
                <InstructionText style={{ top: '4vw' }}>
                  Remove cap from the MDI.
                </InstructionText>
              </InstructionImgAndTextWrapper>
              <InstructionImgAndTextWrapper>
                <InstructionImg sizes={data.SMInstruct_3.sizes} />
                <InstructionText style={{ top: '4vw' }}>
                  Shake the MDI immediately before each use as per the
                  instructions supplied with the MDI.
                </InstructionText>
              </InstructionImgAndTextWrapper>
              <InstructionImgAndTextWrapper>
                <InstructionImg sizes={data.SMInstruct_4.sizes} />
                <InstructionText style={{ top: '3.5vw' }}>
                  Insert the MDI into the backpiece of the chamber.
                </InstructionText>
              </InstructionImgAndTextWrapper>
              <InstructionImgAndTextWrapper>
                <InstructionImg sizes={data.SMInstruct_5.sizes} />
                <InstructionText style={{ top: '3.5vw' }}>
                  Apply mask to face and ensure an eective seal. The Flow-Vu®
                  Inspiratory Flow Indicator (IFI) only moves if a good seal is
                  created.
                </InstructionText>
                <InstructionImg
                  sizes={data.SMInstruct_5b.sizes}
                  style={{
                    position: 'relative',
                    right: '5vw',
                    width: '12.25vw'
                  }}
                />
              </InstructionImgAndTextWrapper>
              <InstructionImgAndTextWrapper>
                <InstructionImg sizes={data.SMInstruct_6.sizes} />
                <InstructionText style={{ top: '3.5vw' }}>
                  Press the MDI at the beginning of a slow inhalation as the
                  Flow-Vu® Inspiratory Flow Indicator moves toward the patient.
                  Use the Flow-Vu® Inspiratory Flow Indicator to count breaths.
                  Maintain seal for 5-6 breaths after the MDI is pressed.
                  Administer 1 pu at a time.
                </InstructionText>
              </InstructionImgAndTextWrapper>
              <InstructionImgAndTextWrapper>
                <InstructionImg sizes={data.SMInstruct_7.sizes} />
                <InstructionText style={{ top: '3.5vw' }}>
                  Follow instructions supplied with the MDI on how long to wait
                  before repeating steps 3-6 as prescribed.
                </InstructionText>
              </InstructionImgAndTextWrapper>
            </div>
          )}
          {activeSubMenuTab === 2 && (
            <div>
              <InstructionsBlueHeader>
                CLEANING INSTRUCTIONS FOR THE SMALL AND MEDIUM MASK CHAMBERS.
                THIS PRODUCT CAN BE USED RIGHT OUT OF THE PACKAGE AND THEN
                CLEANED WEEKLY.
              </InstructionsBlueHeader>
              <InstructionImgAndTextWrapper>
                <InstructionImg sizes={data.SMClean_1.sizes} />
                <InstructionText style={{ top: '3.5vw' }}>
                  Remove the backpiece. To detach the frontpiece, twist chamber
                  as shown.
                </InstructionText>
              </InstructionImgAndTextWrapper>
              <InstructionImgAndTextWrapper style={{ marginBottom: '4.5vw' }}>
                <InstructionImg sizes={data.SMClean_2.sizes} />
                <InstructionText style={{ top: '4vw' }}>
                  Soak the parts for 15 minutes in a mild solution of liquid
                  dish detergent and lukewarm clean water. Agitate gently.
                  <br />
                  <br />
                  Rinse parts in clean water.
                  <br />
                  <br />
                  OR
                </InstructionText>
              </InstructionImgAndTextWrapper>
              <InstructionImgAndTextWrapper style={{ marginBottom: 0 }}>
                <InstructionImg
                  sizes={data.SMClean_2b.sizes}
                  style={{
                    width: '10.5vw'
                  }}
                />
                <InstructionText style={{ left: '3.4vw', marginBottom: 0 }}>
                  <b>Dishwasher safe under the following conditions:</b>
                  <br />
                  <br />
                </InstructionText>
              </InstructionImgAndTextWrapper>
              <InstructionImgAndTextWrapper
                style={{ flexDirection: 'column', marginBottom: '-12.5vw' }}>
                <ul
                  style={{
                    fontSize: '2.4vw',
                    position: 'relative',
                    left: '13.75vw',
                    lineHeight: '1.75vw',
                    margin: '0 0 2vw 3.5vw',
                    bottom: '8.5vw'
                  }}>
                  <li>
                    Avoid heavy or other cycles that include heated dry over
                    158°F
                  </li>
                  <li>Parts must be placed in the top rack ONLY</li>
                  <li>Secure product face up, as pictured</li>
                  <li>Use dishwasher detergent and rinse aid</li>
                  <li>Do not boil or sterilize</li>
                </ul>
                <InstructionText style={{ bottom: '11vw', left: '13.75vw' }}>
                  SEE CAUTIONS, 1ST BULLET, BELOW
                </InstructionText>
              </InstructionImgAndTextWrapper>
              <InstructionImgAndTextWrapper>
                <InstructionImg sizes={data.SMClean_3.sizes} />
                <InstructionText style={{ top: '4vw' }}>
                  Shake out excess water from the parts and allow to air dry in
                  a vertical position. Ensure parts are dry before reassembly.
                </InstructionText>
              </InstructionImgAndTextWrapper>
              <InstructionImgAndTextWrapper>
                <InstructionImg sizes={data.SMClean_4.sizes} />
                <InstructionText style={{ top: '3.5vw' }}>
                  To reassemble, t the frontpiece on the end of the chamber and
                  twist rmly until securely locked into position.
                </InstructionText>
              </InstructionImgAndTextWrapper>
              <InstructionImgAndTextWrapper>
                <InstructionImg sizes={data.SMClean_5.sizes} />
                <InstructionText style={{ top: '3.5vw' }}>
                  Center the Alignment Feature on the backpiece with the
                  Flow-Vu® Inspiratory Flow Indicator, as shown. Press rmly to
                  attach the backpiece.
                </InstructionText>
              </InstructionImgAndTextWrapper>
            </div>
          )}
          {activeSubMenuTab === 3 && (
            <div>
              <InstructionImgAndTextWrapper>
                <InstructionImg sizes={data.LMInstruct_1.sizes} />
                <InstructionText style={{ top: '3.5vw' }}>
                  Carefully examine the product for damage, missing parts or
                  foreign objects. Remove any foreign objects prior to use. The
                  product should be replaced IMMEDIATELY if there are any
                  damaged or missing parts. If necessary, use the Metered Dose
                  Inhaler (MDI) alone until a replacement is obtained. If
                  symptoms worsen, please seek immediate medical attention.
                </InstructionText>
              </InstructionImgAndTextWrapper>
              <InstructionImgAndTextWrapper>
                <InstructionImg sizes={data.LMInstruct_2.sizes} />
                <InstructionText style={{ top: '3.5vw' }}>
                  Remove caps from the MDI and chamber.
                </InstructionText>
              </InstructionImgAndTextWrapper>
              <InstructionImgAndTextWrapper>
                <InstructionImg sizes={data.LMInstruct_3.sizes} />
                <InstructionText style={{ top: '3.5vw' }}>
                  Shake the MDI immediately before each use as per the
                  instructions supplied with the MDI.
                </InstructionText>
              </InstructionImgAndTextWrapper>
              <InstructionImgAndTextWrapper>
                <InstructionImg sizes={data.LMInstruct_4.sizes} />
                <InstructionText style={{ top: '3.5vw' }}>
                  Insert the MDI into the backpiece of the chamber.
                </InstructionText>
              </InstructionImgAndTextWrapper>
              <InstructionImgAndTextWrapper
                style={{
                  flexDirection: 'column'
                }}>
                <InstructionImg
                  sizes={data.LMInstruct_5.sizes}
                  style={{
                    maxWidth: '688px',
                    width: '64vw'
                  }}
                />
                <InstructionText
                  style={{
                    left: '14vw',
                    marginBottom: 0,
                    top: '1.75vw',
                    width: '61.25vw'
                  }}>
                  Put mouthpiece into mouth and close lips around it to ensure
                  an eective seal. The Flow-Vu® Inspiratory Flow Indicator (IFI)
                  only moves if the patient has a good seal.<br />
                  <br />Apply mask to face and ensure an eective seal. The
                  Flow-Vu® Inspiratory Flow Indicator only moves if a good seal
                  is created.
                </InstructionText>
              </InstructionImgAndTextWrapper>
              <InstructionImgAndTextWrapper
                style={{
                  flexDirection: 'column'
                }}>
                <InstructionImg
                  sizes={data.LMInstruct_6.sizes}
                  style={{
                    maxWidth: '688px',
                    width: '64vw'
                  }}
                />
                <InstructionText
                  style={{
                    left: '14vw',
                    marginBottom: 0,
                    top: '1.75vw',
                    width: '61.25vw'
                  }}>
                  Breathe out gently and press the MDI at the beginning of a
                  slow inhalation. Use the Flow-Vu® IFI to assist in the
                  coordination of this step. Breathe in slowly and deeply
                  through the mouth until a full breath has been taken. Hold
                  breath for 5-10 seconds, if possible. Otherwise, keep lips
                  tight on the mouthpiece breathing normally 2-3 times through
                  the chamber after the MDI is pressed. Slow down inhalation if
                  you hear the FlowSignal® Whistle sound. It means that you are
                  inhaling too quickly. Administer 1 pu at a time.<br />
                  <br />Breathe out gently and press the MDI at the beginning of
                  a slow inhalation as the Flow-Vu® IFI moves toward you. Use
                  the Flow-Vu® IFI to count breaths. Maintain seal for 5-6
                  breaths after the MDI is pressed. Slow down inhalation if you
                  hear the FlowSignal® Whistle sound. It means that you are
                  inhaling too quickly. Administer 1 pu at a time.
                </InstructionText>
              </InstructionImgAndTextWrapper>
              <InstructionImgAndTextWrapper>
                <InstructionImg sizes={data.LMInstruct_7.sizes} />
                <InstructionText style={{ top: '3.5vw' }}>
                  Follow instructions supplied with the MDI on how long to wait
                  before repeating steps 3-6 as prescribed.
                </InstructionText>
              </InstructionImgAndTextWrapper>
            </div>
          )}
          {activeSubMenuTab === 4 && (
            <div>
              <InstructionsBlueHeader>
                CLEANING INSTRUCTIONS FOR THE LARGE MASK AND MOUTHPIECE
                CHAMBERS. THIS PRODUCT CAN BE USED RIGHT OUT OF THE PACKAGE AND
                THEN CLEANED WEEKLY.
              </InstructionsBlueHeader>
              <InstructionImgAndTextWrapper>
                <InstructionImg sizes={data.LMClean_1.sizes} />
                <InstructionText style={{ top: '3.5vw' }}>
                  Remove the backpiece. To detach the frontpiece, twist chamber
                  as shown. Remove the mouthpiece cap.
                </InstructionText>
              </InstructionImgAndTextWrapper>
              <InstructionImgAndTextWrapper>
                <InstructionImg sizes={data.LMClean_2.sizes} />
                <InstructionText style={{ top: '3.75vw' }}>
                  Soak the parts for 15 minutes in a mild solution of liquid
                  dish detergent and lukewarm clean water. Agitate gently.
                  <br />
                  <br />Rinse parts in clean water.
                </InstructionText>
              </InstructionImgAndTextWrapper>
              <InstructionImgAndTextWrapper>
                <InstructionImg sizes={data.LMClean_3.sizes} />
                <InstructionText style={{ top: '3.75vw' }}>
                  Shake out excess water from the parts and allow to air dry in
                  a vertical position. Ensure parts are dry before reassembly.
                </InstructionText>
              </InstructionImgAndTextWrapper>
              <InstructionImgAndTextWrapper>
                <InstructionImg sizes={data.LMClean_4.sizes} />
                <InstructionText style={{ top: '3.5vw' }}>
                  To reassemble, fit the frontpiece on the end of the chamber
                  and twist firmly until securely locked into position. For
                  mouthpiece models, the protective cap should always be placed
                  on the mouthpiece when the chamber is not in use.
                </InstructionText>
              </InstructionImgAndTextWrapper>
              <InstructionImgAndTextWrapper>
                <InstructionImg sizes={data.LMClean_5.sizes} />
                <InstructionText style={{ top: '3.5vw' }}>
                  Center the Alignment Feature on the backpiece with the
                  Flow-Vu® Inspiratory Flow Indicator, as shown. Press firmly to
                  attach the backpiece.
                </InstructionText>
              </InstructionImgAndTextWrapper>
            </div>
          )}
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
    largeMask: imageSharp(id: { regex: "/shared/large_mask_mouthpiece.png/" }) {
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
    SMInstruct_PawPrint: imageSharp(
      id: { regex: "/instructions/PawPrint.png/" }
    ) {
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
    SMInstruct_1: imageSharp(
      id: { regex: "/instructions/SMInstruct/SMInstruct_1.png/" }
    ) {
      sizes(maxWidth: 217) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    SMInstruct_2: imageSharp(
      id: { regex: "/instructions/SMInstruct/SMInstruct_2.png/" }
    ) {
      sizes(maxWidth: 217) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    SMInstruct_3: imageSharp(
      id: { regex: "/instructions/SMInstruct/SMInstruct_3.png/" }
    ) {
      sizes(maxWidth: 217) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    SMInstruct_4: imageSharp(
      id: { regex: "/instructions/SMInstruct/SMInstruct_4.png/" }
    ) {
      sizes(maxWidth: 217) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    SMInstruct_5: imageSharp(
      id: { regex: "/instructions/SMInstruct/SMInstruct_5.png/" }
    ) {
      sizes(maxWidth: 217) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    SMInstruct_5b: imageSharp(
      id: { regex: "/instructions/SMInstruct/SMInstruct_5b.png/" }
    ) {
      sizes(maxWidth: 217) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    SMInstruct_6: imageSharp(
      id: { regex: "/instructions/SMInstruct/SMInstruct_6.png/" }
    ) {
      sizes(maxWidth: 217) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    SMInstruct_7: imageSharp(
      id: { regex: "/instructions/SMInstruct/SMInstruct_7.png/" }
    ) {
      sizes(maxWidth: 217) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    SMClean_1: imageSharp(
      id: { regex: "/instructions/SMClean/SMClean_1.png/" }
    ) {
      sizes(maxWidth: 217) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    SMClean_2: imageSharp(
      id: { regex: "/instructions/SMClean/SMClean_2.png/" }
    ) {
      sizes(maxWidth: 217) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    SMClean_2b: imageSharp(
      id: { regex: "/instructions/SMClean/SMClean_2b.png/" }
    ) {
      sizes(maxWidth: 217) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    SMClean_3: imageSharp(
      id: { regex: "/instructions/SMClean/SMClean_3.png/" }
    ) {
      sizes(maxWidth: 217) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    SMClean_4: imageSharp(
      id: { regex: "/instructions/SMClean/SMClean_4.png/" }
    ) {
      sizes(maxWidth: 217) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    SMClean_5: imageSharp(
      id: { regex: "/instructions/SMClean/SMClean_5.png/" }
    ) {
      sizes(maxWidth: 217) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    LMInstruct_1: imageSharp(
      id: { regex: "/instructions/LMInstruct/LMInstruct_1.png/" }
    ) {
      sizes(maxWidth: 217) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    LMInstruct_2: imageSharp(
      id: { regex: "/instructions/LMInstruct/LMInstruct_2.png/" }
    ) {
      sizes(maxWidth: 217) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    LMInstruct_3: imageSharp(
      id: { regex: "/instructions/LMInstruct/LMInstruct_3.png/" }
    ) {
      sizes(maxWidth: 217) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    LMInstruct_4: imageSharp(
      id: { regex: "/instructions/LMInstruct/LMInstruct_4.png/" }
    ) {
      sizes(maxWidth: 217) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    LMInstruct_5: imageSharp(
      id: { regex: "/instructions/LMInstruct/LMInstruct_5.png/" }
    ) {
      sizes(maxWidth: 688) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    LMInstruct_6: imageSharp(
      id: { regex: "/instructions/LMInstruct/LMInstruct_6.png/" }
    ) {
      sizes(maxWidth: 688) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    LMInstruct_7: imageSharp(
      id: { regex: "/instructions/LMInstruct/LMInstruct_7.png/" }
    ) {
      sizes(maxWidth: 217) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    LMClean_1: imageSharp(
      id: { regex: "/instructions/LMClean/LMClean_1.png/" }
    ) {
      sizes(maxWidth: 217) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    LMClean_2: imageSharp(
      id: { regex: "/instructions/LMClean/LMClean_2.png/" }
    ) {
      sizes(maxWidth: 217) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    LMClean_2b: imageSharp(
      id: { regex: "/instructions/LMClean/LMClean_2b.png/" }
    ) {
      sizes(maxWidth: 217) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    LMClean_3: imageSharp(
      id: { regex: "/instructions/LMClean/LMClean_3.png/" }
    ) {
      sizes(maxWidth: 217) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    LMClean_4: imageSharp(
      id: { regex: "/instructions/LMClean/LMClean_4.png/" }
    ) {
      sizes(maxWidth: 217) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    LMClean_5: imageSharp(
      id: { regex: "/instructions/LMClean/LMClean_5.png/" }
    ) {
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
