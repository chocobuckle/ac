import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { ContentWrapper, H2 } from 'helpers/sharedStyles';

const Wrapper = ContentWrapper.extend`
  padding: 4vw 0;
`;

const H2AndDownloadWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin-bottom: 2vw;
`;

const PDFImageAndTextWrapper = styled.div`
  display: flex;
`;

const downloadImgStyle = {
  marginLeft: '2.75vw',
  maxWidth: '238px',
  positon: 'relative',
  bottom: '1.1vw',
  width: '6vw'
};

function TabMenuPDFDownload({ style, download, PDFImage, PDFPath, text }) {
  return (
    <Wrapper style={style}>
      <H2AndDownloadWrapper>
        <H2 style={{ marginBottom: 0 }}>Download</H2>
        <Img sizes={download.sizes} style={{ ...downloadImgStyle }} />
      </H2AndDownloadWrapper>
      <PDFImageAndTextWrapper>
        <Img
          sizes={PDFImage.sizes}
          style={{ cursor: 'pointer', maxWidth: '137px', width: '13vw', marginRight: '2.5vw' }}
        />
        <a
          style={{ color: '#007fc8', cursor: 'pointer', fontSize: '3.4vw', width: '60vw' }}
          href={PDFPath}
          rel="noopener noreferrer"
          target="_blank">
          {text}
        </a>
      </PDFImageAndTextWrapper>
    </Wrapper>
  );
}

export default TabMenuPDFDownload;
