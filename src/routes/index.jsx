import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./defaultLayout/defaultLayout";
import Home from "../components/home";
import SignUp from "../components/form/signup";
import Login from "../components/form/login";
import Error from "../common/error";
import Blog from "../components/blog";

const router = createBrowserRouter([
    {
        path:"/signup",
        element:<SignUp/>
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/rooms",
                element: <h1>rooms</h1>,
            },
            {
                path: "/pages",
                element: <h1>pages</h1>,
            },
            {
                path: "/blogs",
                element: <Blog/>,
            },
        ],
    },
    {
        path: "*",
        element: <Error/>,
    }
]);

export default router;