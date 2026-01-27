
import { User, Mail, Settings, Camera, Award, Calendar, Flame, LogOut, ShieldCheck } from 'lucide-react';
import useAuth from '../Hooks/useAuth';

const Profile = () => {
    const { user, logOut } = useAuth()
    const { displayName, email, photoURL, metadata } = user || {}

    return (
        <div className="min-h-screen bg-slate-50/50 pb-20">
       
            <div className="h-48 bg-slate-900 w-full relative">
                <div className="max-w-5xl mx-auto px-4 relative h-full">
                 
                    <div className="absolute -bottom-16 left-4 sm:left-10 group">
                        <div className="relative">
                            {photoURL ? (
                                <img
                                    src={photoURL}
                                    alt={displayName}
                                    className="w-32 h-32 sm:w-40 sm:h-40 rounded-[2.5rem] border-4 border-white object-cover shadow-xl"
                                />
                            ) : (
                                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-[2.5rem] border-4 border-white bg-slate-200 flex items-center justify-center text-slate-500 shadow-xl">
                                    <User size={60} />
                                </div>
                            )}
                            <button className="absolute bottom-2 right-2 bg-primary p-2 rounded-xl text-white shadow-lg hover:scale-110 transition-all">
                                <Camera size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 mt-20">
                <div className="flex flex-col md:flex-row gap-8">

                    {/* Left Side: Direct Identity */}
                    <div className="w-full md:w-1/3 space-y-6">
                        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
                            <h2 className="text-2xl font-black text-slate-900 mb-1">{displayName || "Anonymous User"}</h2>
                            <p className="text-slate-400 text-sm font-medium flex items-center gap-2 mb-6">
                                <Mail size={14} /> {email}
                            </p>

                            <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-xl text-xs font-bold w-fit mb-6">
                                <ShieldCheck size={14} />
                                Verified Account
                            </div>

                            <button className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-all active:scale-95">
                                <Settings size={18} />
                                Manage Account
                            </button>
                        </div>

                        {/* Status Card */}
                        <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100">
                            <h3 className="font-black text-slate-900 px-2 uppercase text-[10px] tracking-widest mb-4">Membership</h3>
                            <div className="p-4 bg-primary/5 border border-primary/10 rounded-2xl">
                                <p className="text-xs font-bold text-primary mb-1">Joined On</p>
                                <p className="text-lg font-black text-slate-900">
                                    {metadata?.creationTime ? new Date(metadata.creationTime).toLocaleDateString('en-GB', {
                                        day: 'numeric', month: 'short', year: 'numeric'
                                    }) : "Recent"}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Activity & Details */}
                    <div className="flex-1 space-y-6">
                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100">
                                <Calendar className="text-primary mb-4" size={24} />
                                <p className="text-2xl font-black text-slate-900">Weekly</p>
                                <p className="text-slate-400 text-xs font-bold uppercase tracking-tighter">Plan Status</p>
                            </div>
                            <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100">
                                <Flame className="text-orange-500 mb-4" size={24} fill="currentColor" />
                                <p className="text-2xl font-black text-slate-900">Active</p>
                                <p className="text-slate-400 text-xs font-bold uppercase tracking-tighter">Energy Goal</p>
                            </div>
                        </div>

                        {/* Recent Actions */}
                        <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
                            <div className="p-8 border-b border-slate-50">
                                <h3 className="font-black text-slate-900 text-xl">Quick Links</h3>
                            </div>
                            <div className="p-4 space-y-2">
                                <button className="w-full flex items-center justify-between p-4 hover:bg-slate-50 rounded-2xl transition-all font-bold text-slate-600">
                                    <span>Personal Information</span>
                                    <span className="text-slate-300">→</span>
                                </button>
                                <button className="w-full flex items-center justify-between p-4 hover:bg-slate-50 rounded-2xl transition-all font-bold text-slate-600">
                                    <span>Notification Preferences</span>
                                    <span className="text-slate-300">→</span>
                                </button>
                                <hr className="my-2 border-slate-50" />
                                <button
                                    onClick={() => logOut()}
                                    className="w-full flex items-center gap-3 p-4 text-red-500 font-black hover:bg-red-50 rounded-2xl transition-all"
                                >
                                    <LogOut size={18} /> Sign Out 
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Profile;