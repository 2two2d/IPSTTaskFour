import {SubmitHandler, useForm} from "react-hook-form";
import {Button, TextField} from "@mui/material";
import * as React from "react";
import {TInputs} from "../../types/TFormInputs.ts";
import {useMutation} from "@tanstack/react-query";
import {TAuthPayload} from "../../types/TAuth.ts";
import authService from "../../services/auth.service.ts";

const RegisterForm = () => {

    const {register, handleSubmit, formState: {errors}} = useForm<TInputs>()

    const {mutate} = useMutation({
        mutationKey: ['register'],
        mutationFn: (data: TAuthPayload) => authService.register(data)
    })

    const onSubmit: SubmitHandler<TInputs> = (data: TInputs): void => {
        mutate({login: data.username, password: data.password})
    }

    return (
        <form id="register_form" onSubmit={handleSubmit(onSubmit)}>
            <TextField
                {...register('username', {required: true})}
                error={Boolean(errors.username)}
                color="secondary"
                sx={{input: {color: "whitesmoke"}}}
                variant="filled"
                placeholder="Username"
                helperText={Boolean(errors.username) && "Username is required!"}>
            </TextField>
            <TextField
                {...register('password', {required: true})}
                error={Boolean(errors.password)}
                type="password"
                color="secondary"
                sx={{input: {color: "whitesmoke"}}}
                variant="filled"
                placeholder="Password"
                helperText={Boolean(errors.password) && "Password is required!"}>
            </TextField>
            <Button
                type="submit"
                onSubmit={(e: React.FormEvent<HTMLButtonElement>)=>e.preventDefault()}
                color="secondary"
            >Register</Button>
        </form>
    )
}

export default RegisterForm