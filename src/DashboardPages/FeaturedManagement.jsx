import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Loading from "../Components/Loading/Loading";
import { Star, Flame, PlusCircle, CheckCircle } from "lucide-react";
import Swal from "sweetalert2";

const FeaturedManagement = () => {
    const axiosSecure = useAxiosSecure();

    const { data: recipes = [], isLoading, refetch } = useQuery({
        queryKey: ["recipes-featured"],
        queryFn: async () => {
            const res = await axiosSecure('/recipes');
            return res.data;
        }
    });

   
    const handleAddToFeatured = async (id, currentStatus) => {
        try {
            const res = await axiosSecure.post(`/recipes/featured/${id}`, {
                isFeatured: !currentStatus
            });

            if (res.data.modifiedCount > 0) {
                Swal.fire({
                    title: currentStatus ? "Removed!" : "Added to Featured!",
                    text: currentStatus ? "Recipe removed from home spotlight" : "This recipe will now show on Home page",
                    icon: "success",
                    timer: 1500,
                    showConfirmButton: false
                });
                refetch();
            }
        } catch (error) {
            Swal.fire("Error", "Something went wrong!", "error");
        }
    };

    if (isLoading) return <Loading />;

    return (
        <div className="p-6 md:p-10">
           
            <div className="mb-10 flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight">
                        Featured <span className="text-primary">Management</span>
                    </h1>
                    <p className="text-slate-500 font-medium">Promote your best recipes to the home page spotlight.</p>
                </div>
                <div className="bg-yellow-400 text-slate-900 px-6 py-2 rounded-2xl font-black flex items-center gap-2 shadow-lg shadow-yellow-200">
                    <Star size={18} fill="currentColor" />
                    {recipes.filter(r => r.isFeatured).length} Featured Items
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="table w-full border-separate border-spacing-0">
                        <thead className="bg-slate-900 text-white">
                            <tr>
                                <th className="p-5 text-left rounded-tl-[2rem] font-bold uppercase text-[10px] tracking-widest">Recipe Details</th>
                                <th className="p-5 text-left font-bold uppercase text-[10px] tracking-widest">Category</th>
                                <th className="p-5 text-left font-bold uppercase text-[10px] tracking-widest">Calories</th>
                                <th className="p-5 text-center rounded-tr-[2rem] font-bold uppercase text-[10px] tracking-widest">Promote</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {recipes.map((recipe) => (
                                <tr key={recipe._id} className="hover:bg-slate-50 transition-colors">
                                    <td className="p-5">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl overflow-hidden shadow-sm">
                                                <img src={recipe.image} alt="" className="w-full h-full object-cover" />
                                            </div>
                                            <span className="font-black text-slate-800">{recipe.name}</span>
                                        </div>
                                    </td>
                                    <td className="p-5">
                                        <span className="px-3 py-1 bg-slate-100 text-slate-500 rounded-full text-[10px] font-black uppercase">
                                            {recipe.category}
                                        </span>
                                    </td>
                                    <td className="p-5">
                                        <div className="flex items-center gap-2 text-slate-400 font-bold text-xs">
                                            <Flame size={14} className="text-orange-400" /> {recipe.calories} kcal
                                        </div>
                                    </td>
                                    <td className="p-5 text-center">
                                        {recipe.isFeatured ? (
                                            <button
                                                onClick={() => handleAddToFeatured(recipe._id, true)}
                                                className="flex items-center gap-2 mx-auto px-5 py-2 bg-emerald-50 text-emerald-600 rounded-xl font-black text-xs border border-emerald-100 hover:bg-red-50 hover:text-red-600 hover:border-red-100 transition-all group"
                                            >
                                                <CheckCircle size={16} className="group-hover:hidden" />
                                                <span className="group-hover:hidden tracking-tighter uppercase">Featured Now</span>
                                                <span className="hidden group-hover:block tracking-tighter uppercase">Remove Now</span>
                                            </button>
                                        ) : (
                                            <button
                                                onClick={() => handleAddToFeatured(recipe._id, false)}
                                                className="flex items-center gap-2 mx-auto px-5 py-2 bg-slate-900 text-white rounded-xl font-black text-xs hover:bg-primary hover:shadow-lg transition-all active:scale-95"
                                            >
                                                <PlusCircle size={16} />
                                                <span className="tracking-tighter uppercase">Add to Featured</span>
                                            </button>
                                        )}
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

export default FeaturedManagement;