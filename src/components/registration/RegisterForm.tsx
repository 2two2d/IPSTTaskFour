import {useForm} from "react-hook-form";
import {Button, Checkbox, TextField, Typography} from "@mui/material";
import * as React from "react";
import {TInputs} from "../../types/TFormInputs.ts";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useRegister} from "../../hooks/authHooks/useRegister.ts";

const RegisterForm = () => {

    const navigate = useNavigate()

    const [checked, setChecked] = useState<boolean>(false)

    const {register, handleSubmit, formState: {errors}, getValues} = useForm<TInputs>()

    const registerUser = useRegister({login: getValues('username'),
                                                                         password: getValues('password')},
                                                                         navigate)

    return (
        <form id="register_form" onSubmit={handleSubmit(() => registerUser())}>
            <TextField
                {...register('username', {required: true})}
                error={Boolean(errors.username)}
                color="secondary"
                sx={{input: {color: "whitesmoke"}}}
                variant="filled"
                placeholder="Имя пользователя"
                helperText={Boolean(errors.username) && "Необходимо имя пользователя!"}>
            </TextField>
            <TextField
                {...register('password', {required: true})}
                error={Boolean(errors.password)}
                type={checked ? 'text': 'password'}
                color="secondary"
                sx={{input: {color: "whitesmoke"}}}
                variant="filled"
                placeholder="Пароль"
                helperText={Boolean(errors.password) && "Необходим пароль!"}>
            </TextField>
            <Typography id="show_password">Показать пароль<Checkbox
                    color="secondary"
                    onClick={() => setChecked(!checked)}
                ></Checkbox>
            </Typography>
            <Button
                type="submit"
                onSubmit={(e: React.FormEvent<HTMLButtonElement>)=>e.preventDefault()}
                color="secondary"
            >Зарегистрироваться</Button>
        </form>
    )
}

export default RegisterForm