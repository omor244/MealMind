import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Loading from "../Components/Loading/Loading";
import { MessageSquare, Star, Heart, Calendar, User, Mail } from "lucide-react";
import useAuth from "../Hooks/useAuth";

const UserOverview = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    
    const { data: stats = {}, isLoading } = useQuery({
        queryKey: ["user-stats", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user-stats/${user?.email}`);
            return res.data;
        },
        enabled: !!user?.email 
    });

    if (isLoading) return <Loading />;

    return (
        <div className="p-6 md:p-10 space-y-10 min-h-screen bg-slate-50/30">
          
            <div>
                <h1 className="text-4xl font-black text-slate-900 tracking-tight">
                    My <span className="text-primary">Dashboard</span>
                </h1>
                <p className="text-slate-500 font-medium mt-1 italic uppercase text-xs tracking-widest">
                    Welcome back, {user?.displayName}!
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
                <div className="lg:col-span-1 bg-white p-8 rounded-[3rem] shadow-xl border border-slate-100 flex flex-col items-center">
                    <div className="relative group">
                        <img
                            src={user?.photoURL || "https://i.ibb.co/5GzXkwq/user.png"}
                            alt="Profile"
                            className="w-32 h-32 rounded-[2.5rem] object-cover border-4 border-white shadow-2xl transition-transform group-hover:scale-105"
                        />
                        <div className="absolute -bottom-2 -right-2 bg-primary p-2 rounded-xl text-white shadow-lg">
                            <User size={18} />
                        </div>
                    </div>

                    <h2 className="mt-6 text-2xl font-black text-slate-800">{user?.displayName}</h2>
                    <p className="text-slate-400 font-bold flex items-center gap-2 mt-1">
                        <Mail size={14} /> {user?.email}
                    </p>

                    <div className="w-full mt-8 pt-8 border-t border-slate-50 grid grid-cols-2 gap-4 text-center">
                        <div className="bg-slate-50 p-4 rounded-2xl">
                            <p className="text-2xl font-black text-slate-800">{stats.reviewsCount || 0}</p>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Reviews</p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-2xl">
                            <p className="text-2xl font-black text-slate-800">0</p>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Favorites</p>
                        </div>
                    </div>
                </div>

        
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white p-8 rounded-[3rem] shadow-xl border border-slate-100 h-full">
                        <h3 className="text-xl font-black text-slate-800 mb-8 flex items-center gap-3">
                            <Calendar className="text-primary" /> Activity Summary
                        </h3>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-6 bg-blue-50/50 rounded-[2rem] border border-blue-100/50 group hover:bg-blue-50 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-blue-500 text-white rounded-xl shadow-lg">
                                        <MessageSquare size={20} />
                                    </div>
                                    <div>
                                        <p className="font-black text-slate-800">Reviews Written</p>
                                        <p className="text-xs text-slate-500 font-bold italic">Total feedback you shared</p>
                                    </div>
                                </div>
                                <span className="text-3xl font-black text-blue-600">{stats.reviewsCount || 0}</span>
                            </div>

                            <div className="flex items-center justify-between p-6 bg-rose-50/50 rounded-[2rem] border border-rose-100/50 group hover:bg-rose-50 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-rose-500 text-white rounded-xl shadow-lg">
                                        <Heart size={20} />
                                    </div>
                                    <div>
                                        <p className="font-black text-slate-800">Favorite Recipes</p>
                                        <p className="text-xs text-slate-500 font-bold italic">Recipes you loved</p>
                                    </div>
                                </div>
                                <span className="text-3xl font-black text-rose-600">0</span>
                            </div>
                        </div>

                        <div className="mt-10 p-6 bg-slate-900 rounded-[2rem] text-white">
                            <p className="text-sm font-bold text-slate-400 italic">"Good food is the foundation of genuine happiness."</p>
                            <button className="mt-4 text-xs font-black uppercase tracking-widest text-primary hover:text-white transition-colors">
                                Write a new review →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserOverview;