import {useQuery} from "@tanstack/react-query";
import authService from "../../services/auth.service.ts";
import {TAuthPayload} from "../../types/TAuth.ts";

export const useLogin = (data: TAuthPayload) => {
    return useQuery({
        queryKey: ['login'],
        queryFn: () => authService.login(data),
        select: ({data}) => data
    })
}