import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const OverviewWrapper = styled.div`
  line-height: 4.5vw;

  p,
  span,
  h1,
  h2 {
    font-family: Myriad Pro;
  }

  h1,
  h2 {
    color: #004899;
  }

  p,
  span {
    font-size: 3vw;
    margin-bottom: 2.25vw;
  }

  span {
    color: #007fc8;
  }
`;

const H1Wrapper = styled.div`
  margin: 2vw auto;
  text-align: center;
`;

const H1 = styled.h1`
  font-size: 5vw;
  margin-bottom: 1vw;
`;

const H2 = styled.h2`
  font-size: 3.8vw;
  margin-bottom: 3vw;
  span {
    font-size: 3.8vw;
  }
`;

const SeeingIsBelieving = styled.section`
  text-align: center;
`;
const AdditionalFeatures = styled.section`
  background: #f5f5f5;
`;
const DownloadInstructions = styled.section``;
const IndicationsForUse = styled.section``;

const ContentWrapper = styled.div`
  margin: 0 auto;
  padding: 3vw 0;
  width: 91%;
`;

const BPAAndDishwasherSafeImg = styled(Img)`
  max-width: 187px;
  width: 20vw;
`;

const MacbookImg = styled(Img)`
  bottom: 21vw;
  margin: 0 auto;
  position: absolute;
  width: 60vw;
`;

const AdditionalFeaturesText = styled.p``;
const DownloadInstructionsText = styled.p``;
const IndicationsForUseText = styled.p``;

const BearAndMaskImgWrapper = styled.div``;

const BearOrMaskImg = styled(Img)`
  width: 30%;
`;

const BearImg = BearOrMaskImg.extend``;
const SmallMaskImg = BearOrMaskImg.extend``;
const LargeMaskImg = BearOrMaskImg.extend``;

const CautionsList = styled.ul`
  margin-left: none;
`;
const CautionsListItem = styled.li``;

function Overview({ data }) {
  return (
    <OverviewWrapper>
      <SeeingIsBelieving>
        <ContentWrapper>
          <H1Wrapper>
            <H1>AeroChamber Plus® Flow-Vu®:</H1>
            <H1>Seeing Is The Difference</H1>
          </H1Wrapper>
          <p>
            <span>AeroChamber Plus® Flow-Vu®</span> is an anti-static valved
            holding chamber designed with patients in mind. Patients can use an{' '}
            <span>AeroChamber Plus® Flow-Vu®</span> to help improve medication
            delivery from a metered dose inhaler (MDI).
          </p>
          <p>
            Watch <b>Seeing Is the Difference</b> for a behind-the-scenes look
            at how
            <span> AeroChamber Plus®</span> is designed, manufactured, and
            tested:
          </p>
          <BPAAndDishwasherSafeImg sizes={data.bpaAndDishwasherSafe.sizes} />
          <MacbookImg sizes={data.macbook.sizes} />
        </ContentWrapper>
      </SeeingIsBelieving>
      <AdditionalFeatures>
        <ContentWrapper>
          <H2>
            Additional features of <span>AeroChamber Plus® Flow-Vu®</span> VHC
          </H2>
          <AdditionalFeaturesText>
            <span>
              "EZ Flow" Exhalation Valve
            </span>{' '}
            - Directs exhaled medication away from the patient's face and eyes.5
          </AdditionalFeaturesText>
          <AdditionalFeaturesText>
            <span>Inhalation Valve</span> -
            Built-in, low-resistance, 1-way valve opens easily and prevents
            exhalation back into the chamber.5
          </AdditionalFeaturesText>
          <AdditionalFeaturesText>
            <span>Anti-static Chamber</span>{' '}
            - Improves the delivery of MDIs used with AeroChamber® due to
            medication not adhering to chamber walls.6
          </AdditionalFeaturesText>
          <span>
            Not made (or manufactured) with BPA (bisphenol A), phthalates,
            latex, lead, or PVC1,7
          </span>
        </ContentWrapper>
      </AdditionalFeatures>
      <DownloadInstructions>
        <ContentWrapper style={{ borderBottom: '1px solid #000' }}>
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
        </ContentWrapper>
      </DownloadInstructions>
      <IndicationsForUse>
        <ContentWrapper>
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
        </ContentWrapper>
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
