import React from 'react';
import { FaEnvelope, FaLock, FaArrowRight } from "react-icons/fa";
import { Link, useNavigate } from 'react-router'; // React Router ব্যবহার করা হয়েছে
import axios from 'axios';
import Swal from 'sweetalert2';
// import Socialbutton from '../Socialbutton/Socialbutton';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const loginData = { email, password };

        try {
            // আপনার ব্যাকএন্ড লগইন এপিআই কল (উদাহরণস্বরূপ)
            const res = await axios.post('https://stack-food-server.vercel.app/login', loginData);

            if (res.data.success || res.data.token) {
                // টোকেন লোকাল স্টোরেজে সেভ করা (যদি JWT ব্যবহার করেন)
                localStorage.setItem('access-token', res.data.token);

                Swal.fire({
                    title: "Successfully Login",
                    icon: "success",
                    timer: 1500,
                    showConfirmButton: false
                });

                // ড্যাশবোর্ড বা হোমে রিডাইরেক্ট
                navigate('/');
            } else {
                Swal.fire("Error", "Invalid Email or Password!", "error");
            }
        } catch (error) {
            console.error("Login Error:", error);
            Swal.fire("Error", "Something went wrong! Please try again.", "error");
        }
    };

    return (
        <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-4">
            <div className="max-w-5xl w-full bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl shadow-slate-200 overflow-hidden flex flex-col md:flex-row">

                {/* --- লেফট সাইড: ভিজ্যুয়াল সেকশন --- */}
                <div className="md:w-1/2 bg-slate-900 relative p-8 md:p-12 flex flex-col justify-between text-white overflow-hidden">
                    {/* Background Patterns */}
                    <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>

                    <div className="relative z-10">
                        <Link to="/" className="text-2xl font-black tracking-tighter">
                            TASTE<span className="text-primary">TRAIL</span>
                        </Link>
                        <h2 className="text-3xl md:text-4xl font-bold mt-12 leading-tight">
                            Experience the <br />
                            <span className="text-primary">Best Taste</span> in Town.
                        </h2>
                        <p className="text-slate-400 mt-4 max-w-xs text-sm md:text-base">
                            Login to access your personalized menu, plan meals, and track your culinary adventures.
                        </p>
                    </div>

                    <div className="relative z-10 pt-8 border-t border-slate-800 mt-8 md:mt-0">
                        <p className="text-sm text-slate-500 italic">"Good food is the foundation of genuine happiness."</p>
                    </div>
                </div>

                {/* --- রাইট সাইড: লগইন ফর্ম --- */}
                <div className="flex-1 p-8 lg:p-16">
                    <div className="max-w-sm mx-auto">
                        <div className="mb-10 text-center md:text-left">
                            <h3 className="text-3xl font-black text-slate-800 tracking-tight">Welcome Back</h3>
                            <p className="text-slate-500 font-medium mt-2">Enter your details to continue</p>
                        </div>

                        {/* Credentials Form */}
                        <form onSubmit={handleLogin} className="space-y-5">
                            <div className="form-control">
                                <label className="label py-1"><span className="label-text font-bold text-slate-600">Email Address</span></label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-4 flex items-center text-slate-400">
                                        <FaEnvelope size={14} />
                                    </span>
                                    <input
                                        name="email"
                                        type="email"
                                        placeholder="name@example.com"
                                        className="input input-bordered w-full pl-12 bg-slate-50 border-slate-200 focus:bg-white focus:border-primary transition-all rounded-2xl"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-control">
                                <div className="flex justify-between items-center mb-1">
                                    <label className="label py-0"><span className="label-text font-bold text-slate-600">Password</span></label>
                                    <Link to="/forgot-password" size={14} className="text-xs font-bold text-primary hover:underline">Forgot?</Link>
                                </div>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-4 flex items-center text-slate-400">
                                        <FaLock size={14} />
                                    </span>
                                    <input
                                        name="password"
                                        type="password"
                                        placeholder="••••••••"
                                        className="input input-bordered w-full pl-12 bg-slate-50 border-slate-200 focus:bg-white focus:border-primary transition-all rounded-2xl"
                                        required
                                    />
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary w-full text-white rounded-2xl shadow-xl shadow-primary/20 h-14 text-lg border-none hover:gap-4 transition-all group">
                                Sign In
                                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>

                        <div className="w-full mt-8">
                            <div className="divider text-slate-500 text-xs uppercase tracking-widest mb-8">Or login with</div>
                            {/* <Socialbutton /> */}
                        </div>

                        <p className="text-center mt-10 text-slate-500 text-sm font-medium">
                            Don't have an account? <Link to="/register" className="text-primary font-bold hover:underline">Create Account</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;