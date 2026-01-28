import React from 'react';
import {
    Type, ImagePlus, ListTodo, ChefHat, Flame,
    Timer, Tag, Globe, Save, Activity
} from "lucide-react";
import Swal from 'sweetalert2';
import useAuth from '../Hooks/useAuth';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const CreateRecipe = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;


        const recipeData = {
            name: form.name.value,
            category: form.category.value,
            mealType: form.category.value, 
            image: form.image.value,
            prepTime: form.prepTime.value,
            cookTime: form.cookTime.value,
            calories: parseInt(form.calories.value),
            cuisine: form.cuisine.value,
            difficulty: form.difficulty.value,
            rating: 4.5, 
            nutrients: {
                protein: form.protein.value + "g",
                fat: form.fat.value + "g",
                carbs: form.carbs.value + "g"
            },
            ingredients: form.ingredients.value.split(',').map(item => item.trim()),
            instructions: form.instructions.value.split('\n').map(item => item.trim()),
            tags: [form.category.value, "Healthy"],

            email: user?.email,
            createdAt: new Date()
        }


        try {
            const res = await axiosSecure.post('/recipes', recipeData);
            if (res.data.insertedId) {
                Swal.fire({
                    title: "Recipe Published!",
                    text: "Your healthy meal is prepared.",
                    icon: "success",
                    confirmButtonColor: "#3B82F6",
                });
                form.reset();
            }
        } catch (error) {
            console.error("Error:", error);
            Swal.fire("Error", "Could not save the recipe.", "error");
        }
    };

    return (
        <div className="max-w-7xl mx-auto p-6 md:p-12 bg-white rounded-[2.5rem] shadow-xl border border-slate-100 my-10">

            {/* Header */}
            <div className="mb-12">
                <h1 className="text-4xl font-black text-slate-900 tracking-tight">
                    Create New <span className="text-primary">Recipe</span>
                </h1>
                <p className="text-slate-500 mt-2 font-medium text-lg">Enter details to match your database schema.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">

              
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-3">
                        <label className="flex items-center gap-2 text-sm font-bold text-slate-700 uppercase tracking-wider">
                            <Type size={18} className="text-primary" /> Recipe Name
                        </label>
                        <input name="name" type="text" required placeholder="e.g. Tomato Omelette" className="w-full p-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-blue-100 focus:outline-none transition-all font-semibold" />
                    </div>

                    <div className="flex flex-col gap-3">
                        <label className="flex items-center gap-2 text-sm font-bold text-slate-700 uppercase tracking-wider">
                            <ImagePlus size={18} className="text-primary" /> Image URL
                        </label>
                        <input name="image" type="text" required placeholder="https://i.ibb.co/..." className="w-full p-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-blue-100 focus:outline-none transition-all font-semibold" />
                    </div>
                </div>

              
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-slate-50 rounded-[2rem]">
                    <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase">Category</label>
                        <select name="category" className="w-full p-3 bg-white border border-slate-200 rounded-xl text-sm font-bold focus:outline-none">
                            <option>Breakfast</option>
                            <option>Lunch</option>
                            <option>Dinner</option>
                            <option>Snacks</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase">Cuisine</label>
                        <input name="cuisine" type="text" placeholder="Italian" className="w-full p-3 bg-white border border-slate-200 rounded-xl text-sm font-bold focus:outline-none" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase">Prep Time</label>
                        <input name="prepTime" type="text" placeholder="5 min" className="w-full p-3 bg-white border border-slate-200 rounded-xl text-sm font-bold focus:outline-none" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase">Difficulty</label>
                        <select name="difficulty" className="w-full p-3 bg-white border border-slate-200 rounded-xl text-sm font-bold focus:outline-none">
                            <option>Easy</option>
                            <option>Medium</option>
                            <option>Hard</option>
                        </select>
                    </div>
                </div>

          
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-blue-50/50 rounded-[2rem] border border-blue-100/50">
                    <div className="flex flex-col gap-2">
                        <label className="flex items-center gap-2 text-[10px] font-black text-primary uppercase">
                            <Flame size={14} /> Calories
                        </label>
                        <input name="calories" type="number" placeholder="240" className="w-full p-3 bg-white border border-blue-100 rounded-xl text-sm font-bold focus:outline-none" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="flex items-center gap-2 text-[10px] font-black text-primary uppercase">
                            <Activity size={14} /> Protein (g)
                        </label>
                        <input name="protein" type="number" placeholder="16" className="w-full p-3 bg-white border border-blue-100 rounded-xl text-sm font-bold focus:outline-none" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="flex items-center gap-2 text-[10px] font-black text-primary uppercase">
                            Fat (g)
                        </label>
                        <input name="fat" type="number" placeholder="14" className="w-full p-3 bg-white border border-blue-100 rounded-xl text-sm font-bold focus:outline-none" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="flex items-center gap-2 text-[10px] font-black text-primary uppercase">
                            Cook Time
                        </label>
                        <input name="cookTime" type="text" placeholder="10 min" className="w-full p-3 bg-white border border-blue-100 rounded-xl text-sm font-bold focus:outline-none" />
                    </div>
                  
                    <input name="carbs" type="hidden" value="10" />
                </div>

            
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-3">
                        <label className="flex items-center gap-2 text-sm font-bold text-slate-700 uppercase">
                            <ListTodo size={18} className="text-primary" /> Ingredients
                        </label>
                        <textarea name="ingredients" required placeholder="Egg, Tomato, Onion (Separate with commas)" className="w-full p-5 bg-slate-50 border-2 border-transparent rounded-2xl h-40 focus:bg-white focus:border-blue-100 focus:outline-none transition-all font-medium" />
                    </div>

                    <div className="flex flex-col gap-3">
                        <label className="flex items-center gap-2 text-sm font-bold text-slate-700 uppercase">
                            <ChefHat size={18} className="text-primary" /> Instructions
                        </label>
                        <textarea name="instructions" required placeholder="Cook omelette on medium heat..." className="w-full p-5 bg-slate-50 border-2 border-transparent rounded-2xl h-40 focus:bg-white focus:border-blue-100 focus:outline-none transition-all font-medium" />
                    </div>
                </div>

              
                <button type="submit" className="w-full bg-slate-900 text-white py-6 rounded-[2rem] font-black text-xl flex items-center justify-center gap-4 hover:bg-primary transition-all hover:shadow-xl active:scale-[0.98] mt-6">
                    <Save size={24} />
                    Save Recipe For Cook
                </button>
            </form>
        </div>
    );
};

export default CreateRecipe;