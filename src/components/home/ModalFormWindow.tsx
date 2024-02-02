import {Box, Button} from "@mui/material";
import {useState} from "react";
import FileForm from "./forms/FileForm.tsx";
import FolderForm from "./forms/FolderForm.tsx";
import FormToggle from "./forms/FormToggle.tsx";
import * as React from "react";

const ModalFormWindow = ({folderId, closeModalWindow, handleCreated}: {
    folderId: string,
    closeModalWindow: any,
    handleCreated: any
}) => {

    const [whichForm, setWhichForm] = useState<string | null>('file')

    const handleChangeForm = (event: React.MouseEvent<HTMLElement>,
                              newForm: string | null) => {
        setWhichForm(newForm)
    }

    return (
        <Box id="modal_window">
            <FormToggle whichForm={whichForm} handleChangeForm={handleChangeForm}></FormToggle>
            {whichForm === 'file' ?
                <FileForm
                    folderId={folderId}
                    handleCreated={handleCreated}
                /> :
                <FolderForm
                    folderId={folderId}
                    handleCreated={handleCreated}
                />}
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

export default ModalFormWindow