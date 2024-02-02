import authService from "../services/auth.service.ts";
import NoAuthMessage from "../components/home/NoAuthMessage.tsx";
import Folder from "../components/home/Folder.tsx";

const HomeView = () => {

    const token: string = authService.getToken()

    return (
        <div id="main_board">
            {token ? (
                <div id="folders_board">
                    <Folder id={"root"} parentId={''}></Folder>
                </div>
            ) : <NoAuthMessage></NoAuthMessage>}
        </div>
    )
}

export default HomeView