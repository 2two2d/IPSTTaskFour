import {useMutation} from "@tanstack/react-query";
import foldersService from "../../services/folders.service.ts";

export const useDeleteFolder = (id: string) => {
    const {mutate: deleteFolder} = useMutation({
        mutationKey: ['deleteFolder', id],
        mutationFn: () => foldersService.deleteFolder(id)
    })

    return deleteFolder
}