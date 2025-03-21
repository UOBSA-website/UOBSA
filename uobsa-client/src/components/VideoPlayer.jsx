import React, { useRef, useState } from 'react';
import '../styles/Home.css';
import videoFile from "../assets/uobsa_vid.mp4";

const VideoPlayer = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [progress, setProgress] = useState(0);
    const [showControls, setShowControls] = useState(false);

    const togglePlay = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    const toggleMute = () => {
        videoRef.current.muted = !videoRef.current.muted;
        setIsMuted(videoRef.current.muted);
    };

    const handleProgress = () => {
        const percentage = (videoRef.current.currentTime / videoRef.current.duration) * 100;
        setProgress(percentage);
    };

    const handleSeek = (e) => {
        const newTime = (e.target.value / 100) * videoRef.current.duration;
        videoRef.current.currentTime = newTime;
        setProgress(e.target.value);
    };

    return (
        <div 
            className="video-section"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
        >
            <video
                ref={videoRef}
                width="765"
                height="450"
                onTimeUpdate={handleProgress}
                autoPlay
                muted
                loop
                playsInline
            >
                <source src={videoFile} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Custom Controls */}
            {showControls && (
                <div className="video-controls">
                    <button className="play-button" onClick={togglePlay}>
                        {isPlaying ? "⏸️" : "▶️"}
                    </button>
                    <input 
                        type="range" 
                        className="progress-bar"
                        value={progress}
                        onChange={handleSeek}
                        min="0"
                        max="100"
                    />
                    <button className="mute-button" onClick={toggleMute}>
                        {isMuted ? "🔊" : "🔇"}
                    </button>
                </div>
            )}
        </div>
    );
};

export default VideoPlayer;
