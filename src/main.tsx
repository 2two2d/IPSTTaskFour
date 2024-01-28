import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import store from "./store/store.ts";
import {Provider} from "react-redux";
import {ThemeProvider} from "@mui/material";
import customTheme from "./theme/ThemeProvider.ts"
import './style/index.css'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomeView from "./views/HomeView.tsx";
import RegistrationView from "./views/RegistrationView.tsx";
import AuthView from "./views/AuthView.tsx";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
})

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

ReactDOM.createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <ThemeProvider theme={customTheme}>
                <RouterProvider router={router}/>
            </ThemeProvider>
        </Provider>
    </QueryClientProvider>
)
