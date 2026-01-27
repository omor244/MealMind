import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Register from "../Auth/Register/Register";
import Login from "../Auth/Login/Login";
import Home from "../Pages/Home";
import Recipes from "../Pages/Recipes";


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
            }
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