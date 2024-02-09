import {useQuery} from "@tanstack/react-query";
import foldersService from "../../services/folders.service.ts";

export const useGetFolder = (id: string) => {
    return useQuery({
        queryKey: ['getFolder', id],
        queryFn: () => foldersService.getFolder(id),
        select: ({data}) => data,
    })
}