import { Send, MessageSquare, Star, XCircle } from "lucide-react";
import Swal from "sweetalert2";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router";

const ReviewPage = ({ recipeId, recipeName }) => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [rating, setRating] = useState(5);

    const { data: reviews = [], refetch } = useQuery({
        queryKey: ["reviews", recipeId], // recipeId কি-তে থাকা ভালো যাতে অন্য রেসিপির রিভিউ না দেখায়
        queryFn: async () => {
            const res = await axiosSecure(`/review/${recipeId}`);
            return res.data;
        }
    });

    const handleReviewSubmit = async (e) => {
        e.preventDefault();
        if (!user) return Swal.fire("Login Required", "Please login to review", "warning");

        const comment = e.target.comment.value;
        const reviewData = {
            recipeId,
            recipeName,
            userName: user?.displayName,
            userEmail: user?.email,
            userPhoto: user?.photoURL,
            rating,
            comment,
            date: new Date().toISOString() // ISO স্ট্রিং ব্যবহার করা ভালো
        };

        const res = await axiosSecure.post('/review', reviewData);
        if (res.data.insertedId) {
            Swal.fire({
                icon: 'success',
                title: 'Review Posted!',
                showConfirmButton: false,
                timer: 1500
            });
            e.target.reset();
            refetch();
        }
    };

    return (
       
        <div className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-xl  md:p-12 mt-6 md:mt-10 mb-10 md:mb-20  max-w-7xl">
            <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-6 md:mb-8 flex items-center gap-3">
                <MessageSquare className="text-primary w-5 h-5 md:w-6 md:h-6" />
                User Reviews ({reviews.length})
            </h3>

            {user ? (
                <form onSubmit={handleReviewSubmit} className="mb-8 md:mb-12 bg-slate-50 p-0 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-slate-100">
                    <p className="font-bold text-slate-700 mb-4 text-sm md:text-base">How was the {recipeName}?</p>

                    <div className="flex gap-1 md:gap-2 mb-6">
                        {[1, 2, 3, 4, 5].map((num) => (
                            <button
                                key={num}
                                type="button"
                                onClick={() => setRating(num)}
                                className={`transition-all ${rating >= num ? 'text-yellow-400 scale-110' : 'text-slate-200'}`}
                            >
                                <Star size={24} className="md:w-7 md:h-7" fill={rating >= num ? "currentColor" : "none"} />
                            </button>
                        ))}
                    </div>

                    <div className="relative">
                        <textarea
                            name="comment"
                            required
                            placeholder="Tell us about your experience..."
                            className=" p-4 md:p-6 bg-white border-2 border-transparent rounded-[1rem] md:rounded-[1.5rem] h-28 md:h-32 focus:border-primary/20 outline-none transition-all font-medium text-slate-700 text-sm md:text-base shadow-sm"
                        />
                        <button type="submit" className="absolute bottom-3 right-3 bg-primary text-white p-2.5 md:p-3 rounded-xl hover:bg-orange-600 transition-all shadow-lg active:scale-90">
                            <Send size={18} className="md:w-5 md:h-5" />
                        </button>
                    </div>
                </form>
            ) : (
                <div className="bg-primary/5 p-6 md:p-10 rounded-[1.5rem] md:rounded-[2rem] text-center mb-10 border border-dashed border-primary/30">
                    <p className="text-slate-600 font-bold mb-4 text-sm md:text-base">Want to share your thoughts?</p>
                    <Link to="/login" className="inline-block bg-primary text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full font-black uppercase text-[10px] md:text-xs tracking-widest shadow-lg shadow-primary/20">Login to Review</Link>
                </div>
            )}

        
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                {reviews.length > 0 ? (
                    reviews.map((rev) => (
                        <div key={rev._id} className="p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] border border-slate-100 bg-white hover:shadow-md transition-shadow flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-3 md:gap-4 mb-4">
                                    <img
                                        src={rev.userPhoto || "https://i.ibb.co/v3B6pX0/user-placeholder.png"}
                                        className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-primary/10 shadow-sm"
                                        alt={rev.userName}
                                    />
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-black text-slate-800 text-xs md:text-sm leading-tight truncate">{rev.userName}</h4>
                                        <p className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase">{new Date(rev.date).toLocaleDateString()}</p>
                                    </div>
                                    <div className="flex items-center gap-1 bg-yellow-50 px-2.5 py-1 rounded-full shrink-0">
                                        <Star size={10} className="text-yellow-500 fill-yellow-500 md:w-3 md:h-3" />
                                        <span className="text-[10px] md:text-xs font-black text-yellow-700">{rev.rating}</span>
                                    </div>
                                </div>
                                <p className="text-slate-600 text-xs md:text-sm leading-relaxed italic line-clamp-4">"{rev.comment}"</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="lg:col-span-2 text-center py-10">
                        <p className="text-slate-400 font-medium italic text-sm">No reviews yet. Be the first to try this recipe!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ReviewPage;