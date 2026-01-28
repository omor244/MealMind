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
import { NavLink, useLocation } from "react-router";
import useRole from "../../Hooks/useRole";

const DashboardNavber = ({  logout }) => {
    const location = useLocation();

    const {role} = useRole()

    console.log(role)

  
    

    return (
        <aside className="hidden lg:flex   bg-slate-900 flex-col p-6 text-white sticky top-0 h-screen">
            
            <NavLink to={'/'} className="flex items-center gap-3 mb-10 px-2">
                <div className="bg-primary p-2 rounded-xl">
                    <Utensils className="text-white" size={24} />
                </div>
                <span className="text-xl font-black tracking-tighter uppercase">
                    Meal<span className="text-primary">MIND</span>
                </span>
            </NavLink>

            <nav className="flex-1 space-y-2">
                <p className="px-4 text-[10px] font-black uppercase text-slate-500 tracking-widest mb-2">Main Menu</p>

              
                <NavLink to="/dashboard" className={`flex items-center gap-4 w-full p-4 rounded-2xl font-bold transition-all `}>
                    <LayoutDashboard size={20} /> Dashboard
                </NavLink>

               
                {role === "user" && (
                    <>
                        <NavLink to="/dashboard/planner" className={`flex items-center gap-4 w-full p-4 rounded-2xl font-bold transition-all ${isActive('/dashboard/planner')}`}>
                            <Calendar size={20} /> Weekly Planner
                        </NavLink>
                        <NavLink to="/dashboard/progress" className={`flex items-center gap-4 w-full p-4 rounded-2xl font-bold transition-all ${isActive('/dashboard/progress')}`}>
                            <TrendingUp size={20} /> Health Progress
                        </NavLink>
                    </>
                )}

             
                {role === "admin" && (
                    <>
                        <div className="pt-4">
                            <p className="px-4 text-[10px] font-black uppercase text-slate-500 tracking-widest mb-2">Admin Panel</p>
                        </div>
                        <NavLink to="/dashboard/manage-recipes" className={`flex items-center gap-4 w-full p-4 rounded-2xl font-bold transition-all `}>
                            <PlusCircle size={20} /> Manage Recipes
                        </NavLink>
                        <NavLink to="/dashboard/Create-recipes" className={`flex items-center gap-4 w-full p-4 rounded-2xl font-bold transition-all `}>
                            <PlusCircle size={20} />Create recipes
                        </NavLink>
                        <NavLink to="/dashboard/manage-users" className={`flex items-center gap-4 w-full p-4 rounded-2xl font-bold transition-all `}>
                            <Users size={20} /> All Users
                        </NavLink>
                        <NavLink to="/dashboard/CategoryCuisineManager" className={`flex items-center gap-4 w-full p-4 rounded-2xl font-bold transition-all `}>
                            <Users size={20} /> Category Management
                        </NavLink>
                        <NavLink to="/dashboard/reviewManage" className={`flex items-center gap-4 w-full p-4 rounded-2xl font-bold transition-all `}>
                            <Users size={20} /> Reviews Management
                        </NavLink>
                        <NavLink to="/dashboard/FeaturedManagement" className={`flex items-center gap-4 w-full p-4 rounded-2xl font-bold transition-all `}>
                            <Users size={20} /> Featured Management
                        </NavLink>
                      
                    </>
                )}

                {/* --- Shared Profile/Settings --- */}
            </nav>

                <div className="pt-4 border-t border-slate-800">
                    <NavLink to="/dashboard/profile" className={`flex items-center gap-4 w-full p-4 rounded-2xl font-bold transition-all`}>
                        <User size={20} /> My Profile
                    </NavLink>
                    <NavLink to="/dashboard/settings" className={`flex items-center gap-4 w-full p-4 rounded-2xl font-bold transition-all`}>
                        <Settings size={20} /> Settings
                    </NavLink>
                </div>
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