import { createBrowserRouter } from "react-router-dom";
import Menu from "../components/Menu";
import Counties from "../pages/Couties/Index";
import ErrorPage from "../pages/ErrorPage";
import UseTerms from "../pages/UseTerms/Index";
import Repositories from "../pages/Repositories/Index";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Menu />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'documentations',
                element: ''
            },
            {
                path: 'repositories',
                element:  <Repositories />
            },
            {
                path: 'use-terms',
                element: <UseTerms />
            },
        ]
    }
])