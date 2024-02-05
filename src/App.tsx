import HeaderApp from "./components/HeaderApp.tsx";
import {Outlet} from "react-router-dom";
import {useEffect} from "react";
import authService from "./services/auth.service.ts";

function App() {

    const token: string = authService.getToken()

    return (
      <>
        <div id="app">
            <HeaderApp></HeaderApp>
            <Outlet></Outlet>
        </div>
      </>
    )
}

export default App
