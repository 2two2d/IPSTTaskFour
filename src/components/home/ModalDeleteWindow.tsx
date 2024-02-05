import {Box, Button, Typography} from "@mui/material";
import {TFolder} from "../../types/TFolder.ts";
import {useDeleteFolder} from "../../hooks/folderHooks/useDeleteFolder.ts";

const ModalDeleteWindow = ({folder, parentId, handleDeleted, closeModalWindow}: {
    folder: TFolder | undefined,
    parentId: string,
    handleDeleted: any,
    closeModalWindow: any
}) => {

    const {deleteFolder, isSuccess} = useDeleteFolder(folder.id, parentId)

    const handleDeleteFolder = () => {
        deleteFolder()
        handleDeleted()
    }

    return (
        <Box id="modal_window">
            <Typography>Вы уверены, что хотите удалить файл {folder?.name}?</Typography>
            <Button
                onClick={() => handleDeleteFolder()}
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