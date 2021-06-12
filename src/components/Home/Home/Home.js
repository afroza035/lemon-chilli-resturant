import React from 'react';
import Discover from '../Discover/Discover';
import HomeHeader from '../HomeHeader/HomeHeader';
import OurBlog from '../OurBlog/OurBlog';
import OurMenu from '../OurMenu/OurMenu';
import OurStory from '../OurStory/OurStory';
import OurTeam from '../OurTeam/OurTeam';
import QuickReservation from '../QuickReservation/QuickReservation';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <HomeHeader></HomeHeader>
            <Discover></Discover>
            <OurStory></OurStory>
            <OurMenu></OurMenu>
            <QuickReservation></QuickReservation>
            <OurTeam></OurTeam>
            <OurBlog></OurBlog>
            <Review></Review>
        </div>
    );
};

export default Home;