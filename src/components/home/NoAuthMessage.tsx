import {Button, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

const NoAuthMessage = () => {

    const navigate = useNavigate()

    return (
        <Typography id="no_auth_message">Войдите в систему! <Button
            color={'primary'}
            variant="contained"
            onClick={() => navigate('/authenticate')}
        >Вход</Button></Typography>
    )
}

export default NoAuthMessage