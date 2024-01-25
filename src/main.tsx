import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import store from "./store/store.ts";
import {Provider} from "react-redux";
import {ThemeProvider} from "@mui/material";
import customTheme from "./theme/ThemeProvider.ts"
import './style/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <ThemeProvider theme={customTheme}>
            <App />
        </ThemeProvider>
    </Provider>
)
