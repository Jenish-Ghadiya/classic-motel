import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./defaultLayout/defaultLayout";
import Home from "../components/home";
import SignUp from "../components/form/signup";
import Login from "../components/form/login";

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
        ],
    },
]);

export default router;