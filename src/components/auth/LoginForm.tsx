import {useForm} from "react-hook-form";
import {Button, Checkbox, TextField, Typography} from "@mui/material";
import * as React from "react";
import {TInputs} from "../../types/TFormInputs.ts";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useLogin} from "../../hooks/authHooks/useLogin.ts";

const LoginForm = () => {

    const [checked, setChecked] = useState<boolean>(false)

    const {register, handleSubmit, formState: {errors}, getValues} = useForm<TInputs>()

    const navigate = useNavigate()

    const [errorMessage, setErrorMessage] = useState<string>('')

    const login = useLogin({login: getValues('username'),
                                                               password: getValues('password')},
                                                               setErrorMessage,
                                                               navigate)

    return (
        <form id="login_form" onSubmit={handleSubmit(() => login())}>
            <TextField
                {...register('username', {required: true})}
                error={Boolean(errors.username)}
                color="secondary"
                sx={{input: {color: "whitesmoke"}}}
                variant="filled"
                placeholder="Имя пользователя"
                helperText={Boolean(errors.username) && "НЕобходимо имя пользователя!"}>
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
            {errorMessage && <Typography id="error_message">{errorMessage}</Typography>}
            <Button
                type="submit"
                onSubmit={(e: React.FormEvent<HTMLButtonElement>)=>e.preventDefault()}
                color="secondary"
            >Войти</Button>
        </form>
    )
}

export default LoginForm