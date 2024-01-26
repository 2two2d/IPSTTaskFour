import {useQuery} from "@tanstack/react-query";
import foldersService from "../../services/folders.service.ts";

export const useGetFolder = (id: number) => {
    return useQuery({
        queryKey: ['getFolder'],
        queryFn: () => foldersService.getFolder(id),
        select: ({data}) => data
    })
}