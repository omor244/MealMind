

const categories = [
    { id: 1, name: "Breakfast", icon: "🍳", count: "24 Recipes" },
    { id: 2, name: "Main Course", icon: "🍱", count: "45 Recipes" },
    { id: 3, name: "Quick Snacks", icon: "🥪", count: "12 Recipes" },
    { id: 4, name: "Dessert", icon: "🍰", count: "15 Recipes" },
    { id: 5, name: "Healthy Salad", icon: "🥗", count: "30 Recipes" },
    { id: 6, name: "Vegan", icon: "🌿", count: "18 Recipes" },
];

const Categories = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Heading - Standardized with Hero Design */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div className="space-y-2">
                        <span className="text-primary font-bold text-sm uppercase tracking-widest italic">
                            # Smart Categories
                        </span>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-800 leading-tight">
                            Explore Your <span className="text-primary">Personalized</span> Menu
                        </h2>
                        <p className="text-slate-500 max-w-lg">
                            Find recipes based on your mood, timing, or dietary preferences.
                        </p>
                    </div>

                  
                </div>

                {/* Categories Grid - Optimized for Mobile & Desktop */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="group cursor-pointer bg-slate-50 hover:bg-primary transition-all duration-500 rounded-[2.5rem] p-8 text-center border border-slate-100 hover:border-primary shadow-sm hover:shadow-2xl hover:shadow-orange-200/50"
                        >
                            <div className="text-5xl mb-4 transform group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-300">
                                {category.icon}
                            </div>
                            <h3 className="text-lg font-black text-slate-800 group-hover:text-white transition-colors">
                                {category.name}
                            </h3>
                            <div className="mt-2 inline-block px-3 py-1 bg-white group-hover:bg-white/20 rounded-full transition-colors">
                                <p className="text-[10px] font-bold text-primary group-hover:text-white uppercase">
                                    {category.count}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Categories;