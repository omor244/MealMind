import React from 'react';
import { Link } from 'react-router';
import { Flame, Clock, Star, Plus } from 'lucide-react';

const RecipesCard = ({ recipe }) => {
    
    const { _id, name, image, category, calories, rating, prepTime, difficulty, nutrients } = recipe;

    return (
        <div className="group bg-white rounded-[2rem] border border-slate-100 shadow-lg shadow-slate-200/50 overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 flex flex-col h-full">

           
            <div className="relative h-60 overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

               
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1">
                    <Star size={14} className="text-yellow-500 fill-yellow-500" />
                    <span className="text-slate-800 font-bold text-sm">{rating}</span>
                </div>

               
                <div className="absolute bottom-4 left-4 bg-slate-900/70 backdrop-blur-md px-3 py-1 rounded-lg">
                    <span className="text-white text-[10px] font-bold uppercase tracking-wider">{difficulty}</span>
                </div>
            </div>

            
            <div className="p-6 flex flex-col flex-grow">
             
                <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] font-extrabold text-primary uppercase tracking-widest bg-primary/10 px-2.5 py-1 rounded-md">
                        {category}
                    </span>
                    <div className="flex items-center gap-1 text-slate-400 font-bold text-xs">
                        <Flame size={14} className="text-orange-500" />
                        {calories} kcal
                    </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-800 mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                    {name}
                </h3>

                {/* Nutrients Brief */}
                <div className="flex gap-3 mb-6">
                    <div className="bg-slate-50 px-3 py-1 rounded-lg border border-slate-100">
                        <span className="text-[10px] text-slate-400 block uppercase font-bold">Protein</span>
                        <span className="text-xs font-bold text-slate-700">{nutrients.protein}</span>
                    </div>
                    <div className="bg-slate-50 px-3 py-1 rounded-lg border border-slate-100">
                        <span className="text-[10px] text-slate-400 block uppercase font-bold">Carbs</span>
                        <span className="text-xs font-bold text-slate-700">{nutrients.carbs}</span>
                    </div>
                </div>

                {/* Footer Section: Time & View Button */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-50 mt-auto">
                    <div>
                        <span className="text-xs text-slate-400 block font-medium">Prep Time</span>
                        <div className="flex items-center gap-1 text-slate-900 font-black">
                            <Clock size={16} className="text-primary" />
                            <span>{prepTime}</span>
                        </div>
                    </div>

                    {/* View Details Link */}
                    <Link to={`/recipes/${_id}`}>
                        <button className="h-12 w-12 bg-primary flex items-center justify-center rounded-full shadow-lg shadow-primary/30 text-white hover:rotate-90 hover:scale-110 transition-all duration-500">
                            <Plus size={24} strokeWidth={3} />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RecipesCard;