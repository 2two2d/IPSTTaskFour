import {useForm} from "react-hook-form";
import {Button, TextField} from "@mui/material";

const FileForm = () => {

    type TInputs = {
        name: string,
        file: string,
    }

    const {register, getValues} = useForm<TInputs>()

    const addHandler = (): void => {
        const file = getValues('file')[0]
        const form_data = new FormData()
        form_data.append('image', file, file.name)
        console.log(form_data)
    }

    return (
        <form action="">
            <TextField type="text"
                       {...register('name', {required: true})}
                       maxRows={10}
                       placeholder="Название файла"
                       variant="filled"
                       sx={{input: {color: "whitesmoke"}}}/>
            <TextField type="file"
                       {...register('file', {required: true})}
                       placeholder="Файл"
                       sx={{input: {color: "whitesmoke"}}}/>
            <Button color="secondary" onClick={() => addHandler()}>Создать файл</Button>
        </form>
    )
}

export default FileForm