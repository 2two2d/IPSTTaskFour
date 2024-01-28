import {SubmitHandler, useForm} from "react-hook-form";
import {Button, TextField} from "@mui/material";
import * as React from "react";
import {TInputs} from "../../types/TFormInputs.ts";

const LoginForm = () => {

    const {register, handleSubmit, formState: {errors}} = useForm<TInputs>()

    const onSubmit: SubmitHandler<TInputs> = (data: TInputs): void => {
        console.log(data)
    }

    return (
        <form id="login_form" onSubmit={handleSubmit(onSubmit)}>
            <TextField
                {...register('username', {required: true})}
                error={Boolean(errors.username)}
                color="secondary"
                sx={{input: {color: "whitesmoke"}}}
                variant="filled"
                placeholder="Username"
                helperText="Username is required!">
            </TextField>
            <TextField
                {...register('password', {required: true})}
                error={Boolean(errors.password)}
                type="password"
                color="secondary"
                sx={{input: {color: "whitesmoke"}}}
                variant="filled"
                placeholder="Password"
                helperText="Password is required!">
            </TextField>
            <Button
                type="submit"
                onSubmit={(e: React.FormEvent<HTMLButtonElement>)=>e.preventDefault()}
                color="secondary"
            >Login</Button>
        </form>
    )
}

export default LoginForm