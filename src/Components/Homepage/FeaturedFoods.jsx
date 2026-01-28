import React, { useState, useEffect } from 'react';
import { Link } from 'react-router'; // Next Link এর বদলে React Router Link
import { FaStar, FaClock, FaFire, FaChevronRight } from "react-icons/fa";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import RecipesCard from '../Card/RecipesCard';



const FeaturedFoods = () => {
   
    const [loading, setLoading] = useState(true);

    useEffect(() => {
     
        const timer = setTimeout(() => {
            
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);


    const { data: foods = [], isLoading } = useQuery({
        queryKey: ["foods"],
        queryFn: async () => {
            const res = await axios.get('http://localhost:3000/recipes/featured');
            return res.data;
        }
    });

   

    if (loading) {
        return <div className="text-center py-20 text-primary font-bold">MealMind is loading recipes...</div>;
    }

    return (
        <section className="py-16 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* --- Header Section --- */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="text-center md:text-left space-y-2">
                        <span className="text-primary font-bold text-sm tracking-widest uppercase italic"># Recommended For You</span>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-800">
                            Trending <span className="text-primary">Recipes</span> Now
                        </h2>
                        <p className="text-slate-500">Personalized picks based on your dietary goals.</p>
                    </div>
                    <Link to="/recipes" className="hidden md:flex items-center gap-2 btn btn-primary btn-sm rounded-xl text-white normal-case">
                        View All <FaChevronRight size={12} />
                    </Link>
                </div>

                {/* --- Food Grid --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {foods.map((food) => <RecipesCard key={food._id} recipe={food}></RecipesCard> ) }
                </div>

                {/* --- Mobile View Button --- */}
                <div className="mt-12 md:hidden flex justify-center">
                    <Link to="/recipes" className="btn btn-primary btn-wide rounded-2xl text-white">
                        See All Recipes
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedFoods;