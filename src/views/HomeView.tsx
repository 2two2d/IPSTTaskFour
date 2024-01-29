import authService from "../services/auth.service.ts";
import NoAuthMessage from "../components/home/NoAuthMessage.tsx";

const HomeView = () => {

    const token: string = authService.getToken()

    return (
        <div id="main_board">
            {token ? <p>123</p>:
            <NoAuthMessage></NoAuthMessage>}
        </div>
    )
}

export default HomeView