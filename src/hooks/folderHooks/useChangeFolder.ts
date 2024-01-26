import {useQuery} from "@tanstack/react-query";
import foldersService from "../../services/folders.service.ts";
import {TFolderPayload} from "../../types/TFolder.ts";

export const useChangeFolder = (id: number, data: TFolderPayload) => {
    return useQuery({
        queryKey: ['changeFolder'],
        queryFn: () => foldersService.changeFolder(id, data),
        select: ({data}) => data
    })
}