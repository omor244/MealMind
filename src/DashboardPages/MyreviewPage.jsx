import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Loading from "../Components/Loading/Loading";
import useAuth from "../Hooks/useAuth";
import { Star, MessageSquare, Trash2, Calendar, Utensils } from "lucide-react";
import Swal from "sweetalert2";

const MyreviewPage = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { data: reviews = [], isLoading, refetch } = useQuery({
        queryKey: ["reviews", user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/reviews/${user?.email}`);
            return res.data;
        },
        enabled: !!user?.email
    });

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This review will be permanently deleted!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#ef4444",
            confirmButtonText: "Yes, Delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/reviews/${id}`);
                if (res.data.deletedCount > 0) {
                    Swal.fire("Deleted!", "Your review has been removed.", "success");
                    refetch();
                }
            }
        });
    };

    if (isLoading) return <Loading />;

    return (
        <div className="p-6 md:p-10 space-y-8">
            {/* Header Section */}
            <div>
                <h1 className="text-3xl font-black text-slate-900 tracking-tight">
                    My <span className="text-primary underline decoration-sky-500/20">Reviews</span>
                </h1>
                <p className="text-slate-500 font-medium mt-1">
                    You have shared <span className="text-slate-800 font-bold">{reviews.length}</span> reviews so far.
                </p>
            </div>

            {reviews.length === 0 ? (
                <div className="bg-white p-20 rounded-[3rem] border-2 border-dashed border-slate-200 text-center">
                    <MessageSquare size={48} className="mx-auto text-slate-300 mb-4" />
                    <p className="text-slate-500 font-black italic">No reviews found!</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review) => (
                        <div key={review._id} className="bg-white p-6 rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300">
                            <div>
                                {/* Recipe Info */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                                        <Utensils size={20} />
                                    </div>
                                    <h2 className="font-black text-slate-800 line-clamp-1">{review.recipeName}</h2>
                                </div>

                                {/* Rating Stars */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={16}
                                            className={i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-slate-200"}
                                        />
                                    ))}
                                </div>

                                {/* Comment */}
                                <div className="relative">
                                    <span className="absolute -left-2 -top-2 text-4xl text-slate-100 font-serif">“</span>
                                    <p className="text-slate-600 font-medium italic relative z-10 pl-2">
                                        {review.comment}
                                    </p>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
                                <div className="flex items-center gap-2 text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                                    <Calendar size={12} />
                                    {review.date}
                                </div>
                                <button
                                    onClick={() => handleDelete(review._id)}
                                    className="p-3 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                                    title="Delete Review"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyreviewPage;