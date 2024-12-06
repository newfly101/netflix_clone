import React from 'react';

const YouTubeLoad = () => {
    if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
        const script = document.createElement('script');
        script.src = "https://www.youtube.com/iframe_api";
        script.async = true;
        script.onload = () => console.log("YouTube API loaded successfully.");
        script.onerror = () => console.error("Failed to load YouTube API.");
        document.body.appendChild(script);
    }
};

export default YouTubeLoad;