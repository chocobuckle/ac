import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const OverviewWrapper = styled.div`
  width: 100%;
`;

const H1Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 3vw;
  margin: 2vw auto 0;
`;

const H1 = styled.h1`
  font-family: Myriad Pro;
  font-size: 5vw;
  color: #004899;
  color: rgb(0, 72, 153);
  margin-bottom: 1vw;
`;

const AdditionalFeatures = styled.div`
  background: #f5f5f5;
  background: rgba(245, 245, 245, 1);
  width: 100%;
  line-height: 4.5vw;
`;

const TextWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 3vw;
  font-family: Myriad Pro;
  p,
  span {
    font-size: 3vw;
    margin-bottom: 2.25vw;
  }
`;

const H2 = styled.h2`
  font-size: 3.8vw;
  margin-bottom: 3vw;
  color: #004899;
  color: rgb(0, 72, 153);
  span {
    font-size: 3.5vw;
    color: #007fc8;
    color: rgb(0, 127, 200);
  }
`;

const DishWasherSafeAndMacbookWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;
const BPAAndDishwasherSafeImg = styled(Img)`
  max-width: 187px;
  width: 20vw;
`;
const MacbookImg = styled(Img)`
  margin: 0 auto;
  width: 60vw;
  position: absolute;
  bottom: 21vw;
`;

const AdditionalFeaturesText = styled.p``;
const DownloadInstructionsText = styled.p``;
const IndicationsForUseText = styled.p``;
const SubHeaderText = styled.p`
  text-align: center;
  width: 100%;
  margin: 0 auto;
  span {
    color: #007fc8;
    color: rgb(0, 127, 200);
  }
`;

const AdditionalFeaturesSpan = styled.span`
  color: #007fc8;
  color: rgb(0, 127, 200);
`;

const DownloadInstructions = styled.div`
  width: 100%;
  line-height: 4.5vw;
`;

const BearAndMaskImgWrapper = styled.div`
  width: 100%;
`;

const BearOrMaskImg = styled(Img)`
  width: 30%;
`;
const BearImg = BearOrMaskImg.extend``;
const SmallMaskImg = BearOrMaskImg.extend``;
const LargeMaskImg = BearOrMaskImg.extend``;

const IndicationsForUse = styled.div`
  width: 100%;
  line-height: 4.5vw;
`;

const CautionsList = styled.ul`
  margin-left: none;
`;

const CautionsListItem = styled.li``;

function Overview({ data }) {
  return (
    <OverviewWrapper>
      <H1Wrapper>
        <H1>AeroChamber Plus® Flow-Vu®:</H1>
        <H1>Seeing Is The Difference</H1>
      </H1Wrapper>
      <TextWrapper>
        <SubHeaderText>
          <span>AeroChamber Plus® Flow-Vu®</span> is an anti-static valved
          holding chamber designed with patients in mind. Patients can use an{' '}
          <span>AeroChamber Plus® Flow-Vu®</span> to help improve medication
          delivery from a metered dose inhaler (MDI).
        </SubHeaderText>
        <SubHeaderText>
          Watch <b>Seeing Is the Difference</b> for a behind-the-scenes look at how
          <span> AeroChamber Plus®</span> is designed, manufactured, and tested:
        </SubHeaderText>
      </TextWrapper>
      <DishWasherSafeAndMacbookWrapper>
        <BPAAndDishwasherSafeImg sizes={data.bpaAndDishwasherSafe.sizes} />
        <MacbookImg sizes={data.macbook.sizes} />
      </DishWasherSafeAndMacbookWrapper>
      <AdditionalFeatures>
        <TextWrapper>
          <H2>
            Additional features of <span>AeroChamber Plus® Flow-Vu®</span> VHC
          </H2>
          <AdditionalFeaturesText>
            <AdditionalFeaturesSpan>
              "EZ Flow" Exhalation Valve
            </AdditionalFeaturesSpan>{' '}
            - Directs exhaled medication away from the patient's face and eyes.5
          </AdditionalFeaturesText>
          <AdditionalFeaturesText>
            <AdditionalFeaturesSpan>Inhalation Valve</AdditionalFeaturesSpan> -
            Built-in, low-resistance, 1-way valve opens easily and prevents
            exhalation back into the chamber.5
          </AdditionalFeaturesText>
          <AdditionalFeaturesText>
            <AdditionalFeaturesSpan>Anti-static Chamber</AdditionalFeaturesSpan>{' '}
            - Improves the delivery of MDIs used with AeroChamber® due to
            medication not adhering to chamber walls.6
          </AdditionalFeaturesText>
          <AdditionalFeaturesSpan>
            Not made (or manufactured) with BPA (bisphenol A), phthalates,
            latex, lead, or PVC1,7
          </AdditionalFeaturesSpan>
        </TextWrapper>
      </AdditionalFeatures>
      <DownloadInstructions>
        <TextWrapper>
          <H2>Download Instructions for Use</H2>
          <DownloadInstructionsText>
            Printed in English and Spanish and featuring the child-friendly
            AeroBear®1
          </DownloadInstructionsText>
          <BearAndMaskImgWrapper>
            <BearImg sizes={data.bear.sizes} />
            <SmallMaskImg sizes={data.smallMask.sizes} />
            <LargeMaskImg sizes={data.largeMask.sizes} />
          </BearAndMaskImgWrapper>
        </TextWrapper>
      </DownloadInstructions>
      <IndicationsForUse>
        <TextWrapper>
          <H2>Indications For Use</H2>
          <IndicationsForUseText>
            This product is intended to be used by patients who are under the
            care or treatment of a physician or licensed healthcare
            professional. The device is intended to be used by these patients to
            administer aerosolized medication from most pressurized Metered Dose
            Inhalers. The intended environments for use include the home,
            hospitals and clinics.
          </IndicationsForUseText>
          <H2>Cautions:</H2>
          <CautionsList>
            <CautionsListItem>
              PRODUCT MAY BE PERMANENTLY DAMAGED IF BOILED, STERILIZED, OR
              CLEANED IN A DISHWASHER AT TEMPERATURES ABOVE 158°F (70°C).
            </CautionsListItem>
            <CautionsListItem>
              Do not leave the chamber unattended with children.
            </CautionsListItem>
          </CautionsList>
          <b>Please see Instructions for Use</b>
        </TextWrapper>
      </IndicationsForUse>
    </OverviewWrapper>
  );
}

export const query = graphql`
  query OverviewQuery {
    bpaAndDishwasherSafe: imageSharp(
      id: { regex: "/overview/bpa_and_dishwasher_safe.png/" }
    ) {
      sizes(maxWidth: 187) {
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
      sizes(maxWidth: 412) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    smallMask: imageSharp(
      id: { regex: "/overview/small_mask_and_medium_mask.png/" }
    ) {
      sizes(maxWidth: 412) {
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
      sizes(maxWidth: 412) {
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

export default Overview;
