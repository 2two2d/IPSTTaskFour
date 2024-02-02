import {Box, Button, Typography} from "@mui/material";
import {useState} from "react";
import FileForm from "./forms/FileForm.tsx";
import FolderForm from "./forms/FolderForm.tsx";
import FormToggle from "./forms/FormToggle.tsx";
import * as React from "react";
import {TFolder} from "../../types/TFolder.ts";

const ModalDeleteWindow = ({folder, closeDeleteWindow}: { folder: TFolder | undefined, closeDeleteWindow: any }) => {



    return (
        <Box id="modal_window">
            <Typography>Вы уверены, что хотите удалить файл {folder?.name}?</Typography>
            <Button color="warning" variant="contained">Удалить</Button>
            <Button
                onClick={() => closeDeleteWindow()}
                sx={{marginTop: '10px'}}
                color="secondary"
                size="large"
                variant="contained"
            >Назад</Button>
        </Box>
    )
}

export default ModalDeleteWindow