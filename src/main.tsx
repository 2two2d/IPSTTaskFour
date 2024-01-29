import ReactDOM from 'react-dom/client'
import store from "./store/store.ts";
import {Provider} from "react-redux";
import {ThemeProvider} from "@mui/material";
import customTheme from "./theme/ThemeProvider.ts"
import './style/index.css'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {RouterProvider} from "react-router-dom";
import router from "./routes.tsx";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
})



ReactDOM.createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <ThemeProvider theme={customTheme}>
                <RouterProvider router={router}/>
            </ThemeProvider>
        </Provider>
    </QueryClientProvider>
)
