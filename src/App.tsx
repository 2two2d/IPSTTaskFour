import HeaderApp from "./components/HeaderApp.tsx";
import {Outlet} from "react-router-dom";

function App() {

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
