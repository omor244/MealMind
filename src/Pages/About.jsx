import React from 'react';
import { Target, Heart, ShieldCheck, Users } from 'lucide-react';

const About = () => {
    const features = [
        { icon: <Target className="text-primary" />, title: "Precision Planning", desc: "Organize your meals with day-wise precision to meet your fitness goals." },
        { icon: <Heart className="text-red-500" />, title: "Health First", desc: "Monitor calories and nutrients with our curated recipe database." },
        { icon: <ShieldCheck className="text-emerald-500" />, title: "Reliable Data", desc: "All our nutritional information is verified by culinary experts." },
        { icon: <Users className="text-blue-500" />, title: "Community Driven", desc: "Built for people who value time and health in their busy lives." }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="bg-slate-900 py-20 px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                    Our <span className="text-primary">Mission</span>
                </h1>
                <p className="max-w-2xl mx-auto text-slate-400 text-lg">
                    We believe that healthy eating shouldn't be complicated. Our Meal Planner is designed to bridge the gap between busy schedules and nutritious meals.
                </p>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-4 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((f, i) => (
                        <div key={i} className="p-8 rounded-[2rem] border border-slate-100 bg-slate-50 hover:shadow-xl transition-all">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
                                {f.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-20 bg-primary/5 rounded-[3rem] p-10 md:p-20 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                        <h2 className="text-3xl font-black text-slate-900 mb-6">How it Works?</h2>
                        <ul className="space-y-4">
                            <li className="flex gap-4">
                                <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">1</span>
                                <p className="text-slate-600 font-medium font-medium">Browse our extensive library of healthy recipes.</p>
                            </li>
                            <li className="flex gap-4">
                                <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">2</span>
                                <p className="text-slate-600 font-medium">Add them to your Weekly Planner with a single click.</p>
                            </li>
                            <li className="flex gap-4">
                                <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">3</span>
                                <p className="text-slate-600 font-medium font-medium">Track your total calorie intake automatically.</p>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <img
                            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600"
                            className="rounded-[2.5rem] shadow-2xl"
                            alt="Healthy Food"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;