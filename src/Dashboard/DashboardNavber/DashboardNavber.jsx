import {
    Calendar,
    LayoutDashboard,
    LogOut,
    User,
    Utensils,
    Users,
    PlusCircle,
    ClipboardList,
    TrendingUp,
    Settings
} from "lucide-react";
import { Link, useLocation } from "react-router";

const DashboardNavber = ({  logout }) => {
    const location = useLocation();

    const role = "admin"

    // বর্তমান পেজ অনুযায়ী একটিভ ক্লাস চেক করার ফাংশন
    const isActive = (path) => location.pathname === path
        ? "bg-primary/20 text-primary"
        : "text-slate-400 hover:bg-slate-800 hover:text-white";

    return (
        <aside className="hidden lg:flex w-72 bg-slate-900 flex-col p-6 text-white sticky top-0 h-screen">
            
            <Link to={'/'} className="flex items-center gap-3 mb-10 px-2">
                <div className="bg-primary p-2 rounded-xl">
                    <Utensils className="text-white" size={24} />
                </div>
                <span className="text-xl font-black tracking-tighter uppercase">
                    Meal<span className="text-primary">Mate</span>
                </span>
            </Link>

            <nav className="flex-1 space-y-2">
                <p className="px-4 text-[10px] font-black uppercase text-slate-500 tracking-widest mb-2">Main Menu</p>

              
                <Link to="/dashboard" className={`flex items-center gap-4 w-full p-4 rounded-2xl font-bold transition-all ${isActive('/dashboard')}`}>
                    <LayoutDashboard size={20} /> Dashboard
                </Link>

               
                {role === "user" && (
                    <>
                        <Link to="/dashboard/planner" className={`flex items-center gap-4 w-full p-4 rounded-2xl font-bold transition-all ${isActive('/dashboard/planner')}`}>
                            <Calendar size={20} /> Weekly Planner
                        </Link>
                        <Link to="/dashboard/progress" className={`flex items-center gap-4 w-full p-4 rounded-2xl font-bold transition-all ${isActive('/dashboard/progress')}`}>
                            <TrendingUp size={20} /> Health Progress
                        </Link>
                    </>
                )}

             
                {role === "admin" && (
                    <>
                        <div className="pt-4">
                            <p className="px-4 text-[10px] font-black uppercase text-slate-500 tracking-widest mb-2">Admin Panel</p>
                        </div>
                        <Link to="/dashboard/manage-recipes" className={`flex items-center gap-4 w-full p-4 rounded-2xl font-bold transition-all ${isActive('/dashboard/manage-recipes')}`}>
                            <PlusCircle size={20} /> Manage Recipes
                        </Link>
                        <Link to="/dashboard/all-users" className={`flex items-center gap-4 w-full p-4 rounded-2xl font-bold transition-all ${isActive('/dashboard/all-users')}`}>
                            <Users size={20} /> All Users
                        </Link>
                        <Link to="/dashboard/orders" className={`flex items-center gap-4 w-full p-4 rounded-2xl font-bold transition-all ${isActive('/dashboard/orders')}`}>
                            <ClipboardList size={20} /> Subscription/Orders
                        </Link>
                    </>
                )}

                {/* --- Shared Profile/Settings --- */}
                <div className="pt-4 border-t border-slate-800">
                    <Link to="/dashboard/profile" className={`flex items-center gap-4 w-full p-4 rounded-2xl font-bold transition-all ${isActive('/dashboard/profile')}`}>
                        <User size={20} /> My Profile
                    </Link>
                    <Link to="/dashboard/settings" className={`flex items-center gap-4 w-full p-4 rounded-2xl font-bold transition-all ${isActive('/dashboard/settings')}`}>
                        <Settings size={20} /> Settings
                    </Link>
                </div>
            </nav>

            {/* Logout Button */}
            <button
                onClick={logout}
                className="flex items-center gap-4 w-full p-4 text-red-400 font-bold hover:bg-red-500/10 rounded-2xl transition-all mt-auto"
            >
                <LogOut size={20} /> Logout
            </button>
        </aside>
    );
};

export default DashboardNavber;