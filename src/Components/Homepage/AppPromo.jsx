import React from 'react';
import { FaPlay, FaApple } from "react-icons/fa";

const AppPromo = () => {
    return (
        <section className="py-20 bg-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               
                <div className="bg-slate-900 rounded-[3.5rem] p-10 lg:p-20 flex flex-col lg:flex-row items-center gap-12 relative border border-white/5 shadow-2xl overflow-hidden">

                    {/* Background Decorative Glows */}
                    <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>
                    <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-orange-500/10 rounded-full blur-[100px]"></div>

                    {/* Content Left */}
                    <div className="flex-1 text-center lg:text-left space-y-8 z-10">
                        <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-primary text-xs font-bold uppercase tracking-widest border border-white/10">
                            Available on Mobile
                        </div>

                        <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight">
                            Your <span className="text-primary">Meal Plan</span> <br />
                            In Your Pocket.
                        </h2>

                        <p className="text-slate-400 text-lg max-w-md mx-auto lg:mx-0 leading-relaxed">
                            Take MealMind anywhere. Track your daily nutrition, sync your weekly planner, and get smart reminders for your next meal.
                        </p>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                            {/* Google Play Button */}
                            <button className="btn btn-lg bg-black text-white border-slate-800 hover:bg-primary hover:border-primary rounded-2xl flex items-center gap-3 px-8 transition-all duration-300 group">
                                <FaPlay className="text-2xl group-hover:scale-110 transition-transform" />
                                <div className="text-left">
                                    <p className="text-[10px] uppercase opacity-60">Get it on</p>
                                    <p className="text-sm font-bold">Google Play</p>
                                </div>
                            </button>

                            {/* App Store Button */}
                            <button className="btn btn-lg bg-black text-white border-slate-800 hover:bg-primary hover:border-primary rounded-2xl flex items-center gap-3 px-8 transition-all duration-300 group">
                                <FaApple className="text-3xl group-hover:scale-110 transition-transform" />
                                <div className="text-left">
                                    <p className="text-[10px] uppercase opacity-60">Download on the</p>
                                    <p className="text-sm font-bold">App Store</p>
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Phone Mockup Right */}
                    <div className="flex-1 relative w-full flex justify-center lg:justify-end">
                        <div className="relative group">
                            {/* Floating Nutrient Card (Section 13: Feature Teaser) */}
                            <div className="absolute top-10 -left-16 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl z-20 border border-white/20 animate-bounce duration-[5000ms] hidden xl:block">
                                <p className="text-[10px] font-black text-primary uppercase">Daily Goal</p>
                                <p className="text-sm font-bold text-slate-800 tracking-tight">85% Nutrition Reached</p>
                            </div>

                            {/* Main Phone Image */}
                            <img
                                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1000&auto=format&fit=crop"
                                alt="MealMind Mobile App"
                                className="relative z-10 w-[280px] h-[540px] rounded-[3rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] rotate-6 group-hover:rotate-0 transition-all duration-700 border-[10px] border-slate-800 object-cover"
                            />

                            {/* Reflection effect on phone */}
                            <div className="absolute inset-0 z-20 rounded-[3rem] bg-gradient-to-tr from-white/10 to-transparent pointer-events-none rotate-6 group-hover:rotate-0 transition-all duration-700"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AppPromo;