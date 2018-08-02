import React from 'react';
import styled from 'styled-components';
import VimeoPlayer from 'react-player/lib/players/Vimeo';

const VideoPlayerWrapper = styled.div`
  position: relative;
  ${({ activeVideoURL }) =>
    activeVideoURL
      ? `
        width: 71.9%;
        padding-top: 45.8%;
        margin: 0.35% auto -42.5%;
      `
      : `
        width: 52.2vw;
        padding-top: 36.8%;
        margin: 0.35vw auto -31vw;
      `};
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
