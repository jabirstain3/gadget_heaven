import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import HomeLayout from "../layouts/homeLayout/HomeLayout.jsx";
import DashboardLayout from "../layouts/dashboardLayout/DashboardLayout.jsx";
import StatisticsLayout from "../layouts/statisticsLayout/StatisticsLayout.jsx";
import ProductDetailsLayout from "../layouts/productDetailsLayout/ProductDetailsLayout.jsx";
import CartLayout from "../layouts/cartLayout/CartLayout.jsx";
import FavouriteLayout from "../layouts/favouriteLayout/FavouriteLayout.jsx";
import ErrorPage from "../pages/errorPage/ErrorPage.jsx";
import RegistrationPage from "../pages/registrationPage/RegistrationPage.jsx";
import LogInPage from "../pages/logInPage/LogInPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <HomeLayout/>,
            },            
            {
                path: "dashboard",
                element: <DashboardLayout/>,
                children: [
                    {   
                        path: "cart",
                        element: <CartLayout/>,
                    },
                    {   
                        path: "wishlist",
                        element: <FavouriteLayout/>,
                    }
                ]
            },            
            {
                path: "statistics",
                element: <StatisticsLayout/>,
            },
            {
                path: "products/:id",
                element: <ProductDetailsLayout/>,
            },                     
        ],
    },
    {
        path: "*",
        element: <ErrorPage/>,
    },
    {
        path: "registration",
        element: <RegistrationPage/>,
    },                     
    {
        path: "login",
        element: <LogInPage/>,
    },                     
])

export default router;