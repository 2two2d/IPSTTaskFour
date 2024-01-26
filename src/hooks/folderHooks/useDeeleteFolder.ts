import {useQuery} from "@tanstack/react-query";
import foldersService from "../../services/folders.service.ts";

export const useDeleteFolder = (id: number) => {
    return useQuery({
        queryKey: ['deleteFolder'],
        queryFn: () => foldersService.deleteFolder(id),
        select: ({data}) => data
    })
}