import React from 'react';
import { Link } from 'react-router'; // Next Link-এর বদলে React Router Link
import { FaArrowRight, FaUsers } from 'react-icons/fa';

const JoinCommunity = () => {
    return (
        <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto bg-primary rounded-[3.5rem] overflow-hidden relative shadow-2xl shadow-orange-200/50">

                {/* Background Decorative Elements */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full -mr-24 -mt-24 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-12 -mb-12 blur-2xl"></div>

                <div className="flex flex-col lg:flex-row items-center gap-12 p-10 lg:p-24 relative z-10">

                    {/* Left Side: Image with Badge */}
                    <div className="flex-1 relative group">
                        <div className="absolute inset-0 bg-white/20 rounded-[2.5rem] rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
                        <img
                            src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=1000"
                            alt="Friendly Male Chef"
                            className="relative rounded-[2.5rem] shadow-2xl w-full max-w-md mx-auto object-cover border-4 border-white/30 -rotate-3 group-hover:rotate-0 transition-transform duration-500 h-[450px]"
                        />

                        {/* Floating Stats Badge - Section 11 (UI/UX) */}
                        <div className="absolute -bottom-6 -right-2 bg-white p-5 rounded-3xl shadow-2xl hidden md:flex items-center gap-4 border border-orange-50 animate-bounce duration-[4000ms]">
                            <div className="bg-primary/10 p-3 rounded-2xl text-primary">
                                <FaUsers size={24} />
                            </div>
                            <div>
                                <p className="text-slate-900 font-black text-2xl tracking-tighter">10k+</p>
                                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Active Planners</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Content - Adjusted for MealMind Requirements */}
                    <div className="flex-1 text-center lg:text-left text-white space-y-8">
                        <div className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-widest border border-white/30">
                            Community Driven
                        </div>

                        <h2 className="text-4xl lg:text-6xl font-black leading-[1.1]">
                            Plan Together. <br />
                            Live <span className="text-slate-900">Healthier</span> With Us.
                        </h2>

                        <p className="text-orange-50 text-lg opacity-90 max-w-lg leading-relaxed">
                            Join thousands of users who have transformed their kitchen experience.
                            Share your weekly meal plans, discover community favorites, and reach your nutrition goals.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 pt-6">
                            <Link
                                to="/register"
                                className="btn bg-slate-900 text-white hover:bg-black border-none rounded-2xl px-10 font-black text-lg shadow-2xl h-16 normal-case"
                            >
                                Start Your Journey
                            </Link>
                            <Link
                                to="/recipes"
                                className="btn btn-ghost border-2 border-white/50 text-white hover:bg-white hover:text-primary rounded-2xl px-10 font-bold h-16 normal-case"
                            >
                                Explore Recipes <FaArrowRight className="ml-2" />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default JoinCommunity;