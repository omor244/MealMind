import React from 'react';
import HeroSection from '../Components/Homepage/HeroSection';
import Categories from '../Components/Homepage/categories';
import FeaturedFoods from '../Components/Homepage/FeaturedFoods';
import HowItWorks from '../Components/Homepage/HowItWorks';
import JoinCommunity from '../Components/Homepage/JoinCommunity';
import AppPromo from '../Components/Homepage/AppPromo';


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