import {useForm} from "react-hook-form";
import {Button, TextField} from "@mui/material";
import {useAddFile} from "../../../hooks/fileHooks/useAddFile.ts";
import * as React from "react";
import {useState} from "react";

const FileForm = ({folderId, handleCreated}: { folderId: string, handleCreated: any }) => {

    type TInputs = {
        name: string,
        file: string,
    }

    const {register, watch, handleSubmit} = useForm<TInputs>()

    const file = watch('file')

    const addFile = useAddFile({folderId: folderId, file: file})

    const addHandler = (): void => {
        addFile()
        handleCreated()
    }

    return (
        <form onSubmit={handleSubmit(() => addHandler())}>
            <TextField
                type="file"
                {...register('file', {required: true})}
                placeholder="Файл"
                sx={{input: {color: "whitesmoke"}}}/>
            <Button
                color="secondary"
                type="submit"
                onSubmit={(e: React.FormEvent<HTMLButtonElement>) => e.preventDefault()}>Создать файл</Button>
        </form>
    )
}

export default FileForm