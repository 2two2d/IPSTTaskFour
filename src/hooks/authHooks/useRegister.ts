import {TAuthPayload} from "../../types/TAuth.ts";
import {useMutation} from "@tanstack/react-query";
import authService from "../../services/auth.service.ts";

export const useRegister = (data: TAuthPayload, navigate)=> {
    const {mutate: register} = useMutation({
        mutationKey: ['register'],
        mutationFn: () => authService.register(data),
        onSuccess: () => {
            navigate('/')
        }
    })

    return register
}