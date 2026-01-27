import  { useRef, useState } from 'react';
import { Calendar, Plus, Trash2, Info, Save, ChevronLeft, ChevronRight } from 'lucide-react';
import RecipesModal from '../Components/Card/RecipesModal';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const mealTypes = ['Breakfast', 'Lunch', 'Dinner'];

const MealPlanner = () => {
    
    const [planner, setPlanner] = useState({});
    const modalref = useRef(null)

    const handeladdMeal = () => {
       console.log("adding")
       
        modalref.current.showModal();

    }

    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            <div className="max-w-7xl mx-auto px-4 pt-10">

               
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                    <div>
                        <h1 className="text-4xl font-black text-slate-900 tracking-tight">
                            Meal <span className="text-primary">Planner</span>
                        </h1>
                        <p className="text-slate-500 font-medium">Schedule your weekly meals and monitor your nutrition.</p>
                    </div>

                    <div className="flex items-center gap-4 bg-white p-2 rounded-2xl shadow-sm border border-slate-100">
                        <button className="p-2 hover:bg-slate-50 rounded-xl transition-colors"><ChevronLeft size={20} /></button>
                        <span className="font-bold text-slate-700 px-2">Jan 26 - Feb 01, 2026</span>
                        <button className="p-2 hover:bg-slate-50 rounded-xl transition-colors"><ChevronRight size={20} /></button>
                    </div>

                    <button className="bg-primary hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-primary/30 flex items-center gap-2 transition-all active:scale-95">
                        <Save size={20} />
                        Save Weekly Plan
                    </button>
                </div>

                {/* Planner Grid */}
                <div className="overflow-x-auto rounded-[2.5rem] border border-slate-200 shadow-xl bg-white">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-900 text-white">
                                <th className="p-6 font-black uppercase tracking-widest text-xs border-r border-slate-800">Time / Day</th>
                                {days.map(day => (
                                    <th key={day} className="p-6 font-black uppercase tracking-widest text-xs text-center">
                                        {day}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {mealTypes.map((mealType) => (
                                <tr key={mealType} className="border-b border-slate-100 last:border-0">
                                    <td className="p-6 font-bold text-slate-900 bg-slate-50/50 border-r border-slate-100">
                                        <div className="flex flex-col">
                                            <span>{mealType}</span>
                                            <span className="text-[10px] text-slate-400 font-normal italic">Recommend: 400-600 kcal</span>
                                        </div>
                                    </td>

                                    {days.map(day => (
                                        <td key={`${day}-${mealType}`} className="p-4 group">
                                            
                                            <div onClick={() => handeladdMeal()} className="min-h-[120px] w-full rounded-2xl border-2 border-dashed border-slate-100 group-hover:border-primary/30 group-hover:bg-primary/5 flex flex-col items-center justify-center transition-all cursor-pointer gap-2 p-2">
                                                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-all">
                                                    <Plus size={20} />
                                                </div>
                                                <span className="text-[10px] font-bold text-slate-300 group-hover:text-primary uppercase tracking-tighter">Add Meal</span>
                                            </div>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div  className="bg-white p-8 rounded-[2rem] shadow-lg border border-slate-100 flex items-center gap-6">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary font-black text-xl">
                            0
                        </div>
                        <div>
                            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Total Calories</p>
                            <p className="text-2xl font-black text-slate-900">0 / 14,000 kcal</p>
                        </div>
                    </div>
                   
                </div>

            </div>


           <RecipesModal modalref={modalref}></RecipesModal>
          
        </div>
    );
};

export default MealPlanner;