import {Box, Button} from "@mui/material";
import {useLocation, useNavigate} from "react-router-dom";
import authService from "../services/auth.service.ts";

const HeaderApp = () => {

    const navigate = useNavigate()

    const location = useLocation()

    const isCurrentPath = (path: string): boolean => {
        return location.pathname === path
    }

    const logout = () => {
        authService.logout()
        navigate(0)
    }

    return (
        <Box id="header">
            <Box id="header__nav" sx={{backgroundColor: 'primary.main'}}>
                <Button
                    color={'secondary'}
                    variant={isCurrentPath('/') ? 'contained' : 'outlined'}
                >Файлы</Button>
                <div id="auth_button_group">
                    { authService.getToken() ?
                        <Button
                            color={'secondary'}
                            onClick={() => logout()}>Выйти</Button>
                    : <><Button
                            color={'secondary'}
                            variant={isCurrentPath('/register') ? 'contained' : 'outlined'}
                            onClick={() => navigate('/register')}>Регистрация</Button>
                        <Button
                            color={'secondary'}
                            variant={isCurrentPath('/authenticate') ? 'contained' : 'outlined'}
                            onClick={() => navigate('/authenticate')}>Войти</Button></>}
                </div>
            </Box>
        </Box>
    )
}

export default HeaderApp