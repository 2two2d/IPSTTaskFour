import {useQuery} from "@tanstack/react-query";
import {TFolderPayload} from "../../types/TFolder.ts";
import foldersService from "../../services/folders.service.ts";

export const useAddFolder = (data: TFolderPayload) => {
    return useQuery({
        queryKey: ['addFolder'],
        queryFn: () => foldersService.addFolder(data),
        select: ({data}) => data
    })
}