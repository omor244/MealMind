import {
    LayoutDashboard,
    CalendarDays,
    Star,
    ChefHat,
    CirclePlus,
    Users2,
    Settings2,
    MessageSquareQuote,
    Zap,
    UserCircle,
    LogOut,
    UtensilsCrossed,
    PlusCircle,
    Users,
    Utensils,
    User,
    TrendingUp
} from "lucide-react";
import { NavLink, useLocation } from "react-router";
import useRole from "../../Hooks/useRole";
import useAuth from "../../Hooks/useAuth";

import { X } from "lucide-react"; 
import { FaUtensils } from "react-icons/fa";

const DashboardNavber = () => {
    const { logOut } = useAuth();
    const { role } = useRole();

    const closeDrawer = () => {
        const drawerCheckbox = document.getElementById('dashboard-drawer');
        if (drawerCheckbox) drawerCheckbox.checked = false;
    };

    const navLinkClasses = ({ isActive }) =>
        `flex items-center gap-4 w-full p-4 rounded-2xl font-bold transition-all ${isActive ? 'bg-primary text-white shadow-lg' : 'hover:bg-slate-800 text-slate-400 hover:text-white'
        }`;

    return (
        <aside className="bg-slate-900 flex flex-col p-6 text-white h-screen w-70 relative">

           
            <button
                onClick={closeDrawer}
                className="lg:hidden absolute top-5 right-5 p-2 bg-slate-800 rounded-full text-white hover:bg-red-500 transition-colors"
            >
                <X size={20} />
            </button>

            {/* Logo */}
            <NavLink to={'/'} onClick={closeDrawer} className="flex items-center gap-3 mb-10 px-2 shrink-0">
                <div className="bg-primary p-2 rounded-xl">
                      <FaUtensils />
                </div>
                <span className="text-xl font-black tracking-tighter uppercase">
                    Meal<span className="text-primary">MIND</span>
                </span>
            </NavLink>

            {/* Navigation Links */}
            <nav className="flex-1 space-y-2 overflow-y-auto no-scrollbar">
                <p className="px-4 text-[10px] font-black uppercase text-slate-500 tracking-widest mb-2">Main Menu</p>
                <NavLink to="/dashboard" end onClick={closeDrawer} className={navLinkClasses}>
                    <LayoutDashboard size={20} /> Overview
                </NavLink>

                {role === "user" && (
                    <>
                        <NavLink to="/dashboard/planner" onClick={closeDrawer} className={navLinkClasses}>
                            <CalendarDays size={20} /> Weekly Planner
                        </NavLink>
                        <NavLink to="/dashboard/my-reviews" onClick={closeDrawer} className={navLinkClasses}>
                            <Star size={20} /> My Reviews
                        </NavLink>
                    </>
                )}

                {role === "admin" && (
                    <>
                        <div className="pt-4">
                            <p className="px-4 text-[10px] font-black uppercase text-slate-500 tracking-widest mb-2">Admin Panel</p>
                        </div>
                        <NavLink onClick={closeDrawer} to="/dashboard/manage-recipes" className={`flex items-center gap-4 w-full p-4 rounded-2xl font-bold transition-all `}>
                            <PlusCircle size={20} /> Manage Recipes
                        </NavLink>
                        <NavLink onClick={closeDrawer} to="/dashboard/Create-recipes" className={`flex items-center gap-4 w-full p-4 rounded-2xl font-bold transition-all `}>
                            <PlusCircle size={20} />Create recipes
                        </NavLink>
                        <NavLink onClick={closeDrawer} to="/dashboard/manage-users" className={`flex items-center gap-4 w-full p-4 rounded-2xl font-bold transition-all `}>
                            <Users size={20} /> All Users
                        </NavLink>
                        <NavLink onClick={closeDrawer} to="/dashboard/CategoryCuisineManager" className={`flex items-center gap-4 w-full p-4 rounded-2xl font-bold transition-all `}>
                            <Users size={20} /> Category Management
                        </NavLink>
                        <NavLink onClick={closeDrawer} to="/dashboard/reviewManage" className={`flex items-center gap-4 w-full p-4 rounded-2xl font-bold transition-all `}>
                            <Users size={20} /> Reviews Management
                        </NavLink>
                        <NavLink onClick={closeDrawer} to="/dashboard/FeaturedManagement" className={`flex items-center gap-4 w-full p-4 rounded-2xl font-bold transition-all `}>
                            <Users size={20} /> Featured Management
                        </NavLink>
                    </>
                )}
            </nav>

            {/* Bottom Menu */}
            <div className="pt-4 border-t border-slate-800 shrink-0">
                <NavLink to="/dashboard/profile" onClick={closeDrawer} className={navLinkClasses}>
                    <UserCircle size={20} /> My Profile
                </NavLink>
                <button
                    onClick={() => { logOut(); closeDrawer(); }}
                    className="flex items-center gap-4 w-full p-4 text-red-400 font-bold hover:bg-red-500/10 rounded-2xl transition-all mt-2"
                >
                    <LogOut size={20} /> Logout
                </button>
            </div>
        </aside>
    );
};
export default DashboardNavber;