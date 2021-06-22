import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Discover from '../Discover/Discover';
import HomeHeader from '../HomeHeader/HomeHeader';
import OurBlog from '../OurBlog/OurBlog';
import OurMenu from '../OurMenu/OurMenu';
import OurStory from '../OurStory/OurStory';
import OurTeam from '../OurTeam/OurTeam';
import QuickReservation from '../QuickReservation/QuickReservation';
import Testimonial from '../Testimonial/Testimonial';

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
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;