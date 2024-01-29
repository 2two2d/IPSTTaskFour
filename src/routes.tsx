import {createBrowserRouter} from "react-router-dom";
import App from "./App.tsx";
import HomeView from "./views/HomeView.tsx";
import RegistrationView from "./views/RegistrationView.tsx";
import AuthView from "./views/AuthView.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element : <HomeView></HomeView>
            },
            {
                path: "/register",
                element : <RegistrationView></RegistrationView>
            },
            {
                path: "/authenticate",
                element : <AuthView></AuthView>
            }
        ]
    }
])

export default router