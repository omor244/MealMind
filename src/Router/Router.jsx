import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Register from "../Auth/Register/Register";
import Login from "../Auth/Login/Login";
import Home from "../Pages/Home";
import Recipes from "../Pages/Recipes";
import RecipesDetals from "../Components/Detailspage/RecipesDetals";
import MealPlanner from "../Pages/MealPlanner";
import About from "../Pages/About";
import Profile from "../Pages/Profile";
import Dashboard from "../Layout/Dashboard";
import OverView from "../DashboardPages/OverView";
import CreateRecipe from "../DashboardPages/CreateRecipe";
import ManageRecipes from "../DashboardPages/ManageRecipes";
import ManageUser from "../DashboardPages/ManageUser";
import CategoryCuisineManager from "../DashboardPages/CategoryCuisineManager";
import ReviewManagement from "../DashboardPages/ReviewManagement";


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
            {
                path: "about",
                element: <About></About>
            },
            {
                path: "profile",
                element: <Profile></Profile>
            },
        ]
    },
    {
        path: "dashboard", 
        element: <Dashboard></Dashboard>,
        children: [
            {
                index: true,
                element: <OverView></OverView>
            },
            {
                path: "Create-recipes",
                element: <CreateRecipe></CreateRecipe>
            },
            {
                path: "manage-recipes",
                element: <ManageRecipes></ManageRecipes>
            },
            {
                path: "manage-users",
                element: <ManageUser></ManageUser>
            },
            {
                path: "CategoryCuisineManager",
                element: <CategoryCuisineManager></CategoryCuisineManager>
            },
            {
                path: "reviewManage",
                element: <ReviewManagement></ReviewManagement>
            },
            {
                path: "/dashboard/profile",
                element: <Profile></Profile>
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