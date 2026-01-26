import React from 'react';
import HeroSection from '../HeroSection';
import Categories from '../categories';
import FeaturedFoods from '../../FeaturedFoods';
import HowItWorks from '../HowItWorks';
import JoinCommunity from '../JoinCommunity';
import AppPromo from '../AppPromo';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Categories></Categories>
            <FeaturedFoods></FeaturedFoods>
            <JoinCommunity></JoinCommunity>
            <HowItWorks></HowItWorks>
            <AppPromo></AppPromo>
        </div>
    );
};

export default Home;