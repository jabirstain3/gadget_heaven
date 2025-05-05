import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import HomeLayout from "../layouts/homeLayout/HomeLayout.jsx";
import DashboardLayout from "../layouts/dashboardLayout/DashboardLayout.jsx";
import StatisticsLayout from "../layouts/statisticsLayout/StatisticsLayout.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <HomeLayout/>,
            },            
            {
                path: "dashboard",
                element: <DashboardLayout/>,
            },            
            {
                path: "statistics",
                element: <StatisticsLayout/>,
            },            
        ],
    },
])

export default router;