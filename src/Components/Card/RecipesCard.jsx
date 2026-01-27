import React from 'react';
import { Clock, Flame, Star, ChevronRight } from 'lucide-react';

const RecipesCard = ({ recipe }) => {
    const { name, image, category, calories, rating, prepTime, difficulty, nutrients } = recipe;

    return (
        <div className="group bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col h-full">
            {/* Image Section */}
            <div className="relative h-64 overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Floating Category Badge */}
                <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold px-4 py-2 rounded-full shadow-sm">
                        {category}
                    </span>
                </div>

                {/* Calories Overlay */}
                <div className="absolute bottom-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-lg">
                    <Flame size={14} fill="currentColor" />
                    {calories} kcal
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-slate-800 leading-tight group-hover:text-primary transition-colors line-clamp-2">
                        {name}
                    </h3>
                </div>

                {/* Stats (Time, Rating, Difficulty) */}
                <div className="flex items-center gap-4 text-slate-500 text-sm mb-6">
                    <div className="flex items-center gap-1.5">
                        <Clock size={16} className="text-primary" />
                        <span>{prepTime}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Star size={16} className="text-yellow-400 fill-yellow-400" />
                        <span className="font-bold text-slate-700">{rating}</span>
                    </div>
                    <div className="px-2 py-0.5 bg-slate-100 rounded text-[10px] font-black uppercase tracking-wider">
                        {difficulty}
                    </div>
                </div>

              
                <div className="grid grid-cols-3 gap-2 py-4 border-t border-slate-50 mb-6">
                    <div className="text-center">
                        <p className="text-[10px] text-slate-400 uppercase font-bold">Protein</p>
                        <p className="text-sm font-bold text-slate-700">{nutrients.protein}</p>
                    </div>
                    <div className="text-center border-x border-slate-100">
                        <p className="text-[10px] text-slate-400 uppercase font-bold">Carbs</p>
                        <p className="text-sm font-bold text-slate-700">{nutrients.carbs}</p>
                    </div>
                    <div className="text-center">
                        <p className="text-[10px] text-slate-400 uppercase font-bold">Fat</p>
                        <p className="text-sm font-bold text-slate-700">{nutrients.fat}</p>
                    </div>
                </div>

           
                <button className="mt-auto w-full bg-slate-900 text-white group-hover:bg-primary py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300">
                    View Recipe
                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    );
};

export default RecipesCard;