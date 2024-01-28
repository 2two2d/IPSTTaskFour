import {Box, Button} from "@mui/material";
import {useLocation, useNavigate} from "react-router-dom";

const HeaderApp = () => {

    const navigate = useNavigate()

    const location = useLocation()

    const isCurrentPath = (path: string): boolean => {
        return location.pathname === path
    }

    return (
        <Box id="header">
            <Box id="header__nav" sx={{backgroundColor: 'primary.main'}}>
                <Button
                    color={'secondary'}
                    variant={isCurrentPath('/') ? 'contained' : 'outlined'}
                    onClick={() => navigate('/')}
                >Files</Button>
                <div id="auth_button_group">
                    <Button
                        color={'secondary'}
                        variant={isCurrentPath('/register') ? 'contained' : 'outlined'}
                        onClick={() => navigate('/register')}>Register</Button>
                    <Button
                        color={'secondary'}
                        variant={isCurrentPath('/authenticate') ? 'contained' : 'outlined'}
                        onClick={() => navigate('/authenticate')}>Log in</Button>
                </div>
            </Box>
        </Box>
    )
}

export default HeaderApp