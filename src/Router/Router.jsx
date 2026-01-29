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
import FeaturedManagement from "../DashboardPages/FeaturedManagement";
import MyWeeklyPlan from "../DashboardPages/MyWeeklyPlan";
import MyreviewPage from "../DashboardPages/MyreviewPage";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import ErrorPage from "../Components/Error/ErrorPage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
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
                element: <PrivateRoute> 
                    <MealPlanner></MealPlanner>
                </PrivateRoute>
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
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                index: true,
                element: <OverView></OverView>
            },
            {
                path: "Create-recipes",
                element: <AdminRoute><CreateRecipe></CreateRecipe></AdminRoute>
            },
            {
                path: "manage-recipes",
                element: <AdminRoute> <ManageRecipes></ManageRecipes></AdminRoute>
            },
            {
                path: "manage-users",
                element: <AdminRoute><ManageUser></ManageUser></AdminRoute>
            },
            {
                path: "CategoryCuisineManager",
                element: <AdminRoute><CategoryCuisineManager></CategoryCuisineManager></AdminRoute>
            },
            {
                path: "FeaturedManagement",
                element: <AdminRoute><FeaturedManagement></FeaturedManagement></AdminRoute>
            },
            {
                path: "reviewManage",
                element: <AdminRoute><ReviewManagement></ReviewManagement></AdminRoute>
            },
            {
                path: "my-reviews",
                element: <MyreviewPage></MyreviewPage>
            },
            
            
            // user start
            {
                path: "planner",
                element: <MyWeeklyPlan></MyWeeklyPlan>
            },


            // user end

            


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