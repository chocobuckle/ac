import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { ContentWrapper, ScalingH2, ScalingText } from 'helpers/sharedStyles';
import smallMediumPDF from 'static/small_medium_mask_indications.pdf';
// import largeMouthpiecePDF from 'static/large_mask_mouthpiece_indications.pdf';

const H2AndDownloadWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin-bottom: 1.75vw;

  @media screen and (min-width: 996px) {
    margin-bottom: 17.43px;
  }
`;

const BearAndMaskImgWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const DownloadImg = styled(Img)`
  margin-left: 2.75vw;
  position: relative;
  bottom: 1.19vw;
  width: 200%;

  @media screen and (min-width: 996px) {
    margin-left: 27.39px;
    bottom: 11.8524px;
    width: 54.75px;
  }
`;

const BearImg = styled(Img)`
  margin: 0 2vw;
  width: 37.5vw;
`;

const MaskImg = styled(Img)`
  margin: 0 2vw;
  width: 21vw;
`;

function DownloadInstructionsForUse({
  style,
  download,
  bear,
  PDFPath,
  smallMask,
  largeMask
}) {
  return (
    <ContentWrapper style={style}>
      <H2AndDownloadWrapper>
        <ScalingH2 style={{ marginBottom: 0 }}>Download Instructions for Use</ScalingH2>
        <DownloadImg sizes={download.sizes} />
      </H2AndDownloadWrapper>
      <ScalingText>
        Printed in English and Spanish and featuring the child-friendly
        <span> AeroBear®<sup>1</sup>
        </span>
      </ScalingText>
      <BearAndMaskImgWrapper>
        <BearImg sizes={bear.sizes}  />
        <a
          style={{ cursor: 'pointer', margin: '0 auto' }}
          href={smallMediumPDF}
          rel="noopener noreferrer"
          target="_blank">
          <MaskImg sizes={smallMask.sizes} />
        </a>
        <a
          style={{ cursor: 'pointer', margin: '0 auto' }}
          // href={largeMouthpiecePDF}
          rel="noopener noreferrer"
          target="_blank">
          <MaskImg sizes={largeMask.sizes} />
        </a>
      </BearAndMaskImgWrapper>
    </ContentWrapper>
  );
}

export default DownloadInstructionsForUse;
