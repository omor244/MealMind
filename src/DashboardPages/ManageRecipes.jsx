import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Loading from "../Components/Loading/Loading";
import useAuth from "../Hooks/useAuth";
import { Trash2, Edit3, ChevronDown } from "lucide-react";
import Swal from "sweetalert2";
import { useState } from "react";

const ManageRecipes = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [status, setstatus] = useState("")

    const { data: recipes = [], isLoading, refetch } = useQuery({
        queryKey: ["recipes", user?.email],
        queryFn: async () => {
            const res = await axiosSecure('/recipes');
            return res.data;
        }
    });

   
    const handleStatusUpdate = async (id, newStatus) => {
   
                    console.log(id, "asdf", status)
        return
        try {
            const res = await axiosSecure.patch(`/recipes/${id}`, { status: newStatus });
            if (res.data.modifiedCount > 0) {
                Swal.fire("Updated!", `Recipe is now ${newStatus}`, "success");
                refetch();
            }
        } catch (error) {
            console.error(error);
        }
    };

    
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#ef4444",
            cancelButtonColor: "#64748b",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/recipes/${id}`);
                if (res.data.deletedCount > 0) {
                    Swal.fire("Deleted!", "Recipe has been removed.", "success");
                    refetch();
                }
            }
        });
    };

    if (isLoading) return <Loading />;

    return (
        <div className="p-6 md:p-10">
          
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight">Manage <span className="text-primary">Recipes</span></h1>
                    <p className="text-slate-500 font-medium">Review, update status, or remove recipes from the database.</p>
                </div>
                <div className="bg-primary/10 px-6 py-2 rounded-2xl border border-primary/20">
                    <span className="text-primary font-bold text-lg">{recipes.length} Total Recipes</span>
                </div>
            </div>

            {/* Table Container */}
            <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="table w-full border-collapse">
                        {/* Table Head */}
                        <thead className="bg-slate-900 text-white">
                            <tr>
                                <th className="p-5 text-left rounded-tl-[2rem]">Recipe</th>
                                <th className="p-5 text-left">Category</th>
                                <th className="p-5 text-left">Calories</th>
                                <th className="p-5 text-left">Status</th>
                                <th className="p-5 text-center rounded-tr-[2rem]">Actions</th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody className="divide-y divide-slate-100">
                            {recipes.map((recipe) => (
                                <tr key={recipe._id} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="p-5">
                                        <div className="flex items-center gap-4">
                                            <div className="w-14 h-14 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                                                <img src={recipe.image} alt={recipe.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <p className="font-black text-slate-800 leading-tight">{recipe.name}</p>
                                                <p className="text-xs text-slate-400 font-bold uppercase mt-1">{recipe.cuisine || 'International'}</p>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="p-5">
                                        <span className="px-4 py-1.5 bg-slate-100 text-slate-600 rounded-full text-xs font-black uppercase tracking-wider">
                                            {recipe.category}
                                        </span>
                                    </td>

                                    <td className="p-5 font-bold text-slate-600">
                                        {recipe.calories} kcal
                                    </td>

                                    <td className="p-5">
                                        <div className="relative group">
                                            <select
                                                onChange={(e) => setstatus( e.target.value)}
                                                defaultValue={recipe?.status || "Planned"}
                                                className="appearance-none bg-emerald-50 text-emerald-700 px-4 py-2 pr-10 rounded-xl text-sm font-black border border-emerald-100 focus:outline-none cursor-pointer hover:bg-emerald-100 transition-all uppercase tracking-tighter"
                                            >
                                                <option value="Planned">Planned</option>
                                                <option value="Cooking">Cooking</option>
                                                <option value="Cooked">Cooked</option>
                                            </select>
                                            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-600 pointer-events-none" />
                                        </div>
                                    </td>

                                    <td className="p-5">
                                        <div className="flex items-center justify-center gap-2">
                                            <button onClick={() => handleStatusUpdate(recipe._id)} className="p-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                                                <Edit3 size={18} />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(recipe._id)}
                                                className="p-3 bg-red-50 text-red-600 rounded-xl hover:bg-red-600 hover:text-white transition-all shadow-sm"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageRecipes;