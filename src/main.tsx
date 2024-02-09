import ReactDOM from 'react-dom/client'
import store from "./store/store.ts";
import {Provider} from "react-redux";
import {ThemeProvider} from "@mui/material";
import customTheme from "./providers/ThemeProvider.ts"
import './style/index.css'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {RouterProvider} from "react-router-dom";
import router from "./routes.tsx";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchInterval: 120000,
            retryDelay: 1000
        },
    },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={customTheme}>
            <RouterProvider router={router}/>
        </ThemeProvider>
    </QueryClientProvider>
)
