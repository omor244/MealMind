

const steps = [
    {
        id: 1,
        title: "Set Your Goals",
        description: "Tell us your dietary preferences—be it Vegan, Keto, or High-Protein.",
        icon: "🎯",
        bgColor: "bg-orange-100",
    },
    {
        id: 2,
        title: "Smart Planning",
        description: "Our system generates a personalized weekly meal plan just for you.",
        icon: "📅",
        bgColor: "bg-green-100",
    },
    {
        id: 3,
        title: "Cook & Track",
        description: "Follow easy recipes and track your nutritional progress daily.",
        icon: "📈",
        bgColor: "bg-blue-100",
    },
];

const HowItWorks = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

                {/* --- Section Title --- */}
                <div className="text-center mb-20 space-y-4">
                    <span className="text-primary font-bold text-sm tracking-widest uppercase italic">
                        # Your Journey
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-800">
                        How <span className="text-primary">MealMind</span> Works
                    </h2>
                    <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-lg">
                        We simplify your life by taking the guesswork out of mealtime.
                        Start your journey to better health in three simple steps.
                    </p>
                </div>

                {/* --- Steps Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">

                    {/* Decorative Dashed Line (Visible on Desktop) */}
                    <div className="hidden lg:block absolute top-1/3 left-[15%] right-[15%] h-[2px] border-t-2 border-dashed border-slate-200 -z-0"></div>

                    {steps.map((step) => (
                        <div key={step.id} className="relative z-10 flex flex-col items-center text-center group">

                            {/* Icon Circle with Animation */}
                            <div className={`w-28 h-28 ${step.bgColor} rounded-[2.5rem] flex items-center justify-center text-5xl mb-8 shadow-sm group-hover:shadow-2xl group-hover:-translate-y-3 group-hover:rotate-6 transition-all duration-500 border-4 border-white`}>
                                {step.icon}
                            </div>

                            {/* Step Number Badge */}
                            <div className="absolute top-0 right-1/4 md:right-[20%] bg-slate-900 text-white w-10 h-10 rounded-2xl flex items-center justify-center font-black border-4 border-white shadow-xl group-hover:bg-primary transition-colors">
                                {step.id}
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl font-black text-slate-800 mb-4 group-hover:text-primary transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-slate-500 leading-relaxed px-6 font-medium">
                                {step.description}
                            </p>

                            {/* Decorative Glow behind each card */}
                            <div className={`absolute -inset-4 ${step.bgColor} opacity-0 group-hover:opacity-20 blur-2xl rounded-full transition-opacity -z-10`}></div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA (Extra touch for UX) */}
                <div className="mt-20 text-center">
                    <button className="btn btn-primary btn-lg rounded-2xl text-white px-12 shadow-xl shadow-primary/20 hover:scale-105 transition-all normal-case font-bold">
                        Create Your First Plan
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;