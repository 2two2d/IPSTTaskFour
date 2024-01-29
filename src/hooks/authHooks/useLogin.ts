import {TAuthPayload} from "../../types/TAuth.ts";
import {useMutation} from "@tanstack/react-query";
import authService from "../../services/auth.service.ts";

export const useLogin = (data: TAuthPayload, setErrorMessage, navigate)=> {
    const {mutate: login} = useMutation({
        mutationKey: ['login'],
        mutationFn: () => authService.login(data),
        onSuccess: () => {
            setErrorMessage(() => '')
            navigate('/')
        },
        onError: (error: Error) => {
            setErrorMessage(() => error.response.data.message)
        }
    })

    return login
}