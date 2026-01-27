import { useRef, useState } from 'react';
import { Plus, Save, ChevronLeft, ChevronRight } from 'lucide-react';
import RecipesModal from '../Components/Card/RecipesModal';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import useAuth from '../Hooks/useAuth';
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const mealTypes = ['Breakfast', 'Lunch', 'Dinner'];

const MealPlanner = () => {
    
    const [planner, setPlanner] = useState({});
    const {user} = useAuth()
   const axiosSecure = useAxiosSecure()
  
    const [selectedSlot, setSelectedSlot] = useState({ day: '', mealType: '' });

    const modalref = useRef(null);

    const handeladdMeal = (day, mealType) => {
   
        setSelectedSlot({ day, mealType });
      
        modalref.current.showModal();
    };

  
    const onSelectRecipe = async(recipe) => {
        console.log(recipe)
        const { day, mealType } = selectedSlot;
 
        console.log(day, "asdf", mealType)
        
        const weeklydata = {
            recipeId: recipe._id,           
            name: recipe.name,
            category: recipe.category,
            image: recipe.image,
            calories: recipe.calories,
            prepTime: recipe.prepTime,
            cookTime: recipe.cookTime,
            difficulty: recipe.difficulty,
            rating: recipe.rating,
        
            nutrients: {
                protein: recipe.nutrients?.protein,
                fat: recipe.nutrients?.fat,
                carbs: recipe.nutrients?.carbs
            },
            ingredients: recipe.ingredients || [],
            instructions: recipe.instructions || [],
            tags: recipe.tags || [],
            day: day,                       
            mealType: mealType,             
            userEmail: user?.email,         
            addedAt: new Date().toLocaleDateString()
        };
 
        console.log(weeklydata)
        
   
        const res = await axiosSecure.post("/weeklyPlan", weeklydata)
           console.log("from data",res.data)
        if (res.data.insertedId) {
            Swal.fire("success","Successfully added in your weekly planner","success")
            modalref.current.close();
        }
        
        
      


    };

    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            <div className="max-w-7xl mx-auto px-4 pt-10">
            
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                    <div>
                        <h1 className="text-4xl font-black text-slate-900 tracking-tight">
                            Meal <span className="text-primary">Planner</span>
                        </h1>
                        <p className="text-slate-500 font-medium">Schedule your weekly meals.</p>
                    </div>
                   
                    <button className="bg-primary hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-primary/30 flex items-center gap-2">
                        <Save size={20} /> Save Weekly Plan
                    </button>
                </div>

                {/* Planner Grid */}
                <div className="overflow-x-auto rounded-[2.5rem] border border-slate-200 shadow-xl bg-white">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-900 text-white">
                                <th className="p-6 font-black uppercase tracking-widest text-xs border-r border-slate-800">Time / Day</th>
                                {days.map(day => (
                                    <th key={day} className="p-6 font-black uppercase tracking-widest text-xs text-center">{day}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {mealTypes.map((mealType) => (
                                <tr key={mealType} className="border-b border-slate-100 last:border-0">
                                    <td className="p-6 font-bold text-slate-900 bg-slate-50/50 border-r border-slate-100">{mealType}</td>

                                    {days.map(day => {
                                        const mealData = planner[day]?.[mealType.toLowerCase()];

                                        return (
                                            <td key={`${day}-${mealType}`} className="p-4 group">
                                                {mealData ? (
                                                    // যদি স্লটে খাবার থাকে তবে এটি দেখাবে
                                                    <div className="relative p-3 bg-primary/5 rounded-2xl border border-primary/20">
                                                        <img src={mealData.image} className="w-full h-20 object-cover rounded-xl mb-2" />
                                                        <p className="text-xs font-bold text-slate-800 truncate">{mealData.name}</p>
                                                        <button onClick={() => {/* Delete logic */ }} className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full"><Trash2 size={12} /></button>
                                                    </div>
                                                ) : (
                                                    // খালি স্লট (ক্লিক করলে হ্যান্ডেলার কল হবে)
                                                    <div
                                                        onClick={() => handeladdMeal(day, mealType)}
                                                        className="min-h-[120px] w-full rounded-2xl border-2 border-dashed border-slate-100 group-hover:border-primary/30 group-hover:bg-primary/5 flex flex-col items-center justify-center transition-all cursor-pointer gap-2 p-2"
                                                    >
                                                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-all">
                                                            <Plus size={20} />
                                                        </div>
                                                        <span className="text-[10px] font-bold text-slate-300 group-hover:text-primary uppercase tracking-tighter">Add Meal</span>
                                                    </div>
                                                )}
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

         
            <RecipesModal
                modalref={modalref}
                selectedSlot={selectedSlot}
                onSelectRecipe={onSelectRecipe}
            />
        </div>
    );
};

export default MealPlanner;