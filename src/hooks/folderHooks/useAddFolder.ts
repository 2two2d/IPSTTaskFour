import {useMutation} from "@tanstack/react-query";
import {TFolderPayload} from "../../types/TFolder.ts";
import foldersService from "../../services/folders.service.ts";


export const useAddFolder = (data: TFolderPayload) => {
    const {mutate: addFolder, isSuccess} = useMutation({
        mutationKey: ['addFolder', data],
        mutationFn: () => foldersService.addFolder(data)
    })

    return {addFolder, isSuccess}
}