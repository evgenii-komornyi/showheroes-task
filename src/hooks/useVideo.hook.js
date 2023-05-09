import { useRef, useEffect } from 'react';

export const useVideo = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef) {
            videoRef.current.play();
        }
    }, []);

    return videoRef;
};
