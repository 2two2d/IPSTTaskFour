import {useMutation} from "@tanstack/react-query";
import foldersService from "../../services/folders.service.ts";
import {TFolderPayload} from "../../types/TFolder.ts";

export const useChangeFolder = (data: TFolderPayload, id: string)=> {
    const {mutate: changeFolder} = useMutation({
        mutationKey: ['changeFolder'],
        mutationFn: () => foldersService.changeFolder(id, data),
    })

    return changeFolder
}