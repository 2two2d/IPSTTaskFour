import {useMutation} from "@tanstack/react-query";
import foldersService from "../../services/folders.service.ts";
import {useGetFolder} from "./useGetFolder.ts";

export const useDeleteFolder = (id: string, idParent: string) => {

    const {refetch: refetchParentFolder} = useGetFolder(idParent)

    const {mutate: deleteFolder, isSuccess} = useMutation({
        mutationKey: ['deleteFolder', id],
        mutationFn: () => foldersService.deleteFolder(id),
        onSuccess: () => {
            refetchParentFolder()
        }
    })

    return {deleteFolder, isSuccess}
}