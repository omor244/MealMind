import React, { useState, useEffect } from 'react';
import { Link } from 'react-router'; // Next Link এর বদলে React Router Link
import { FaStar, FaClock, FaFire, FaChevronRight } from "react-icons/fa";


const fakeFoods = [
    {
        _id: "1",
        name: "Avocado & Quinoa Salad",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000",
        price: 12.99,
        rating: 4.8,
        prepTime: "15 min",
        calories: "320 kcal",
        category: "Healthy"
    },
    {
        _id: "2",
        name: "Grilled Salmon Steak",
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1000",
        price: 18.50,
        rating: 4.9,
        prepTime: "25 min",
        calories: "450 kcal",
        category: "Main Course"
    },
    {
        _id: "3",
        name: "Berry Protein Smoothie",
        image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?q=80&w=1000",
        price: 8.00,
        rating: 4.7,
        prepTime: "5 min",
        calories: "210 kcal",
        category: "Beverage"
    },
    {
        _id: "4",
        name: "Mushroom Risotto",
        image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=1000",
        price: 14.00,
        rating: 4.6,
        prepTime: "30 min",
        calories: "380 kcal",
        category: "Italian"
    }
];

const FeaturedFoods = () => {
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
     
        const timer = setTimeout(() => {
            setFoods(fakeFoods);
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

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
                    {foods.map((food) => (
                        <div key={food._id} className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                            {/* Image Container */}
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={food.image}
                                    alt={food.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black text-primary uppercase shadow-sm">
                                    {food.category}
                                </div>
                            </div>

                            {/* Details Content */}
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-2">
                                    <div className="flex items-center gap-1 text-orange-400">
                                        <FaStar size={14} />
                                        <span className="text-sm font-bold text-slate-700">{food.rating}</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-slate-400">
                                        <FaFire size={14} className="text-red-400" />
                                        <span className="text-[11px] font-bold">{food.calories}</span>
                                    </div>
                                </div>

                                <h3 className="text-lg font-black text-slate-800 mb-4 line-clamp-1 group-hover:text-primary transition-colors">
                                    {food.name}
                                </h3>

                                <div className="flex justify-between items-center pt-4 border-t border-slate-50">
                                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                                        <FaClock />
                                        <span>{food.prepTime}</span>
                                    </div>
                                    <p className="text-xl font-black text-slate-900">${food.price}</p>
                                </div>

                                <button className="btn btn-primary btn-block mt-6 rounded-2xl text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                    Add to Plan
                                </button>
                            </div>
                        </div>
                    ))}
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