import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import YouTubeLoad from "../../utils/YouTubeLoad";

const YoutubePlayer = (props) => {
    const {videoId, width, height} = props;
    const videoRef = useRef(null);

    const dimensions = useMemo(() => ({width, height}), [width, height]);
    const getDefaultOptions = useCallback(() => ({
        autoplay:1,             // 자동 재생 여부 (0: 비활성화, 1: 활성화)
        controls:0,             // 플레이어 컨트롤 표시 여부 (0: 숨김, 1: 표시)
        loop:1,                 // 동영상 반복 여부 (1: 반복)
        mute:1,                 // 음소거 상태로 시작 여부 (1: 음소거)
        options: {allow:0,autoplay:1, fullscreen:1},
        title:"Youtube Video",
        loading:"lazy",
        playerVars: {
            rel: 0,             // 재생 후 관련 동영상 표시 여부 (0: 표시 안 함)
            showinfo: 0,        // 동영상 정보 표시 여부 (0: 숨김)
            modestbranding: 1,  // YouTube 로고 최소화 (1: 최소화)
            origin: window.location.origin, // 현재 origin 설정
            enablejsapi: 1, // JavaScript API 활성화
        }
    }), []);

    useEffect(() => {
        YouTubeLoad();
        const defaultOptions = getDefaultOptions();

        window.onYouTubeIframeAPIReady = () => {
            console.log("YouTubeIframeAPIReady, videoId:",videoId);
            videoRef.current = new window.YT.Player('youtube-player', {
                videoId,
                playerVars: {
                    autoplay: defaultOptions.autoplay,
                    controls: defaultOptions.controls,
                    loop: defaultOptions.loop,
                    playlist: defaultOptions.loop ? videoId : undefined,
                    mute: defaultOptions.mute,
                    ...defaultOptions.playerVars,
                },
                ...dimensions,
            });
        };
        return () => {
            if (videoRef.current) {
                videoRef.current.destroy();
            }
        };
    }, [videoId, dimensions, getDefaultOptions]);

    return <div id="youtube-player"/>;
};

export default YoutubePlayer;
