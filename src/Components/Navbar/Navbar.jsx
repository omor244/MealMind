import React from 'react';
import { Link, NavLink } from 'react-router';
import { FaUtensils, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
   
    const navLinks = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "text-primary font-bold" : "hover:text-primary transition-colors"}
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/recipes"
                    className={({ isActive }) => isActive ? "text-primary font-bold" : "hover:text-primary transition-colors"}
                >
                    Recipes
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/meal-planner"
                    className={({ isActive }) => isActive ? "text-primary font-bold" : "hover:text-primary transition-colors"}
                >
                    Meal Planner
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/about"
                    className={({ isActive }) => isActive ? "text-primary font-bold" : "hover:text-primary transition-colors"}
                >
                    About Us
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="navbar bg-white  shadow-md px-4 md:px-48 ">
           
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52 gap-2 text-slate-700">
                        {navLinks}
                    </ul>
                </div>
                <Link to="/" className="flex items-center gap-2 text-xl md:text-2xl font-black tracking-tighter">
                    <div className="bg-primary p-2 rounded-lg text-white">
                        <FaUtensils />
                    </div>
                    <span>MEAL<span className="text-primary">MIND</span></span>
                </Link>
            </div>

         
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-8 font-medium text-slate-600">
                    {navLinks}
                </ul>
            </div>

           
            <div className="navbar-end gap-2">
             
                <Link to="/login" className="btn btn-ghost text-slate-600 hidden sm:flex">Login</Link>
                <Link to="/register" className="btn btn-primary text-white rounded-xl px-6 shadow-lg shadow-primary/20">
                    Get Started
                </Link>

                {/* লগইন থাকলে প্রোফাইল আইকন (অপশনাল) */}
                {/* <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar border-2 border-primary">
                        <div className="w-10 rounded-full">
                            <img src="https://i.pravatar.cc/100" alt="profile" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><button className="text-red-500">Logout</button></li>
                    </ul>
                </div> 
                */}
            </div>
        </div>
    );
};

export default Navbar;