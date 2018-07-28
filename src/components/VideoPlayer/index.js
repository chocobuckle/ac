import React from 'react';
import styled from 'styled-components';
import VimeoPlayer from 'react-player/lib/players/Vimeo';

const VideoPlayerWrapper = styled.div`
  margin: ${({ activeVideoURL }) => activeVideoURL ? '0.35vw auto -38.5vw' : '0.35vw auto -31vw'};
  padding-top: ${({ activeVideoURL }) => activeVideoURL ? '45.8%' : '36.8%'};
  position: relative;
  width: ${({ activeVideoURL }) => activeVideoURL ? '65.4vw' : '52.2vw'};
`;

function VideoPlayer({ activeVideoURL, handleVideoLoading }) {
  return (
    <VideoPlayerWrapper activeVideoURL={activeVideoURL}>
      <VimeoPlayer
        url={activeVideoURL || 'https://vimeo.com/281972542'}
        playing
        loop
        onReady={() => handleVideoLoading()}
        width="100%"
        height="100%"
        style={{
          position: 'absolute',
          left: 0,
          bottom: activeVideoURL ? '24.575vw' : '20.625vw'
        }}
      />
    </VideoPlayerWrapper>
  );
}

export default VideoPlayer;
