import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Register from "../Auth/Register/Register";
import Login from "../Auth/Login/Login";
import Home from "../Pages/Home";
import Recipes from "../Pages/Recipes";
import RecipesDetals from "../Components/Detailspage/RecipesDetals";
import MealPlanner from "../Pages/MealPlanner";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: "recipes",
                element: <Recipes></Recipes>
            },
            {
                path: "recipes/:id",
                element: <RecipesDetals></RecipesDetals>
            },
            {
                path: "meal-planner",
                element: <MealPlanner></MealPlanner>
            },
        ]
    },
    {
        path: "/register",
        element: <Register></Register>
    },
    {
        path: "/login",
        element: <Login></Login>
    },
]);