import React from 'react';

import { VideoContainer } from './video.styles';

import { useVideo } from '../../hooks/useVideo.hook';

import VideoSource from '../../assets/video/Video.mp4';

export const Video = () => {
    const videoRef = useVideo();

    return (
        <VideoContainer ref={videoRef} src={VideoSource} muted>
            Your browser does not support the video tag.
        </VideoContainer>
    );
};
