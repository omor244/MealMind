import { Send, User, MessageSquare, Star } from "lucide-react"; 


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
        queryKey: ["reviews"],
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
            date: new Date().toLocaleDateString()
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
        <div className="bg-white rounded-[3rem] shadow-xl p-8 md:p-12 mt-10 mb-20">
            <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
                <MessageSquare className="text-primary" />
                User Reviews ({reviews.length})
            </h3>

       
            {user ? (
                <form onSubmit={handleReviewSubmit} className="mb-12 bg-slate-50 p-6 rounded-[2rem] border border-slate-100">
                    <p className="font-bold text-slate-700 mb-4">How was the {recipeName}?</p>

                   
                    <div className="flex gap-2 mb-6">
                        {[1, 2, 3, 4, 5].map((num) => (
                            <button
                                key={num}
                                type="button"
                                onClick={() => setRating(num)}
                                className={`transition-all ${rating >= num ? 'text-yellow-400 scale-110' : 'text-slate-200'}`}
                            >
                                <Star size={28} fill={rating >= num ? "currentColor" : "none"} />
                            </button>
                        ))}
                    </div>

                    <div className="relative">
                        <textarea
                            name="comment"
                            required
                            placeholder="Tell us about your experience..."
                            className="w-full p-6 bg-white border-2 border-transparent rounded-[1.5rem] h-32 focus:border-primary/20 outline-none transition-all font-medium text-slate-700"
                        />
                        <button type="submit" className="absolute bottom-4 right-4 bg-primary text-white p-3 rounded-xl hover:bg-orange-600 transition-all shadow-lg active:scale-90">
                            <Send size={20} />
                        </button>
                    </div>
                </form>
            ) : (
                <div className="bg-primary/5 p-8 rounded-[2rem] text-center mb-10 border border-dashed border-primary/30">
                    <p className="text-slate-600 font-bold mb-4">Want to share your thoughts?</p>
                    <Link to="/login" className="bg-primary text-white px-8 py-3 rounded-full font-black uppercase text-xs tracking-widest shadow-lg shadow-primary/20">Login to Review</Link>
                </div>
            )}

           
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reviews.length > 0 ? (
                    reviews.map((rev) => (
                        <div key={rev._id} className="p-6 rounded-[2rem] border border-slate-100 bg-white hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-4 mb-4">
                                <img src={rev.userPhoto || "https://i.ibb.co/v3B6pX0/user-placeholder.png"} className="w-12 h-12 rounded-full object-cover border-2 border-primary/10" alt="" />
                                <div>
                                    <h4 className="font-black text-slate-800 text-sm leading-tight">{rev.userName}</h4>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase">{new Date(rev.date).toLocaleDateString()}</p>
                                </div>
                                <div className="ml-auto flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-full">
                                    <Star size={12} className="text-yellow-500 fill-yellow-500" />
                                    <span className="text-xs font-black text-yellow-700">{rev.rating}</span>
                                </div>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed italic">"{rev.comment}"</p>
                        </div>
                    ))
                ) : (
                    <p className="text-slate-400 font-medium italic col-span-2 text-center py-10">No reviews yet. Be the first to try this recipe!</p>
                )}
            </div>
        </div>
    );
};

export default ReviewPage