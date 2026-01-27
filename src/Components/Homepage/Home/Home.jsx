import React from 'react';
import HeroSection from '../HeroSection';
import Categories from '../categories';
import FeaturedFoods from '../../FeaturedFoods';
import HowItWorks from '../HowItWorks';
import JoinCommunity from '../JoinCommunity';
import AppPromo from '../AppPromo';
import useAuth from '../../../Hooks/useAuth';

const Home = () => {
    const { user } = useAuth()
    console.log(user)
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