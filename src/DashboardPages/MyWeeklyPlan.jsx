import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Loading from "../Components/Loading/Loading";
import useAuth from "../Hooks/useAuth";
import { Calendar, Clock, Flame, Utensils, Trash2, ArrowRight } from "lucide-react";
import Swal from "sweetalert2";

const MyWeeklyPlan = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { data: myPlans = [], isLoading, refetch } = useQuery({
        queryKey: ["weeklyPlan", user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/weeklyPlan/${user?.email}`);
            return res.data;
        },
        enabled: !!user?.email
    });

    const handleDelete = (id) => {

    
        
    
        Swal.fire({
            title: "Remove from Plan?",
            text: "This will remove the recipe from your weekly schedule.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#f43f5e",
            confirmButtonText: "Yes, Remove"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/weeklyPlan/${id}`);
                if (res.data.deletedCount) {
                    Swal.fire("Removed!", "Plan updated.", "success");
                    refetch();
                }
            }
        });
    };

    if (isLoading) return <Loading />;

    return (
        <div className="p-6 md:p-10 space-y-10">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-black text-slate-900 tracking-tight">
                    My Weekly <span className="text-primary underline decoration-sky-500/30">Meal Plan</span>
                </h1>
                <p className="text-slate-500 font-medium mt-1">Organize your healthy journey week by week.</p>
            </div>

            {myPlans.length === 0 ? (
                <div className="bg-white p-20 rounded-[3rem] border-2 border-dashed border-slate-200 text-center">
                    <Calendar size={48} className="mx-auto text-slate-300 mb-4" />
                    <p className="text-slate-500 font-black italic">No meals planned yet!</p>
                    <button className="mt-4 text-primary font-bold hover:underline">Browse Recipes →</button>
                </div>
            ) : (
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                    {myPlans.map((plan) => (
                        <div key={plan._id} className="bg-white group rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
                            <div className="flex flex-col sm:flex-row">
                                {/* Recipe Image */}
                                <div className="sm:w-48 h-48 sm:h-auto relative overflow-hidden">
                                    <img src={plan.image} alt={plan.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black text-slate-800 uppercase shadow-sm">
                                            {plan.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Plan Details */}
                                <div className="flex-1 p-6 space-y-4">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="px-3 py-1 bg-primary text-white text-[10px] font-black rounded-lg uppercase tracking-widest">
                                                    {plan.day}
                                                </span>
                                                <span className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-black rounded-lg uppercase">
                                                    {plan.mealType}
                                                </span>
                                            </div>
                                            <h2 className="text-xl font-black text-slate-800 leading-tight">{plan.name}</h2>
                                        </div>
                                        
                                    </div>

                                    {/* Stats */}
                                    <div className="flex items-center gap-4 border-y border-slate-50 py-3">
                                        <div className="flex items-center gap-1.5">
                                            <Flame size={14} className="text-orange-500" />
                                            <span className="text-xs font-bold text-slate-600">{plan.calories} kcal</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 border-l pl-4">
                                            <Clock size={14} className="text-sky-500" />
                                            <span className="text-xs font-bold text-slate-600">{plan.prepTime} prep</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 border-l pl-4">
                                            <Utensils size={14} className="text-emerald-500" />
                                            <span className="text-xs font-bold text-slate-600">{plan.difficulty}</span>
                                        </div>
                                    </div>

                                    {/* Footer Button */}
                                    <div className="flex justify-between items-center pt-1">
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest italic">
                                            Added: {plan.addedAt}
                                        </span>
                                        <button onClick={() => handleDelete(plan._id)} className="flex items-center gap-1 text-primary font-black text-xs uppercase hover:gap-2 transition-all">
                                            Delete  <Trash2 size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyWeeklyPlan;