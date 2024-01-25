import HeaderApp from "./components/HeaderApp.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomeView from "./views/HomeView.tsx";
import RegistrationView from "./views/RegistrationView.tsx";
import AuthView from "./views/AuthView.tsx";

function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <HeaderApp></HeaderApp>,
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

    return (
      <>
        <div id="app">
          <RouterProvider router={router}/>
        </div>
      </>
    )
}

export default App
