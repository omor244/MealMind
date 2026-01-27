import React from 'react';

export default function Loading() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden relative">
            <div className="relative flex flex-col items-center z-10">

             
                <div className="relative w-28 h-28 mb-8">
               
                    <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-ping"></div>

         
                    <div className="absolute inset-0 rounded-full border-t-4 border-primary animate-spin"></div>

              
                    <div className="absolute inset-0 flex items-center justify-center text-5xl animate-bounce">
                        🥗
                    </div>
                </div>

       
                <h2 className="text-3xl font-black tracking-tighter text-slate-900 mb-2">
                    MEAL<span className="text-primary">MIND</span>
                </h2>

            
                <div className="flex items-center gap-1 text-slate-500 font-medium text-sm">
                    <span>Curating your nutrition plan</span>
                    <span className="flex gap-1 ml-1">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></span>
                    </span>
                </div>
            </div>

            {/* Background Decorative Floating Icons (Meal Planner Context) */}
            <div className="absolute top-10 left-10 opacity-10 animate-pulse text-6xl select-none">🥑</div>
            <div className="absolute bottom-10 right-10 opacity-10 animate-pulse text-6xl delay-500 select-none">🍎</div>
            <div className="absolute top-1/4 right-20 opacity-10 animate-pulse text-5xl delay-700 select-none">🥦</div>
            <div className="absolute bottom-1/4 left-20 opacity-10 animate-pulse text-5xl delay-1000 select-none">🍳</div>

            {/* Subtle Gradient Glow */}
            <div className="absolute w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-0"></div>
        </div>
    );
}