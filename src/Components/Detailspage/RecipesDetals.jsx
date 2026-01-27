import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams, useNavigate } from "react-router";
import { Clock, Flame, ArrowLeft, Star, Utensils, CheckCircle2 } from "lucide-react";
import Loading from "../Loading/Loading";


const RecipesDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { data: recipe = {}, isLoading } = useQuery({
        queryKey: ["recipes", id],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:3000/recipes/${id}`);
            return res.data;
        }
    });

    if (isLoading) return <Loading />;

    const { name, image, category, calories, rating, prepTime, cookTime, difficulty, ingredients, nutrients, instructions } = recipe;

    return (
        <div className="min-h-screen bg-slate-50 pb-20">
          
            <div className="relative h-[400px] w-full">
                <img src={image} alt={name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>

             
                <button
                    onClick={() => navigate(-1)}
                    className="absolute top-6 left-6 bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-white hover:text-slate-900 transition-all shadow-lg"
                >
                    <ArrowLeft size={24} />
                </button>
            </div>

           
            <div className="max-w-6xl mx-auto px-4 -mt-32 relative z-10">
                <div className="bg-white rounded-[3rem] shadow-xl p-8 md:p-12">

                 
                    <div className="flex flex-col md:flex-row justify-between items-start gap-6 border-b border-slate-100 pb-8">
                        <div className="space-y-3">
                            <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
                                {category}
                            </span>
                            <h1 className="text-4xl md:text-5xl font-black text-slate-900">{name}</h1>
                            <div className="flex items-center gap-4 text-slate-500">
                                <div className="flex items-center gap-1.5 text-yellow-500">
                                    <Star size={20} fill="currentColor" />
                                    <span className="font-bold text-slate-700">{rating}</span>
                                </div>
                                <span>•</span>
                                <div className="px-3 py-1 bg-slate-100 rounded-md text-[10px] font-bold uppercase tracking-tighter">
                                    {difficulty}
                                </div>
                            </div>
                        </div>

                     
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full md:w-auto">
                            <div className="bg-slate-50 p-4 rounded-2xl text-center border border-slate-100">
                                <Clock className="mx-auto text-primary mb-1" size={20} />
                                <p className="text-[10px] text-slate-400 font-bold uppercase">Time</p>
                                <p className="font-bold text-slate-800">{prepTime}</p>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-2xl text-center border border-slate-100">
                                <Flame className="mx-auto text-orange-500 mb-1" size={20} />
                                <p className="text-[10px] text-slate-400 font-bold uppercase">Calories</p>
                                <p className="font-bold text-slate-800">{calories} kcal</p>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-2xl text-center border border-slate-100 hidden sm:block">
                                <Utensils className="mx-auto text-emerald-500 mb-1" size={20} />
                                <p className="text-[10px] text-slate-400 font-bold uppercase">Servings</p>
                                <p className="font-bold text-slate-800">1 Person</p>
                            </div>
                        </div>
                    </div>


                    <div className="py-10">
                        <h3 className="text-xl font-black text-slate-900 mb-6">Nutritional Facts</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {Object.entries(nutrients || {}).map(([key, value]) => (
                                <div key={key} className="relative p-6 rounded-3xl border border-slate-100 bg-white hover:border-primary/30 transition-colors">
                                    <p className="text-slate-400 text-xs font-bold uppercase mb-1">{key}</p>
                                    <p className="text-2xl font-black text-slate-900">{value}</p>
                                    <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary/40"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-10 border-t border-slate-50">
                      
                        <div className="lg:col-span-1">
                            <h3 className="text-2xl font-black text-slate-900 mb-6">Ingredients</h3>
                            <ul className="space-y-4">
                                {ingredients?.map((item, index) => (
                                    <li key={index} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-transparent hover:border-slate-200 transition-all">
                                        <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center border border-slate-200">
                                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                                        </div>
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                   
                        <div className="lg:col-span-2">
                            <h3 className="text-2xl font-black text-slate-900 mb-6">Preparation Steps</h3>
                            <div className="space-y-8">
                                {instructions?.map((step, index) => (
                                    <div key={index} className="flex gap-6 group">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm group-hover:bg-primary transition-colors">
                                            {index + 1}
                                        </div>
                                        <div className="pt-1">
                                            <p className="text-slate-600 leading-relaxed text-lg">
                                                {step}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                  
                    <div className="mt-16 flex justify-center">
                        <button className="bg-primary hover:bg-orange-600 text-white px-10 py-5 rounded-2xl font-black text-lg shadow-xl shadow-primary/30 transition-all flex items-center gap-3 active:scale-95">
                            <CheckCircle2 size={24} />
                            Add to My Weekly Plan
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipesDetails;