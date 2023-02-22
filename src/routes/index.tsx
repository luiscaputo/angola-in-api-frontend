import { createBrowserRouter } from "react-router-dom";
import Menu from "../components/Menu";
import Counties from "../pages/Couties/Index";
import ErrorPage from "../pages/ErrorPage";
import Identification from "../pages/Identification/Index";
import Validations from "../pages/Validations/Index";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Menu />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'identification',
                element: <Identification />
            },
            {
                path: 'counties',
                element: <Counties />
            },
            {
                path: 'validations',
                element: <Validations />
            },
        ]
    }
])