import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Loading from "../Components/Loading/Loading";
import { Trash2, MessageSquare, Star, User, Utensils } from "lucide-react";
import Swal from "sweetalert2";

const ReviewManagement = () => {
    const axiosSecure = useAxiosSecure();

    const { data: reviews = [], refetch, isLoading } = useQuery({
        queryKey: ["reviews"],
        queryFn: async () => {
            const res = await axiosSecure(`/review`);
            return res.data;
        }
    });

   
    const handleDeleteReview = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This review will be permanently removed!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#ef4444",
            cancelButtonColor: "#64748b",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await axiosSecure.delete(`/reviews/${id}`);
                    if (res.data.deletedCount > 0) {
                        Swal.fire("Deleted!", "Review has been removed.", "success");
                        refetch();
                    }
                } catch (error) {
                    Swal.fire("Error", "Failed to delete review", "error");
                }
            }
        });
    };

    if (isLoading) return <Loading />;

    return (
        <div className="p-6 md:p-10">
            {/* Header Area */}
            <div className="mb-10">
                <h1 className="text-3xl font-black text-slate-900 tracking-tight">
                    Review <span className="text-primary">Moderation</span>
                </h1>
                <p className="text-slate-500 font-medium">Manage and monitor all user feedback for recipes.</p>
            </div>

            {/* Total Count Badge */}
            <div className="mb-6 flex items-center gap-2 bg-slate-100 w-fit px-4 py-2 rounded-xl text-slate-600 font-bold text-sm">
                <MessageSquare size={16} /> {reviews.length} Total Reviews
            </div>

            {/* Table Container */}
            <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="table w-full border-separate border-spacing-0">
                        <thead className="bg-slate-900 text-white">
                            <tr>
                                <th className="p-5 text-left font-bold uppercase text-xs tracking-widest">Reviewer</th>
                                <th className="p-5 text-left font-bold uppercase text-xs tracking-widest">Recipe</th>
                                <th className="p-5 text-left font-bold uppercase text-xs tracking-widest">Rating & Comment</th>
                                <th className="p-5 text-center font-bold uppercase text-xs tracking-widest rounded-tr-[2rem]">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {reviews.map((review) => (
                                <tr key={review._id} className="hover:bg-slate-50/50 transition-colors">
                                    {/* User Info */}
                                    <td className="p-5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                                                <User size={20} />
                                            </div>
                                            <div>
                                                <p className="font-black text-slate-800 text-sm leading-tight">{review.userName || "Guest User"}</p>
                                                <p className="text-[10px] text-slate-400 font-bold uppercase">{review.userEmail}</p>
                                            </div>
                                        </div>
                                    </td>

                                    {/* Recipe Info */}
                                    <td className="p-5">
                                        <div className="flex items-center gap-2 text-slate-600 font-bold text-sm">
                                            <Utensils size={14} className="text-primary" />
                                            {review.recipeName || "Unknown Recipe"}
                                        </div>
                                    </td>

                                    {/* Rating and Text */}
                                    <td className="p-5 max-w-xs">
                                        <div className="flex items-center gap-1 mb-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    size={12}
                                                    className={i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-slate-200"}
                                                />
                                            ))}
                                            <span className="text-[10px] font-black text-slate-400 ml-1">({review.rating}/5)</span>
                                        </div>
                                        <p className="text-sm text-slate-500 font-medium line-clamp-2 italic">
                                            "{review.comment}"
                                        </p>
                                    </td>

                                    {/* Action */}
                                    <td className="p-5 text-center">
                                        <button
                                            onClick={() => handleDeleteReview(review._id)}
                                            className="p-3 bg-red-50 text-red-500 rounded-2xl hover:bg-red-500 hover:text-white transition-all shadow-sm active:scale-95"
                                            title="Delete Review"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {reviews.length === 0 && (
                        <div className="text-center py-20 text-slate-400 font-bold italic">
                            No reviews found in the database.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ReviewManagement;