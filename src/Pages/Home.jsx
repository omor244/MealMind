import React from 'react';
import HeroSection from '../Components/Homepage/HeroSection';
import Categories from '../Components/Homepage/categories';
import FeaturedFoods from '../Components/FeaturedFoods';
import HowItWorks from '../Components/Homepage/HowItWorks';
import JoinCommunity from '../Components/Homepage/JoinCommunity';
import AppPromo from '../Components/Homepage/AppPromo';
import useAuth from '../Hooks/useAuth';

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