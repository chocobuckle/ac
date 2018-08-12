import React from 'react';
import styled from 'styled-components';
import { ContentWrapper, ScalingText, ScalingH2 } from 'helpers/sharedStyles';
import DownloadInstructionsForUse from 'components/DownloadInstructionsForUse';
import OverviewAndInstructionsSharedSection from 'components/OverviewAndInstructionsSharedSection';
import IndicationsForUse from 'components/IndicationsForUse';
import InhalerAnimation from 'components/InhalerAnimation';

const OverviewWrapper = styled.div``;

const AdditionalFeatures = styled.section`
  background: #f5f5f5;

  p {
    margin-bottom: 0.5em;
  }
`;

const Span = styled.span`
  color: #007fc8;
  font-weight: 600;
  font-style: italic;
`;

function Overview({ data, location }) {
  return (
    <OverviewWrapper>
      <OverviewAndInstructionsSharedSection
        headerFirstLine="AeroChamber Plus® Flow-Vu®:"
        headerSecondLine="Seeing Is The Difference"
        subHeaderText="<p>
          <span style='color: #007fc8; font-weight: 600;'>AeroChamber Plus® Flow-Vu®</span> is an anti-static valved holding
          chamber designed with patients in mind. Patients can use an <span style='color: #007fc8; font-weight: 600;'>AeroChamber Plus® Flow-Vu®</span> to help improve medication
          delivery from a metered dose inhaler (MDI).
        </p>
        <p style='margin-bottom: 0;'>
          Watch <span style='font-weight: 600;'>Seeing Is the Difference</span> for a behind-the-scenes look at
          how
          <span style='color: #007fc8; font-weight: 600;'> AeroChamber Plus®</span> is designed, manufactured, and tested:
        </p>"
        macbook={data.macbook}
        bpaAndDishwasherSafe={data.bpaAndDishwasherSafe}
        pathname={location.pathname}
      />
      <InhalerAnimation
        ball1={data.ball1}
        ball2={data.ball2}
        ball3={data.ball3}
        ball4={data.ball4}
        ball5={data.ball5}
        ball6={data.ball6}
        clickyThing1={data.clickyThing1}
        clickyThing2={data.clickyThing2}
        clickyThing3={data.clickyThing3}
        clickyThing4={data.clickyThing4}
        clickyThing5={data.clickyThing5}
        clickyThing6={data.clickyThing6}
        interactiveInhaler={data.interactiveInhaler}
      />
      <AdditionalFeatures>
        <ContentWrapper>
          <ScalingH2>
            Additional Features of <em style={{ color: '#007fc8' }}>AeroChamber Plus® Flow-Vu®</em>
          </ScalingH2>
          <ScalingText>
            <Span>"EZ Flow" Exhalation Valve</Span> - Directs exhaled medication away from the
            patient's face and eyes.<sup>5</sup>
          </ScalingText>
          <ScalingText>
            <Span>Inhalation Valve</Span> - Built-in, low-resistance, 1-way valve opens easily and
            prevents exhalation back into the chamber.
            <sup>5</sup>
          </ScalingText>
          <ScalingText>
            <Span>Anti-static Chamber</Span> - Improves the delivery of MDIs used with AeroChamber®
            due to medication not adhering to chamber walls.<sup>6</sup>
          </ScalingText>
          <ScalingText style={{ color: '#007fc8', marginBottom: 0 }}>
            Not made (or manufactured) with BPA (bisphenol A), phthalates, latex, lead, or PVC<sup>
              1,7
            </sup>
          </ScalingText>
        </ContentWrapper>
      </AdditionalFeatures>
      <DownloadInstructionsForUse
        style={{ borderBottom: '1px solid #000' }}
        download={data.download}
        bear={data.bear}
        smallMask={data.smallMask}
        largeMask={data.largeMask}
      />
      <IndicationsForUse style={{ padding: 0 }} />
    </OverviewWrapper>
  );
}

export const query = graphql`
  query OverviewQuery {
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
    interactiveInhaler: imageSharp(id: { regex: "/overview/interactive_inhaler.png/" }) {
      sizes(maxWidth: 933) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    ball1: imageSharp(id: { regex: "/overview/ball1.png/" }) {
      sizes(maxWidth: 40) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    ball2: imageSharp(id: { regex: "/overview/ball2.png/" }) {
      sizes(maxWidth: 40) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    ball3: imageSharp(id: { regex: "/overview/ball3.png/" }) {
      sizes(maxWidth: 40) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    ball4: imageSharp(id: { regex: "/overview/ball4.png/" }) {
      sizes(maxWidth: 40) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    ball5: imageSharp(id: { regex: "/overview/ball5.png/" }) {
      sizes(maxWidth: 40) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    ball6: imageSharp(id: { regex: "/overview/ball6.png/" }) {
      sizes(maxWidth: 40) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    clickyThing1: imageSharp(id: { regex: "/overview/clicky_thing1.png/" }) {
      sizes(maxWidth: 100) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    clickyThing2: imageSharp(id: { regex: "/overview/clicky_thing2.png/" }) {
      sizes(maxWidth: 100) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    clickyThing3: imageSharp(id: { regex: "/overview/clicky_thing3.png/" }) {
      sizes(maxWidth: 100) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    clickyThing4: imageSharp(id: { regex: "/overview/clicky_thing4.png/" }) {
      sizes(maxWidth: 100) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    clickyThing5: imageSharp(id: { regex: "/overview/clicky_thing5.png/" }) {
      sizes(maxWidth: 100) {
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
        aspectRatio
      }
    }
    clickyThing6: imageSharp(id: { regex: "/overview/clicky_thing6.png/" }) {
      sizes(maxWidth: 100) {
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
  }
`;

export default Overview;
