import React from 'react';
import HeroSection from '../components/HeroSection';
import MissionSection from '../components/MissionSection';
import VideoPlayer from '../components/VideoPlayer';
import SponsorSection from '../components/SponsorSection';

const Home = () => {
    return (
        <>
            <HeroSection />
            <MissionSection />
            <VideoPlayer />
            <SponsorSection />
        </>
    );
};

export default Home;
