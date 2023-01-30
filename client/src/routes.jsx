import { useRoutes } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage"
import Home from "./pages/Home";





export default function Routes() {
    return useRoutes([
        {
            path: "/",
            element: <Home />
        },
        {
            path: "*",
            element: <ErrorPage />
        }
    ])
}