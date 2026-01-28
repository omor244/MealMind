import { useQuery } from "@tanstack/react-query";
import Loading from "../Components/Loading/Loading";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAuth from "../Hooks/useAuth";
import { Trash2, Edit, PlusCircle, Tag, Globe, ChevronDown } from "lucide-react";
import Swal from "sweetalert2";
import { useState } from "react";

const CategoryCuisineManager = () => {
    const axiosSecure = useAxiosSecure();
    const [category, setcategory] = useState("")
    const { user } = useAuth();

   
    const { data: categories = [], isLoading, refetch } = useQuery({
        queryKey: ["categories", user?.email],
        queryFn: async () => {
            const res = await axiosSecure('/recipes'); 
            return res.data;
        }
    });


 
    const handleUpdateCategory = async (id) => {
         
        console.log(id,"ads", category)
       
        try {
            const res = await axiosSecure.patch(`/category/recipes/${id}`, { category: category });
            console.log(res.data)
            if (res.data.modifiedCount) {
                Swal.fire({
                    title: "Updated!",
                    text: "Category has been changed successfully.",
                    icon: "success",
                    timer: 1500,
                    showConfirmButton: false
                });
                refetch();
            }
        } catch (error) {
            Swal.fire("Error", "Update failed", "error");
        }
    };

   

    if (isLoading) return <Loading />;

    return (
        <div className="p-6 md:p-10">
      
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight">
                        Category & <span className="text-primary">Cuisine</span>
                    </h1>
                    <p className="text-slate-500 font-medium italic">Organize how users find your recipes.</p>
                </div>
                <button className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-2xl font-bold hover:bg-primary transition-all shadow-lg active:scale-95">
                    <PlusCircle size={20} /> Add New Category
                </button>
            </div>

           
            <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="table w-full border-collapse">
                        <thead className="bg-slate-900 text-white">
                            <tr>
                                <th className="p-5 text-left rounded-tl-[2rem] font-bold uppercase text-[10px] tracking-widest">Recipe / Item</th>
                                <th className="p-5 text-left font-bold uppercase text-[10px] tracking-widest text-center">Current Cuisine</th>
                                <th className="p-5 text-left font-bold uppercase text-[10px] tracking-widest">Change Category</th>
                                <th className="p-5 text-center rounded-tr-[2rem] font-bold uppercase text-[10px] tracking-widest">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {categories.map((item) => (
                                <tr key={item._id} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="p-5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400">
                                                <Tag size={18} />
                                            </div>
                                            <span className="font-black text-slate-800">{item.name}</span>
                                        </div>
                                    </td>

                                    <td className="p-5">
                                        <div className="flex items-center justify-center gap-2 text-slate-500 font-bold">
                                            <Globe size={14} className="text-primary" />
                                            {item.cuisine || "International"}
                                        </div>
                                    </td>

                                    <td className="p-5">
                                        <div className="relative w-48 group">
                                            <select
                                                defaultValue={item.category}
                                                onChange={(e) => setcategory(e.target.value)}
                                                className="w-full appearance-none bg-slate-50 border-2 border-transparent focus:border-blue-100 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-tighter text-slate-600 cursor-pointer outline-none"
                                            >
                                                <option value="Breakfast">Breakfast</option>
                                                <option value="Lunch">Lunch</option>
                                                <option value="Dinner">Dinner</option>
                                                <option value="Snacks">Snacks</option>
                                                <option value="Dessert">Dessert</option>
                                            </select>
                                            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                                        </div>
                                    </td>

                                    <td className="p-5">
                                        <div className="flex items-center justify-center gap-2">
                                            <button  onClick={() => handleUpdateCategory(item._id)} className="p-2 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                                                <Edit size={18} />
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

export default CategoryCuisineManager;