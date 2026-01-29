import React from 'react';
import { FaUser, FaEnvelope, FaLock, FaArrowRight } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';

import { saveorupdateuser } from '../../Uitlity/Utility';
import SocialButton from '../../Hooks/Socialbutton';



const Register = () => {
    const navigate = useNavigate();
    const location = useLocation()
    console.log(location)
    const { createUser, updateUserProfile } = useAuth()

    const handleRegister = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;


        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;
        if (!passwordRegex.test(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                timer: 5000,
                text: 'Must include 1 uppercase, 1 lowercase, 1 special character and be at least 6 characters long.',
            });
            return;
        }





        const newUser = {
            name,
            email,
            password,
           
        };




        try {


            const res = await saveorupdateuser(newUser)

        
            if (res.insertedId) {
                await createUser(email, password)
                await updateUserProfile(name, photo)

                Swal.fire({
                    title: "Registration Successful!",
                    text: "Please login to continue.",
                    icon: "success",
                });
                navigate( location?.state ? location?.state : '/');

            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Registration Failed',
                text: error.response?.data?.message || 'Something went wrong!',
            });
        }
    };

    return (
        <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-4">
            <div className="max-w-5xl w-full bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl shadow-slate-200 overflow-hidden flex flex-col md:flex-row-reverse">


                <div className="md:w-1/2 bg-slate-900 relative p-8 md:p-12 flex flex-col justify-between text-white overflow-hidden">
                    <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-orange-500/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>

                    <div className="relative z-10">
                        <Link to="/" className="text-2xl font-black tracking-tighter">
                            TASTE<span className="text-primary">TRAIL</span>
                        </Link>
                        <h2 className="text-3xl md:text-4xl font-bold mt-12 leading-tight">
                            Join the <br />
                            <span className="text-primary">Foodie Family</span> Today.
                        </h2>
                        <p className="text-slate-400 mt-4 max-w-xs text-sm md:text-base">
                            Create an account to save your favorite recipes, plan your meals, and track your cooking progress.
                        </p>
                    </div>

                    <div className="relative z-10 pt-8 border-t border-slate-800 flex items-center gap-4 mt-8 md:mt-0">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-700 overflow-hidden">
                                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" />
                                </div>
                            ))}
                        </div>
                        <p className="text-xs text-slate-400 font-medium tracking-wide">Joined by 10k+ Food Lovers</p>
                    </div>
                </div>


                <div className="flex-1 p-8 lg:p-16">
                    <div className="max-w-sm mx-auto">
                        <div className="mb-10 text-center md:text-left">
                            <h3 className="text-3xl font-black text-slate-800 tracking-tight">Create Account</h3>
                            <p className="text-slate-500 font-medium mt-2">Start your culinary journey with us</p>
                        </div>

                        <form onSubmit={handleRegister} className="space-y-4">

                            <div className="form-control">
                                <label className="label py-1"><span className="label-text font-bold text-slate-600">Full Name</span></label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-4 flex items-center text-slate-400"><FaUser size={14} /></span>
                                    <input name="name" type="text" placeholder="John Doe" className="input input-bordered w-full pl-12 bg-slate-50 focus:bg-white focus:border-primary transition-all rounded-2xl border-slate-200" required />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label py-1"><span className="label-text font-bold text-slate-600">Photo Url</span></label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-4 flex items-center text-slate-400"><FaUser size={14} /></span>
                                    <input name="photo" type="text" placeholder="https://placehold.jp/600x400.png" className="input input-bordered w-full pl-12 bg-slate-50 focus:bg-white focus:border-primary transition-all rounded-2xl border-slate-200" required />
                                </div>
                            </div>


                            <div className="form-control">
                                <label className="label py-1"><span className="label-text font-bold text-slate-600">Email Address</span></label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-4 flex items-center text-slate-400"><FaEnvelope size={14} /></span>
                                    <input name="email" type="email" placeholder="name@example.com" className="input input-bordered w-full pl-12 bg-slate-50 focus:bg-white focus:border-primary transition-all rounded-2xl border-slate-200" required />
                                </div>
                            </div>

                            <div className="form-control">
                                <label className="label py-1"><span className="label-text font-bold text-slate-600">Password</span></label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-4 flex items-center text-slate-400"><FaLock size={14} /></span>
                                    <input name="password" type="password" placeholder="••••••••" className="input input-bordered w-full pl-12 bg-slate-50 focus:bg-white focus:border-primary transition-all rounded-2xl border-slate-200" required />
                                </div>
                            </div>

                            <div className="flex items-center gap-2 py-2">
                                <input type="checkbox" className="checkbox checkbox-primary checkbox-xs rounded" required />
                                <span className="text-xs text-slate-500">I agree to the <span className="text-primary font-bold cursor-pointer">Terms & Conditions</span></span>
                            </div>

                            <button type="submit" className="btn btn-primary w-full text-white rounded-2xl shadow-xl shadow-primary/20 h-14 text-lg border-none hover:gap-4 transition-all group">
                                Create Account
                                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>

                        <div className="w-full mt-8">
                            <div className="divider text-slate-500 text-xs uppercase tracking-widest mb-8">Or register with</div>
                           <SocialButton></SocialButton>
                        </div>

                        <p className="text-center mt-10 text-slate-500 text-sm font-medium">
                            Already a member? <Link to="/login" state={location?.state} className="text-primary font-bold hover:underline">Login Now</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;