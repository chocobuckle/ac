import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { ContentWrapper } from 'helpers/sharedStyles';

const H2 = styled.h2`
  color: #004899;
  font-size: 5.3vw;
  font-weight: 600;
  margin-bottom: 2vw;
`;

const H2AndDownloadWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin-bottom: 2vw;
`;

const Wrapper = ContentWrapper.extend`
  width: 94.5%;
  padding: 4vw 0;
`;

const PDFImageAndTextWrapper = styled.div`
  display: flex;
`;

const downloadImgStyle = {
  marginLeft: '2.75vw',
  maxWidth: '238px',
  positon: 'relative',
  bottom: '1.55vw',
  width: '6vw'
};

function TabMenuPDFDownload({ download, SMInstructPDF }) {
  return (
    <Wrapper>
      <H2AndDownloadWrapper>
        <H2 style={{ marginBottom: 0 }}>Download</H2>
        <Img sizes={download.sizes} style={{ ...downloadImgStyle }} />
      </H2AndDownloadWrapper>
      <PDFImageAndTextWrapper>
        <Img
          sizes={SMInstructPDF.sizes}
          style={{ maxWidth: '137px', width: '13vw', marginRight: '2.5vw'  }}
        />
        <a
          style={{ fontSize: '3.4vw', width: '60vw'}}
          href="../downloads/small_medium_mask_indications.pdf"
          target="_blank">
          AeroChamber Plus® Flow-Vu® VHC Small Mask/Medium Mask
        </a>
      </PDFImageAndTextWrapper>
    </Wrapper>
  );
}

export default TabMenuPDFDownload;
