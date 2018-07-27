import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { ContentWrapper } from 'helpers/sharedStyles';
import smallMediumPDF from 'static/small_medium_mask_indications.pdf';
// import largeMouthpiecePDF from 'static/large_mask_mouthpiece_indications.pdf';

const H2 = styled.h2`
  color: #004899;
  font-size: 5.3vw;
  font-weight: 600;
  margin-bottom: 2vw;
  span {
    font-size: 5.3vw;
  }
`;

const H2AndDownloadWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin-bottom: 2vw;
`;

const BearAndMaskImgWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const bearImgStyle = {
  margin: '0 2vw',
  width: '37.5vw'
};

const downloadImgStyle = {
  marginLeft: '2.75vw',
  width: '7vw'
};

const maskImgStyle = {
  margin: '0 2vw',
  width: '21vw'
};

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
        <H2 style={{ marginBottom: 0 }}>Download Instructions for Use</H2>
        <Img sizes={download.sizes} style={{ ...downloadImgStyle }} />
      </H2AndDownloadWrapper>
      <p>
        Printed in English and Spanish and featuring the child-friendly
        <span>
          {' '}
          AeroBear®<sup>1</sup>
        </span>
      </p>
      <BearAndMaskImgWrapper>
        <Img sizes={bear.sizes} style={{ ...bearImgStyle }} />
        <a
          style={{ cursor: 'pointer', margin: '0 auto' }}
          href={smallMediumPDF}
          rel="noopener noreferrer"
          target="_blank">
          <Img sizes={smallMask.sizes} style={{ ...maskImgStyle }} />
        </a>
        <a
          style={{ cursor: 'pointer', margin: '0 auto' }}
          // href={largeMouthpiecePDF}
          rel="noopener noreferrer"
          target="_blank">
          <Img sizes={largeMask.sizes} style={{ ...maskImgStyle }} />
        </a>
      </BearAndMaskImgWrapper>
    </ContentWrapper>
  );
}

export default DownloadInstructionsForUse;
