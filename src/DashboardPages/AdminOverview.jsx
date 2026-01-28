import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Loading from "../Components/Loading/Loading";
import { Users, Utensils, MessageSquare, Star, ArrowUpRight, Activity } from "lucide-react";

const AdminOverview = () => {
    const axiosSecure = useAxiosSecure();

    
    const { data: stats = {}, isLoading } = useQuery({
        queryKey: ["admin-stats"],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    });

    console.log(stats)

    if (isLoading) return <Loading />;

    const statCards = [
        { id: 1, label: "Total Users", value: stats.users || 0, icon: Users, color: "bg-blue-600", shadow: "shadow-blue-100", textColor: "text-blue-600" },
        { id: 2, label: "Total Recipes", value: stats.recipes || 0, icon: Utensils, color: "bg-emerald-600", shadow: "shadow-emerald-100", textColor: "text-emerald-600" },
        { id: 3, label: "User Reviews", value: stats.reviews || 0, icon: MessageSquare, color: "bg-orange-600", shadow: "shadow-orange-100", textColor: "text-orange-600" },
        { id: 4, label: "Featured Foods", value: stats.featured || 0, icon: Star, color: "bg-amber-500", shadow: "shadow-amber-100", textColor: "text-amber-600" },
    ];

    return (
        <div className="p-6 md:p-10 space-y-10 min-h-screen bg-slate-50/30">
           
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tight">
                        Admin <span className="text-primary underline decoration-sky-500/30">Dashboard</span>
                    </h1>
                    <p className="text-slate-500 font-medium mt-1">Real-time platform performance and statistics.</p>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl shadow-sm border border-slate-100">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    <span className="text-sm font-bold text-slate-600 uppercase tracking-wider">Live System Status</span>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {statCards.map((card) => (
                    <div
                        key={card.id}
                        className={`bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl ${card.shadow} group hover:-translate-y-2 transition-all duration-500 relative overflow-hidden`}
                    >
                        {/* Background Decoration */}
                        <div className={`absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500`}>
                            <card.icon size={120} />
                        </div>

                        <div className="flex justify-between items-start relative z-10">
                            <div className={`p-4 rounded-2xl ${card.color} text-white shadow-lg transform group-hover:rotate-12 transition-transform duration-500`}>
                                <card.icon size={28} />
                            </div>
                            <button className="text-slate-300 hover:text-slate-600 transition-colors">
                                <ArrowUpRight size={20} />
                            </button>
                        </div>

                        <div className="mt-6 relative z-10">
                            <p className="text-4xl font-black text-slate-800 tracking-tighter">
                                {card.value.toLocaleString()}
                            </p>
                            <p className="text-slate-400 font-bold text-sm uppercase tracking-widest mt-1">
                                {card.label}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Quick Insights Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
                <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                            <Activity size={20} />
                        </div>
                        <h2 className="text-xl font-black text-slate-800">Platform Activity</h2>
                    </div>

                    <div className="h-48 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200 flex items-center justify-center">
                        <p className="text-slate-400 font-medium italic">Activity Chart Placeholder (Integrate Recharts here)</p>
                    </div>
                </div>

                <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-2xl font-black mb-4">Quick Tip</h2>
                        <p className="text-slate-400 leading-relaxed font-medium">
                            Keep your platform fresh! Add more <span className="text-primary font-bold">Featured Recipes</span> to increase user engagement on the home page.
                        </p>
                        <button className="mt-8 px-6 py-3 bg-primary text-white font-black rounded-xl hover:bg-white hover:text-slate-900 transition-all active:scale-95">
                            Manage Featured
                        </button>
                    </div>
            
                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
                </div>
            </div>
        </div>
    );
};

export default AdminOverview;