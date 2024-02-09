import {useMutation} from "@tanstack/react-query";
import foldersService from "../../services/folders.service.ts";
import {TFolderPayload} from "../../types/TFolder.ts";

export const useChangeFolder = (data: TFolderPayload, id: string, refetchHandler?: any, refetchParentHandler?: any)=> {
    const {mutate: changeFolder, isSuccess} = useMutation({
        mutationKey: ['changeFolder', id],
        mutationFn: () => foldersService.changeFolder(id, data),
        onSuccess: () => {
            refetchHandler()
            refetchParentHandler()
        }
    })

    return {changeFolder, isSuccess}
}