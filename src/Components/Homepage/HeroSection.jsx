import React from 'react';
import { FaSearch, FaUtensils, FaCalendarAlt } from "react-icons/fa";
import { Link } from 'react-router';

const HeroSection = () => {


    return (
        <section className="relative  bg-white overflow-hidden py-12 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    {/* --- Left Content: Text & Search --- */}
                    <div className="flex-1 text-center lg:text-left space-y-8">
                        <div className="inline-block px-4 py-2 rounded-full bg-orange-50 text-primary font-bold text-sm uppercase tracking-wider">
                            🍳 Smart Meal Planning for 2026
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-black text-slate-800 leading-tight">
                            Master Your Menu <br />
                            <span className="text-primary">Plan Smarter</span> <br />
                            with MealMind.
                        </h1>

                        <p className="text-gray-500 text-lg max-w-xl mx-auto lg:mx-0">
                            Discover personalized recipes, plan your weekly meals, and track your cooking progress with data-driven insights.
                        </p>

                        {/* Search Bar matching Section 7.4 (Recipe Discovery) */}
                        <form className="flex items-center max-w-md mx-auto lg:mx-0 bg-white shadow-2xl shadow-orange-100 rounded-full p-2 border border-base-200">
                            <input
                                type="text"
                                name="search"
                                placeholder="Search by name or ingredient..."
                                className="input border-none focus:outline-none w-full bg-transparent px-6"
                            />
                            <button type="submit" className="btn btn-primary rounded-full text-white px-8 border-none hover:scale-105 transition-all">
                                <FaSearch />
                            </button>
                        </form>

                        {/* Action Buttons for Requirements */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                            <Link to="/recipes" className="flex items-center gap-2 font-bold text-slate-700 hover:text-primary transition-colors">
                                <FaUtensils className="text-primary" /> Browse Recipes
                            </Link>
                            <span className="text-slate-300">|</span>
                            <Link to="/meal-planner" className="flex items-center gap-2 font-bold text-slate-700 hover:text-primary transition-colors">
                                <FaCalendarAlt className="text-primary" /> Weekly Planner
                            </Link>
                        </div>
                    </div>

                    {/* --- Right Content: Hero Image --- */}
                    <div className="flex-1 relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-100/50 rounded-full blur-3xl -z-10 animate-pulse"></div>

                        <div className="relative z-10">
                            <img
                                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop"
                                alt="Personalized Recipes"
                                className="rounded-[3rem] shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 object-cover aspect-square w-full"
                            />

                            {/* Floating Analytics Card (Section 13: Optional Advanced Feature) */}
                            <div className="absolute -bottom-6 -right-6 bg-white p-5 px-8 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce duration-[3000ms] border border-orange-50">
                                <div className="bg-orange-100 p-3 rounded-full text-primary">
                                    <FaUtensils size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-bold uppercase tracking-tighter">Cooking Goal</p>
                                    <p className="text-sm font-black text-slate-800">120 Meals in 2026</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;