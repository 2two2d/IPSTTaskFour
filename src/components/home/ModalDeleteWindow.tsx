import {Box, Button, Typography} from "@mui/material";
import {TFolder} from "../../types/TFolder.ts";
import {useDeleteFolder} from "../../hooks/folderHooks/useDeleteFolder.ts";

const ModalDeleteWindow = ({folder, closeModalWindow}: { folder: TFolder | undefined, closeModalWindow: any }) => {

    const deleteFolder = useDeleteFolder(folder.id)

    const handleDelete = () => {
        deleteFolder()
    }

    return (
        <Box id="modal_window">
            <Typography>Вы уверены, что хотите удалить файл {folder?.name}?</Typography>
            <Button
                onClick={()=>handleDelete()}
                color="warning"
                variant="contained"
            >Удалить</Button>
            <Button
                onClick={() => closeModalWindow()}
                sx={{marginTop: '10px'}}
                color="secondary"
                size="large"
                variant="contained"
            >Назад</Button>
        </Box>
    )
}

export default ModalDeleteWindow