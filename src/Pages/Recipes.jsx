import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import RecipesCard from "../Components/Card/RecipesCard";
import Loading from "../Components/Loading/Loading";


const Recipes = () => {
    const { data: recipes = [], isLoading } = useQuery({
        queryKey: ["recipes"],
        queryFn: async () => {
            const res = await axios.get('https://meal-mind-server-ashy.vercel.app/recipes');
            return res.data;
        }
    });

    if (isLoading) return <Loading></Loading>

    return (
        <section className="py-16 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                
                <div className="text-center mb-16 space-y-4">
                    <h4 className="text-primary font-bold uppercase tracking-widest text-sm">
                        Explore Our Kitchen
                    </h4>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                        Discover Healthy & <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-600">
                            Delicious Recipes
                        </span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                        Find the perfect meal for your goal. From keto-friendly breakfasts to
                        vegan dinners, we have everything to make your meal planning easy.
                    </p>
                    <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
                </div>

                {/* Recipes Grid */}
                {recipes.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {recipes.map(recipe => (
                            <RecipesCard recipe={recipe} key={recipe._id} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-xl text-slate-400">No recipes found. Start by adding some!</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Recipes;