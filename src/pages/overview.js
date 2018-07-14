import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { ContentWrapper } from '../helpers/sharedStyles';

const OverviewWrapper = styled.div`
  line-height: 4.5vw;

  p,
  span,
  ul,
  li,
  b,
  sup,
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
    font-size: 3.9vw;
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
  font-size: 6vw;
  margin-bottom: 1vw;
`;

const H2 = styled.h2`
  font-size: 5.3vw;
  margin-bottom: 2vw;
  span {
    font-size: 5.3vw;
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

const BPAImgAndTextWrapper = styled.div`
  width: 42vw;
`;

const BPAImgAndTextAndMacbookImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BPAImg = styled(Img)`
  max-width: 749px;
  margin-bottom: 2vw;
`;

const MacbookImg = styled(Img)`
  max-width: 886px;
  margin-bottom: 2vw;
  width: 70vw;
`;

const H2AndDownloadWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin-bottom: 2vw;
`;

const DownloadImg = styled(Img)`
  margin-left: 2.75vw;
  width: 7vw;
`;

const BearAndMaskImgWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const BearOrMaskImg = styled(Img)`
  margin: 0 2vw;
`;

const BearImg = BearOrMaskImg.extend`
  width: 37.5vw;
`;
const SmallMaskImg = BearOrMaskImg.extend`
  width: 21vw;
`;
const LargeMaskImg = BearOrMaskImg.extend`
  width: 21vw;
`;

const CautionsList = styled.ul`
  margin-left: none;
`;

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
          <BPAImgAndTextAndMacbookImgWrapper>
            <MacbookImg sizes={data.macbook.sizes} />
            <BPAImgAndTextWrapper>
              <BPAImg sizes={data.bpaAndDishwasherSafe.sizes} />
              <p
                style={{
                  color: '#007fc8',
                  fontSize: '3vw',
                  lineHeight: '1.5em',
                  marginBottom: 0
                }}>
                AeroChamber Plus® Flow-Vu® is dishwasher safe on the top rack at
                temperatures up to 158°F (70°C).
              </p>
            </BPAImgAndTextWrapper>
          </BPAImgAndTextAndMacbookImgWrapper>
        </ContentWrapper>
      </SeeingIsBelieving>
      <AdditionalFeatures>
        <ContentWrapper>
          <H2>
            Additional features of <span>AeroChamber Plus® Flow-Vu®</span> VHC
          </H2>
          <p>
            <span>"EZ Flow" Exhalation Valve</span> - Directs exhaled medication
            away from the patient's face and eyes.<sup>5</sup>
          </p>
          <p>
            <span>Inhalation Valve</span> - Built-in, low-resistance, 1-way
            valve opens easily and prevents exhalation back into the chamber.
            <sup>5</sup>
          </p>
          <p>
            <span>Anti-static Chamber</span> - Improves the delivery of MDIs
            used with AeroChamber® due to medication not adhering to chamber
            walls.<sup>6</sup>
          </p>
          <span>
            Not made (or manufactured) with BPA (bisphenol A), phthalates,
            latex, lead, or PVC<sup>1,7</sup>
          </span>
        </ContentWrapper>
      </AdditionalFeatures>
      <DownloadInstructions>
        <ContentWrapper style={{ borderBottom: '1px solid #000' }}>
          <H2AndDownloadWrapper>
            <H2 style={{ marginBottom: 0 }}>Download Instructions for Use</H2>
            <DownloadImg sizes={data.download.sizes} />
          </H2AndDownloadWrapper>
          <p>
            Printed in English and Spanish and featuring the child-friendly
            <span>
              {' '}
              AeroBear®<sup>1</sup>
            </span>
          </p>
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
          <p>
            This product is intended to be used by patients who are under the
            care or treatment of a physician or licensed healthcare
            professional. The device is intended to be used by these patients to
            administer aerosolized medication from most pressurized Metered Dose
            Inhalers. The intended environments for use include the home,
            hospitals and clinics.
          </p>
          <H2>Cautions:</H2>
          <CautionsList>
            <li>
              PRODUCT MAY BE PERMANENTLY DAMAGED IF BOILED, STERILIZED, OR
              CLEANED IN A DISHWASHER AT TEMPERATURES ABOVE 158°F (70°C).
            </li>
            <li>Do not leave the chamber unattended with children.</li>
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

export default Overview;
