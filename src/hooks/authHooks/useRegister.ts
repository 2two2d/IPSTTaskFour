import {useQuery} from "@tanstack/react-query";
import authService from "../../services/auth.service.ts";
import {TAuthPayload} from "../../types/TAuth.ts";

export const useRegister = (data: TAuthPayload) => {
    return useQuery({
        queryKey: ['register'],
        queryFn: () => authService.register(data),
        select: ({data}) => data
    })
}