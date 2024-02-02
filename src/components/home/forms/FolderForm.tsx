import {useForm} from "react-hook-form";
import {Button, TextField} from "@mui/material";
import {useAddFolder} from "../../../hooks/folderHooks/useAddFolder.ts";
import * as React from "react";

const FolderForm = ({folderId, handleCreated}: { folderId: string, handleCreated: any }) => {

    type TInputs = {
        name: string
    }

    const {register, handleSubmit, formState: {errors}, watch} = useForm<TInputs>()

    const name: string = watch('name')

    const addFolder = useAddFolder({parentId: folderId, name: name})

    const submit = () => {
        addFolder()
        handleCreated()
    }

    return (
        <form onSubmit={handleSubmit(() => submit())}>
            <TextField
                type="text"
                {...register('name', {required: true})}
                error={Boolean(errors.name)}
                helperText="Поле обязательно"
                maxRows={10}
                placeholder="Название папки"
                variant="filled"
                sx={{input: {color: "whitesmoke"}}}/>
            <Button
                onSubmit={(e: React.FormEvent<HTMLButtonElement>) => e.preventDefault()}
                color="secondary"
                type="submit">Создать папку</Button>
        </form>
    )
}

export default FolderForm