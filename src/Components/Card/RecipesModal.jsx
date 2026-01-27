import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Search, PlusCircle, Flame, Activity, X, Loader2 } from "lucide-react";
import { useState } from "react";

const RecipesModal = ({ modalref, onSelectRecipe, selectedSlot }) => {
    const [search, setsearch] = useState("");
    
    const { data: recipes = [], isLoading, isFetching } = useQuery({
        queryKey: ["recipes", search],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:3000/recipes?search=${search}`);
            return res.data;
        },
       
        placeholderData: (previousData) => previousData,
    });

    return (
        <dialog ref={modalref} id="recipes_selection_modal" className="modal modal-bottom sm:modal-middle backdrop-blur-sm">
            <div className="modal-box max-w-4xl w-full p-0 overflow-hidden shadow-2xl rounded-t-[2rem] sm:rounded-[2.5rem] h-[90vh] sm:h-auto flex flex-col">

                {/* Header - Fixed */}
                <div className="bg-slate-900 p-6 sm:p-8 text-white sticky top-0 z-20">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h3 className="text-xl sm:text-2xl font-black">
                                Select <span className="text-primary">Recipe</span>
                            </h3>
                            <p className="text-slate-400 text-xs sm:text-sm mt-1">Choose the best meal for your goal.</p>
                        </div>
                        <form method="dialog">
                            <button className="btn btn-circle btn-sm btn-ghost text-white"><X size={20} /></button>
                        </form>
                    </div>

                    <div className="inline-flex items-center gap-2 bg-primary/20 text-primary border border-primary/30 px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        {selectedSlot?.day} • {selectedSlot?.mealType}
                    </div>
                </div>

                <div className="p-4 sm:p-6 flex-grow overflow-y-auto">
                  
                    <div className="relative mb-6">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            onChange={(e) => setsearch(e.target.value)}
                            type="text"
                            placeholder="Search recipes..."
                            className="w-full pl-11 pr-12 py-3 sm:py-4 bg-slate-50 border border-slate-100 rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm font-medium"
                        />
                       
                        {(isFetching) &&  <>
                        
                            <div className="absolute right-4 top-1/2 -translate-y-1/2">
                                <Loader2 className="animate-spin text-primary" size={20} />
                            </div>
                         </>
                        }
                    </div>

                    
                    {isLoading && recipes.length === 0 ? (
                        <div className="py-20 flex flex-col items-center justify-center space-y-4">
                            <span className="loading loading-spinner loading-lg text-primary"></span>
                            <p className="text-slate-400 font-bold animate-pulse">Fetching delicious recipes...</p>
                        </div>
                    ) : (
                        <>
                         
                            <div className="hidden md:block">
                                <table className="table w-full border-separate border-spacing-y-3">
                                    <thead>
                                        <tr className="text-slate-400 border-none uppercase text-[10px] tracking-widest">
                                            <th className="bg-transparent font-black">Recipe</th>
                                            <th className="bg-transparent font-black">Nutrition</th>
                                            <th className="bg-transparent font-black text-right">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className={isFetching ? "opacity-50 transition-opacity" : "transition-opacity"}>
                                        {recipes.map((recipe) => (
                                            <tr key={recipe._id} className="bg-slate-50 hover:bg-white hover:shadow-md transition-all group">
                                                <td className="rounded-l-2xl border-none">
                                                    <div className="flex items-center gap-4">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={recipe.image} alt={recipe.name} className="object-cover" />
                                                        </div>
                                                        <div className="font-bold text-slate-800 text-sm">{recipe.name}</div>
                                                    </div>
                                                </td>
                                                <td className="border-none">
                                                    <div className="flex gap-4">
                                                        <div className="flex items-center gap-1 text-[11px] font-bold text-orange-600">
                                                            <Flame size={12} fill="currentColor" /> {recipe.calories}
                                                        </div>
                                                        <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-600">
                                                            <Activity size={12} /> {recipe.nutrients?.protein}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="rounded-r-2xl border-none text-right">
                                                    <button
                                                        onClick={() => onSelectRecipe(recipe)}
                                                        className="btn btn-primary btn-sm rounded-xl normal-case font-black shadow-sm"
                                                    >
                                                        Add
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Mobile View */}
                            <div className={`md:hidden space-y-3 ${isFetching ? "opacity-50" : ""}`}>
                                {recipes.map((recipe) => (
                                    <div key={recipe._id} className="bg-slate-50 p-3 rounded-2xl flex items-center gap-3 border border-slate-100">
                                        <img src={recipe.image} className="w-16 h-16 rounded-xl object-cover" alt={recipe.name} />
                                        <div className="flex-grow min-w-0">
                                            <h4 className="font-bold text-slate-800 text-sm truncate">{recipe.name}</h4>
                                            <div className="flex gap-3 mt-1">
                                                <span className="text-[10px] font-bold text-orange-600 flex items-center gap-0.5">
                                                    <Flame size={10} fill="currentColor" /> {recipe.calories}
                                                </span>
                                                <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-0.5">
                                                    <Activity size={10} /> {recipe.nutrients?.protein}
                                                </span>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => onSelectRecipe(recipe)}
                                            className="btn btn-primary btn-sm btn-circle"
                                        >
                                            <PlusCircle size={20} />
                                        </button>
                                    </div>
                                ))}
                            </div>

                            {recipes.length === 0 && !isLoading && (
                                <div className="text-center py-10 text-slate-400 font-medium">
                                    No recipes found for "{search}"
                                </div>
                            )}
                        </>
                    )}
                </div>

                <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
                    {/* <form method="dialog">
                        <button className="btn btn-ghost text-slate-500 font-bold">Close</button>
                    </form> */}
                </div>
            </div>

          
        </dialog>
    );
};

export default RecipesModal;