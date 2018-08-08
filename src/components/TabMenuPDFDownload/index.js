import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { ContentWrapper, ScalingH2 } from 'helpers/sharedStyles';
import { DownloadImg } from 'components/DownloadInstructionsForUse';

const H2AndDownloadWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin-bottom: 2vw;
`;

const PDFImgAndTextWrapper = styled.div`
  display: flex;
`;

const PDFImg = styled(Img)`
  cursor: pointer;
  margin-right: 2.5vw;
  width: 11.75vw;

  @media screen and (min-width: 996px) {
    margin-right: 24.9px;
    width: 117.016px;
  }
`;

const ScalableLink = styled.a`
  color: #007fc8;
  font-size: 3vw;
  font-style: italic;
  font-weight: 600;
  line-height: 1.35em;
  text-decoration-color: #007fc8;

  @media screen and (min-width: 440px) {
    font-size: 2.5vw;
    line-height: 1.25em;
  }

  @media screen and (min-width: 800px) {
    font-size: 2.4vw;
  }

  @media screen and (min-width: 996px) {
    font-size: 24.5px;
    line-height: 1.3em;
  }
`;

function TabMenuPDFDownload({ style, download, PDFImage, PDFPath, text }) {
  return (
    <ContentWrapper style={style}>
      <H2AndDownloadWrapper>
        <ScalingH2 style={{ marginBottom: 0 }}>Download</ScalingH2>
        <DownloadImg sizes={download.sizes} />
      </H2AndDownloadWrapper>
      <PDFImgAndTextWrapper>
        <PDFImg sizes={PDFImage.sizes} />
        <ScalableLink
          href={PDFPath}
          rel="noopener noreferrer"
          target="_blank"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </PDFImgAndTextWrapper>
    </ContentWrapper>
  );
}

export default TabMenuPDFDownload;
