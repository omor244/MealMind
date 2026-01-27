
import { LayoutDashboard, Calendar, Utensils, Heart, User, LogOut, TrendingUp, Plus } from 'lucide-react';
import useAuth from '../Hooks/useAuth';
import DashboardNavber from '../Dashboard/DashboardNavber/DashboardNavber';

const Dashboard = () => {

    const {user} = useAuth()
    const stats = [
        { label: "Total Planned", value: "24", icon: <Utensils size={20} />, color: "bg-blue-500" },
        { label: "Daily Calories", value: "1,850", icon: <TrendingUp size={20} />, color: "bg-orange-500" },
        { label: "Favorites", value: "12", icon: <Heart size={20} />, color: "bg-red-500" },
        { label: "Goal Progress", value: "75%", icon: <Plus size={20} />, color: "bg-emerald-500" },
    ];

    return (
        <div className="grid grid-cols-12 gap-0 min-h-screen bg-slate-50">
               
            <div className='col-span-3'>
           <DashboardNavber></DashboardNavber>
                
            </div>

           
            <main className="col-span-9 p-4 sm:p-10 overflow-y-auto">
             
                <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
                    <div>
                        <h1 className="text-3xl font-black text-slate-900">Hello, {user?.displayName?.split(' ')[0] || "User"}! 👋</h1>
                        <p className="text-slate-500 font-medium">Here's what's happening with your meal plan today.</p>
                    </div>
                    <button className="btn btn-primary rounded-2xl px-6 normal-case font-black shadow-lg shadow-primary/20">
                        <Plus size={18} className="mr-1" /> New Plan
                    </button>
                </header>

             
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    {stats.map((stat, i) => (
                        <div key={i} className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100 flex items-center gap-5">
                            <div className={`${stat.color} p-4 rounded-2xl text-white shadow-lg`}>
                                {stat.icon}
                            </div>
                            <div>
                                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
                                <p className="text-2xl font-black text-slate-900">{stat.value}</p>
                            </div>
                        </div>
                    ))}
                </div>

              
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Today's Schedule */}
                    <div className="lg:col-span-2 bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-black text-slate-900">Today's Schedule</h3>
                            <button className="text-primary font-bold text-sm">View Calendar</button>
                        </div>

                        <div className="space-y-4">
                            {['Breakfast', 'Lunch', 'Dinner'].map((meal, idx) => (
                                <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                                    <div className="flex items-center gap-4">
                                        <div className="w-2 h-10 bg-primary rounded-full"></div>
                                        <div>
                                            <p className="font-black text-slate-800">{meal}</p>
                                            <p className="text-xs text-slate-400">Not assigned yet</p>
                                        </div>
                                    </div>
                                    <button className="btn btn-ghost btn-sm text-primary font-bold">Add</button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Calorie Progress / Circle Chart Placeholder */}
                    <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white flex flex-col items-center justify-center text-center">
                        <h3 className="font-bold mb-6">Daily Calorie Goal</h3>
                        <div className="relative w-40 h-40 flex items-center justify-center mb-6">
                            {/* Simple CSS Circle Progress */}
                            <div className="absolute inset-0 border-8 border-slate-800 rounded-full"></div>
                            <div className="absolute inset-0 border-8 border-primary rounded-full border-t-transparent animate-spin-slow"></div>
                            <span className="text-3xl font-black">75%</span>
                        </div>
                        <p className="text-slate-400 text-sm">1,200 / 2,000 kcal consumed</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;