import React, { Component } from 'react';
import styled from 'styled-components';
import DownloadInstructionsForUse from 'components/DownloadInstructionsForUse';
import OverviewAndInstructionsSharedSection from 'components/OverviewAndInstructionsSharedSection';
import TabMenuPDFDownload from 'components/TabMenuPDFDownload';
import Img from 'gatsby-image';
import { ContentWrapper, ScalingText, ScalingH2, Text, H3, ScalingH6 } from 'helpers/sharedStyles';
import TabMenuNotes from 'components/TabMenuNotes';
import IndicationsForUse from 'components/IndicationsForUse';
import smallMediumPDF from 'static/small_medium_mask_indications.pdf';
// import largeMouthpiecePDF from 'static/large_mask_mouthpiece_indications.pdf';

const InstructionsWrapper = styled.div``;

const InstructionsMenu = ContentWrapper.extend`
  border-radius: 1.5vw;
  border: 0.75vw solid #f2a900;
  margin-top: 6.5vw;
  padding: 0;
  position: relative;

  @media screen and (min-width: 996px) {
    border-radius: 14.94px;
    border: 7.46875px solid #f2a900;
    margin-top: 64.74px;
    padding: 0;
  }
`;

const SubMenuWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  position: absolute;
  top: -2.95%;
  left: 0;

  @media screen and (min-width: 996px) {
  }
`;

const SubMenuTab = styled.div`
  border-radius: 1vw;
  color: #fff;
  cursor: pointer;
  padding: 0.75em 0.75em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 24.5%;

  background-color: ${({ subHeaderNumber, smallMask, activeSubMenuTab }) => {
    if (smallMask) {
      return subHeaderNumber === activeSubMenuTab ? `#f2a900;` : `#fceecc;`;
    }

    return subHeaderNumber === activeSubMenuTab ? `#004899;` : `#ccdaeb;`;
  }};

  @media screen and (min-width: 996px) {
    border-radius: 9.96px;
  }
`;

const SubMenuTitle = ScalingH6.extend`
  color: #fff;
  line-height: 1.25em;
  margin-bottom: 0;
  text-align: center;
  font-weight: 600;
`;

const InstructionsBlueHeader = ScalingText.extend`
  color: #004899;
  margin: 0.75em auto 0;
  text-align: center;
  width: 80vw;

  @media screen and (min-width: 996px) {
    width: 796.797px;
  }
`;

const InstructionImgAndTextWrapper = styled.div`
  display: flex;
  margin: 3vw auto 6vw;
  width: 80vw;

  @media screen and (min-width: 996px) {
    margin: 29.88px auto 59.76px;
    width: 796.797px;
  }
`;

const BrownStep = styled.span`
  color: #c09442;
  font-weight: 600;
  text-decoration: underline;
`;

const BlueStep = styled.span`
  color: #2855a7;
  font-weight: 600;
  text-decoration: underline;
`;

const InstructionImg = styled(Img)`
  width: 12vw;
  margin-right: 3vw;

  @media screen and (min-width: 600px) {
    margin-right: 2.75vw;
  }

  @media screen and (min-width: 996px) {
    margin-right: 27.39px;
    width: 120px;
  }
`;

const InstructionImgSMInstruct5b = styled(Img)`
  margin-left: 1em;
  position: relative;
  width: 14vw;
  bottom: 1.1vw;

  @media screen and (min-width: 996px) {
    bottom: 9.96px;
    width: 134.45px;
  }
`;

const InstructionText = ScalingText.extend`
  margin-bottom: 0;

  @media screen and (min-width: 996px) {
    span {
      font-size: 23.25px;
    }
  }
`;

const IndentedInstructionText = InstructionText.extend`
  margin-left: calc(12vw + 3vw);

  @media screen and (min-width: 600px) {
    margin-left: calc(12vw + 2.75vw);
  }

  @media screen and (min-width: 996px) {
    margin-left: calc(12vw + 27.39px);
  }
`;

const LMInstructFlexWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 90%;
`;

const HelpfulTips = styled.div`
  background: rgba(245, 245, 245, 1);
  border: 0.5vw solid #007fc8;
  border-radius: 1vw;
  box-shadow: 3px 3px 7px 1px rgba(0, 0, 0, 0.2);
  width: 93.5%;
  margin: 0 auto 1vw;
  padding: 0.6em;

  @media screen and (min-width: 996px) {
    border: 4.96875px solid #007fc8;
    border-radius: 9.96px;
    margin: 0 auto 9.96px;
  }
`;

const TipWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 2.25vw;

  @media screen and (min-width: 996px) {
    margin-bottom: 22.41px;
  }
`;

const TipImg = styled(Img)`
  margin-right: 1.4vw;
  width: 4.25vw;

  @media screen and (min-width: 996px) {
    margin-right: 13.944px;
    width: 42.3281px;
  }
`;

const TipText = ScalingText.extend`
  font-weight: 600;
  margin-bottom: 0;
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
    const { data, location } = this.props;
    const { activeSubMenuTab } = this.state;
    return (
      <InstructionsWrapper>
        <OverviewAndInstructionsSharedSection
          headerFirstLine="Learning How to Use Your"
          headerSecondLine="AeroChamber Plus® Flow-Vu®"
          subHeaderText="<p style='margin-bottom: 0;'>Watch the video below for instructions on using your <span style='color: #007fc8; font-weight: 600;'>AeroChamber Plus®</span> with a metered dose inhaler, and for cleaning directions.</p>"
          macbook={data.macbook}
          bpaAndDishwasherSafe={data.bpaAndDishwasherSafe}
          pathname={location.pathname}
        />
        <DownloadInstructionsForUse
          download={data.download}
          bear={data.bear}
          smallMask={data.smallMask}
          largeMask={data.largeMask}
          style={{ padding: '0 0', position: 'relative', zIndex: 1 }}
        />
        <InstructionsMenu>
          <SubMenuWrapper>
            <SubMenuTab
              activeSubMenuTab={activeSubMenuTab}
              onClick={() => this.handleSubMenu(1)}
              smallMask
              subHeaderNumber={1}>
              <SubMenuTitle>Small/Medium Mask</SubMenuTitle>
              <SubMenuTitle>Instructions For Use</SubMenuTitle>
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
              <SubMenuTitle>Instructions For Use</SubMenuTitle>
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
                <InstructionText>
                  <BrownStep>Step 1</BrownStep>
                  <br />
                  Carefully examine the product for damage, missing parts, or foreign objects.
                  Remove any foreign objects prior to use. The product should be replaced
                  IMMEDIATELY if there are any damaged or missing parts. If necessary, use the
                  Metered Dose Inhaler (MDI) alone until a replacement is obtained. If the patient's
                  symptoms worsen, please seek immediate medical attention.
                </InstructionText>
              </InstructionImgAndTextWrapper>
              <InstructionImgAndTextWrapper>
                <InstructionImg sizes={data.SMInstruct_2.sizes} />
                <InstructionText>
                  <BrownStep>Step 2</BrownStep>
                  <br />
                  Remove cap from the MDI.
                </InstructionText>
              </InstructionImgAndTextWrapper>
              <InstructionImgAndTextWrapper>
                <InstructionImg sizes={data.SMInstruct_3.sizes} />
                <InstructionText>
                  <BrownStep>Step 3</BrownStep>
                  <br />
                  Shake the MDI immediately before each use as per the instructions supplied with
                  the MDI.
                </InstructionText>
              </InstructionImgAndTextWrapper>
              <InstructionImgAndTextWrapper>
                <InstructionImg sizes={data.SMInstruct_4.sizes} />
                <InstructionText>
                  <BrownStep>Step 4</BrownStep>
                  <br />
                  Insert the MDI into the backpiece of the chamber.
                </InstructionText>
              </InstructionImgAndTextWrapper>
              <InstructionImgAndTextWrapper>
                <InstructionImg sizes={data.SMInstruct_5.sizes} />
                <InstructionText>
                  <BrownStep>Step 5</BrownStep>
                  <br />
                  Apply mask to face and ensure an effective seal. The Flow-Vu® Inspiratory Flow
                  Indicator (IFI) only moves if a good seal is created.
                </InstructionText>
                <InstructionImgSMInstruct5b sizes={data.SMInstruct_5b.sizes} />
              </InstructionImgAndTextWrapper>
              <InstructionImgAndTextWrapper>
                <InstructionImg sizes={data.SMInstruct_6.sizes} />
                <InstructionText>
                  <BrownStep>Step 6</BrownStep>
                  <br />
                  Press the MDI at the beginning of a slow inhalation as the Flow-Vu® Inspiratory
                  Flow Indicator moves toward the patient. Use the Flow-Vu® Inspiratory Flow
                  Indicator to count breaths. Maintain seal for 5-6 breaths after the MDI is
                  pressed. Administer 1 pu at a time.
                </InstructionText>
              </InstructionImgAndTextWrapper>
              <InstructionImgAndTextWrapper>
                <InstructionImg sizes={data.SMInstruct_7.sizes} />
                <InstructionText>
                  <BrownStep>Step 7</BrownStep>
                  <br />
                  Follow instructions supplied with the MDI on how long to wait before repeating
                  steps 3-6 as prescribed.
                </InstructionText>
              </InstructionImgAndTextWrapper>
              <HelpfulTips>
                <ScalingH2
                  style={{
                    marginBottom: '0.5em'
                  }}>
                  Helpful Tips
                </ScalingH2>
                <TipWrapper>
                  <TipImg sizes={data.SMInstruct_PawPrint.sizes} />
                  <TipText>Give praise and rewards.</TipText>
                </TipWrapper>
                <TipWrapper>
                  <TipImg sizes={data.SMInstruct_PawPrint.sizes} />
                  <TipText>
                    Use teddy bears or dolls to "pretend" to use the chamber to make it look like a
                    game.
                  </TipText>
                </TipWrapper>
                <TipWrapper style={{ marginBottom: '0.5em' }}>
                  <TipImg sizes={data.SMInstruct_PawPrint.sizes} />
                  <TipText>
                    If possible, give treatments when the child is happy and not crying.
                  </TipText>
                </TipWrapper>
              </HelpfulTips>
              <TabMenuPDFDownload
                download={data.download}
                PDFImage={data.PDFImage}
                text="AeroChamber Plus® Flow-Vu® VHC<br />Small Mask/Medium Mask"
                PDFPath={smallMediumPDF}
              />
              <TabMenuNotes />
              <IndicationsForUse style={{ paddingTop: 0 }} />
            </div>
          )}
          {activeSubMenuTab === 2 && (
            <div>
              <InstructionsBlueHeader>
                CLEANING INSTRUCTIONS FOR THE SMALL AND MEDIUM MASK CHAMBERS.<br />THIS PRODUCT CAN
                BE USED RIGHT OUT OF THE PACKAGE AND THEN CLEANED WEEKLY.
              </InstructionsBlueHeader>
              <InstructionImgAndTextWrapper>
                <InstructionImg sizes={data.SMClean_1.sizes} />
                <InstructionText>
                  <BrownStep>Step 1</BrownStep>
                  <br />
                  Remove the backpiece. To detach the frontpiece, twist chamber as shown.
                </InstructionText>
              </InstructionImgAndTextWrapper>
              <InstructionImgAndTextWrapper style={{ marginBottom: 0 }}>
                <InstructionImg sizes={data.SMClean_2.sizes} />
                <InstructionText>
                  <BrownStep>Step 2</BrownStep>
                  <br />
                  Soak the parts for 15 minutes in a mild solution of liquid dish detergent and
                  lukewarm clean water. Agitate gently.
                  <br />
                  <br />
                  Rinse parts in clean water.
                  <br />
                  <br />
                  OR
                </InstructionText>
              </InstructionImgAndTextWrapper>
              <InstructionImgAndTextWrapper style={{ marginBottom: 0 }}>
                <InstructionImg sizes={data.SMClean_2b.sizes} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <InstructionText style={{ marginBottom: '0.5em' }}>
                    <b>Dishwasher safe under the following conditions:</b>
                  </InstructionText>
                  <InstructionText style={{ marginBottom: '1.25em' }}>
                    <ul>
                      <li>Avoid heavy or other cycles that include heated dry over 158°F</li>
                      <li>Parts must be placed in the top rack ONLY</li>
                      <li>Secure product face up, as pictured</li>
                      <li>Use dishwasher detergent and rinse aid</li>
                      <li>Do not boil or sterilize</li>
                    </ul>
                  </InstructionText>
                  <InstructionText style={{ marginBottom: '0.5em' }}>
                    SEE CAUTIONS, 1ST BULLET, BELOW
                  </InstructionText>
                </div>
              </InstructionImgAndTextWrapper>
              <InstructionImgAndTextWrapper>
                <InstructionImg sizes={data.SMClean_3.sizes} />
                <InstructionText>
                  <BrownStep>Step 3</BrownStep>
                  <br />
                  Shake out excess water from the parts and allow to air dry in a vertical position.
                  Ensure parts are dry before reassembly.
                </InstructionText>
              </InstructionImgAndTextWrapper>
              <InstructionImgAndTextWrapper>
                <InstructionImg sizes={data.SMClean_4.sizes} />
                <InstructionText>
                  <BrownStep>Step 4</BrownStep>
                  <br />
                  To reassemble, t the frontpiece on the end of the chamber and twist rmly until
                  securely locked into position.
                </InstructionText>
              </InstructionImgAndTextWrapper>
              <InstructionImgAndTextWrapper>
                <InstructionImg sizes={data.SMClean_5.sizes} />
                <InstructionText>
                  <BrownStep>Step 5</BrownStep>
                  <br />
                  Center the Alignment Feature on the backpiece with the Flow-Vu® Inspiratory Flow
                  Indicator, as shown. Press rmly to attach the backpiece.
                </InstructionText>
              </InstructionImgAndTextWrapper>
              <TabMenuNotes />
              <IndicationsForUse style={{ paddingTop: 0 }} />
            </div>
          )}
          {activeSubMenuTab === 3 && (
            <div>
              <InstructionImgAndTextWrapper>
                <InstructionImg sizes={data.LMInstruct_1.sizes} />
                <InstructionText>
                  <BlueStep>Step 1</BlueStep>
                  <br />
                  Carefully examine the product for damage, missing parts or foreign objects. Remove
                  any foreign objects prior to use. The product should be replaced IMMEDIATELY if
                  there are any damaged or missing parts. If necessary, use the Metered Dose Inhaler
                  (MDI) alone until a replacement is obtained. If symptoms worsen, please seek
                  immediate medical attention.
                </InstructionText>
              </InstructionImgAndTextWrapper>
              <InstructionImgAndTextWrapper>
                <InstructionImg sizes={data.LMInstruct_2.sizes} />
                <InstructionText>
                  <BlueStep>Step 2</BlueStep>
                  <br />
                  Remove caps from the MDI and chamber.
                </InstructionText>
              </InstructionImgAndTextWrapper>
              <InstructionImgAndTextWrapper>
                <InstructionImg sizes={data.LMInstruct_3.sizes} />
                <InstructionText>
                  <BlueStep>Step 3</BlueStep>
                  <br />
                  Shake the MDI immediately before each use as per the instructions supplied with
                  the MDI.
                </InstructionText>
              </InstructionImgAndTextWrapper>
              <InstructionImgAndTextWrapper>
                <InstructionImg sizes={data.LMInstruct_4.sizes} />
                <InstructionText>
                  <BlueStep>Step 4</BlueStep>
                  <br />Insert the MDI into the backpiece of the chamber.
                </InstructionText>
              </InstructionImgAndTextWrapper>
              <InstructionImgAndTextWrapper
                style={{
                  flexDirection: 'column',
                  marginBottom: 0
                }}>
                <LMInstructFlexWrapper>
                  <InstructionImg sizes={data.LMInstruct_5.sizes} />
                  <InstructionImg sizes={data.LMInstruct_5b.sizes} />
                  <InstructionImg sizes={data.LMInstruct_5c.sizes} />
                </LMInstructFlexWrapper>
                <br />
                <IndentedInstructionText style={{ marginBottom: '0.5em' }}>
                  <BlueStep>Step 5</BlueStep>
                  <br />
                  Put mouthpiece into mouth and close lips around it to ensure an eective seal. The
                  Flow-Vu® Inspiratory Flow Indicator (IFI) only moves if the patient has a good
                  seal.<br />
                  <br />Apply mask to face and ensure an eective seal. The Flow-Vu® Inspiratory Flow
                  Indicator only moves if a good seal is created.
                </IndentedInstructionText>
              </InstructionImgAndTextWrapper>
              <InstructionImgAndTextWrapper
                style={{
                  flexDirection: 'column',
                  marginBottom: 0
                }}>
                <LMInstructFlexWrapper>
                  <InstructionImg sizes={data.LMInstruct_6.sizes} />
                  <InstructionImg sizes={data.LMInstruct_6b.sizes} />
                </LMInstructFlexWrapper>
                <IndentedInstructionText>
                  <br />
                  <BlueStep>Step 6</BlueStep>
                  <br />
                  Breathe out gently and press the MDI at the beginning of a slow inhalation. Use
                  the Flow-Vu® IFI to assist in the coordination of this step. Breathe in slowly and
                  deeply through the mouth until a full breath has been taken. Hold breath for 5-10
                  seconds, if possible. Otherwise, keep lips tight on the mouthpiece breathing
                  normally 2-3 times through the chamber after the MDI is pressed. Slow down
                  inhalation if you hear the FlowSignal® Whistle sound. It means that you are
                  inhaling too quickly. Administer 1 pu at a time.<br />
                  <br />Breathe out gently and press the MDI at the beginning of a slow inhalation
                  as the Flow-Vu® IFI moves toward you. Use the Flow-Vu® IFI to count breaths.
                  Maintain seal for 5-6 breaths after the MDI is pressed. Slow down inhalation if
                  you hear the FlowSignal® Whistle sound. It means that you are inhaling too
                  quickly. Administer 1 pu at a time.
                </IndentedInstructionText>
              </InstructionImgAndTextWrapper>
              <InstructionImgAndTextWrapper>
                <InstructionImg sizes={data.LMInstruct_7.sizes} />
                <InstructionText>
                  <BlueStep>Step 7</BlueStep>
                  <br />
                  Follow instructions supplied with the MDI on how long to wait before repeating
                  steps 3-6 as prescribed.
                </InstructionText>
              </InstructionImgAndTextWrapper>
              <TabMenuPDFDownload
                style={{ paddingTop: 0 }}
                download={data.download}
                PDFImage={data.PDFImage}
                // PDFPath={largeMouthpiecePDF}
                text="AeroChamber Plus® Flow-Vu® VHC<br />Large Mask/Mouthpiece"
              />
              <TabMenuNotes />
              <IndicationsForUse style={{ paddingTop: 0 }} />
            </div>
          )}
          {activeSubMenuTab === 4 && (
            <div>
              <InstructionsBlueHeader>
                CLEANING INSTRUCTIONS FOR THE LARGE MASK AND MOUTHPIECE CHAMBERS.<br />THIS PRODUCT
                CAN BE USED RIGHT OUT OF THE PACKAGE AND THEN CLEANED WEEKLY.
              </InstructionsBlueHeader>
              <InstructionImgAndTextWrapper>
                <InstructionImg sizes={data.LMClean_1.sizes} />
                <InstructionText>
                  <BlueStep>Step 1</BlueStep>
                  <br />
                  Remove the backpiece. To detach the frontpiece, twist chamber as shown. Remove the
                  mouthpiece cap.
                </InstructionText>
              </InstructionImgAndTextWrapper>
              <InstructionImgAndTextWrapper style={{ marginBottom: 0 }}>
                <InstructionImg sizes={data.LMClean_2.sizes} />
                <InstructionText>
                  <BlueStep>Step 2</BlueStep>
                  <br />
                  Soak the parts for 15 minutes in a mild solution of liquid dish detergent and
                  lukewarm clean water. Agitate gently.
                  <br />
                  <br />
                  Rinse parts in clean water.
                  <br />
                  <br />
                  OR
                </InstructionText>
              </InstructionImgAndTextWrapper>
              <InstructionImgAndTextWrapper style={{ marginBottom: 0 }}>
                <InstructionImg sizes={data.LMClean_2b.sizes} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <InstructionText style={{ marginBottom: '0.5em' }}>
                    <b>Dishwasher safe under the following conditions:</b>
                  </InstructionText>
                  <InstructionText style={{ marginBottom: '1.25em' }}>
                    <ul>
                      <li>Avoid heavy or other cycles that include heated dry over 158°F</li>
                      <li>Parts must be placed in the top rack ONLY</li>
                      <li>Secure product face up, as pictured</li>
                      <li>Use dishwasher detergent and rinse aid</li>
                      <li>Do not boil or sterilize</li>
                    </ul>
                  </InstructionText>
                  <InstructionText style={{ marginBottom: '0.5em' }}>
                    SEE CAUTIONS, 1ST BULLET, BELOW
                  </InstructionText>
                </div>
              </InstructionImgAndTextWrapper>
              <InstructionImgAndTextWrapper>
                <InstructionImg sizes={data.LMClean_3.sizes} />
                <InstructionText>
                  <BlueStep>Step 3</BlueStep>
                  <br />
                  Shake out excess water from the parts and allow to air dry in a vertical position.
                  Ensure parts are dry before reassembly.
                </InstructionText>
              </InstructionImgAndTextWrapper>
              <InstructionImgAndTextWrapper>
                <InstructionImg sizes={data.LMClean_4.sizes} />
                <InstructionText>
                  <BlueStep>Step 4</BlueStep>
                  <br />
                  To reassemble, fit the frontpiece on the end of the chamber and twist firmly until
                  securely locked into position. For mouthpiece models, the protective cap should
                  always be placed on the mouthpiece when the chamber is not in use.
                </InstructionText>
              </InstructionImgAndTextWrapper>
              <InstructionImgAndTextWrapper>
                <InstructionImg sizes={data.LMClean_5.sizes} />
                <InstructionText>
                  <BlueStep>Step 5</BlueStep>
                  <br />
                  Center the Alignment Feature on the backpiece with the Flow-Vu® Inspiratory Flow
                  Indicator, as shown. Press firmly to attach the backpiece.
                </InstructionText>
              </InstructionImgAndTextWrapper>
              <TabMenuNotes />
              <IndicationsForUse style={{ paddingTop: 0 }} />
            </div>
          )}
        </InstructionsMenu>
      </InstructionsWrapper>
    );
  }
}

export const query = graphql`
  query InstructionsQuery {
    bpaAndDishwasherSafe: imageSharp(id: { regex: "/shared/bpa_and_dishwasher_safe.png/" }) {
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
    smallMask: imageSharp(id: { regex: "/shared/small_mask_medium_mask.png/" }) {
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
    SMInstruct_PawPrint: imageSharp(id: { regex: "/instructions/SMInstruct/PawPrint.png/" }) {
      sizes(maxWidth: 43) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    PDFImage: imageSharp(id: { regex: "/instructions/SMInstruct/pdf.png/" }) {
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
      sizes(maxWidth: 120) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    SMInstruct_2: imageSharp(id: { regex: "/instructions/SMInstruct/SMInstruct_2.png/" }) {
      sizes(maxWidth: 120) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    SMInstruct_3: imageSharp(id: { regex: "/instructions/SMInstruct/SMInstruct_3.png/" }) {
      sizes(maxWidth: 120) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    SMInstruct_4: imageSharp(id: { regex: "/instructions/SMInstruct/SMInstruct_4.png/" }) {
      sizes(maxWidth: 120) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    SMInstruct_5: imageSharp(id: { regex: "/instructions/SMInstruct/SMInstruct_5.png/" }) {
      sizes(maxWidth: 120) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    SMInstruct_5b: imageSharp(id: { regex: "/instructions/SMInstruct/SMInstruct_5b.png/" }) {
      sizes(maxWidth: 532) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    SMInstruct_6: imageSharp(id: { regex: "/instructions/SMInstruct/SMInstruct_6.png/" }) {
      sizes(maxWidth: 120) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    SMInstruct_7: imageSharp(id: { regex: "/instructions/SMInstruct/SMInstruct_7.png/" }) {
      sizes(maxWidth: 120) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    SMClean_1: imageSharp(id: { regex: "/instructions/SMClean/SMClean_1.png/" }) {
      sizes(maxWidth: 120) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    SMClean_2: imageSharp(id: { regex: "/instructions/SMClean/SMClean_2.png/" }) {
      sizes(maxWidth: 120) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    SMClean_2b: imageSharp(id: { regex: "/instructions/SMClean/SMClean_2b.png/" }) {
      sizes(maxWidth: 481) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    SMClean_3: imageSharp(id: { regex: "/instructions/SMClean/SMClean_3.png/" }) {
      sizes(maxWidth: 120) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    SMClean_4: imageSharp(id: { regex: "/instructions/SMClean/SMClean_4.png/" }) {
      sizes(maxWidth: 120) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    SMClean_5: imageSharp(id: { regex: "/instructions/SMClean/SMClean_5.png/" }) {
      sizes(maxWidth: 120) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    LMInstruct_1: imageSharp(id: { regex: "/instructions/LMInstruct/LMInstruct_1.png/" }) {
      sizes(maxWidth: 120) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    LMInstruct_2: imageSharp(id: { regex: "/instructions/LMInstruct/LMInstruct_2.png/" }) {
      sizes(maxWidth: 120) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    LMInstruct_3: imageSharp(id: { regex: "/instructions/LMInstruct/LMInstruct_3.png/" }) {
      sizes(maxWidth: 120) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    LMInstruct_4: imageSharp(id: { regex: "/instructions/LMInstruct/LMInstruct_4.png/" }) {
      sizes(maxWidth: 120) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    LMInstruct_5: imageSharp(id: { regex: "/instructions/LMInstruct/LMInstruct_5.png/" }) {
      sizes(maxWidth: 120) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    LMInstruct_5b: imageSharp(id: { regex: "/instructions/LMInstruct/LMInstruct_5b.png/" }) {
      sizes(maxWidth: 120) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    LMInstruct_5c: imageSharp(id: { regex: "/instructions/LMInstruct/LMInstruct_5c.png/" }) {
      sizes(maxWidth: 120) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    LMInstruct_6: imageSharp(id: { regex: "/instructions/LMInstruct/LMInstruct_6.png/" }) {
      sizes(maxWidth: 867) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    LMInstruct_6b: imageSharp(id: { regex: "/instructions/LMInstruct/LMInstruct_6b.png/" }) {
      sizes(maxWidth: 120) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    LMInstruct_7: imageSharp(id: { regex: "/instructions/LMInstruct/LMInstruct_7.png/" }) {
      sizes(maxWidth: 120) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    LMClean_1: imageSharp(id: { regex: "/instructions/LMClean/LMClean_1.png/" }) {
      sizes(maxWidth: 120) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    LMClean_2: imageSharp(id: { regex: "/instructions/LMClean/LMClean_2.png/" }) {
      sizes(maxWidth: 120) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    LMClean_2b: imageSharp(id: { regex: "/instructions/LMClean/LMClean_2b.png/" }) {
      sizes(maxWidth: 478) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    LMClean_3: imageSharp(id: { regex: "/instructions/LMClean/LMClean_3.png/" }) {
      sizes(maxWidth: 120) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    LMClean_4: imageSharp(id: { regex: "/instructions/LMClean/LMClean_4.png/" }) {
      sizes(maxWidth: 120) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    LMClean_5: imageSharp(id: { regex: "/instructions/LMClean/LMClean_5.png/" }) {
      sizes(maxWidth: 120) {
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
