import { createBrowserRouter } from "react-router-dom";
import Menu from "../components/Menu";
import ErrorPage from "../pages/ErrorPage";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Menu />,
        errorElement: <ErrorPage />,
    }
])