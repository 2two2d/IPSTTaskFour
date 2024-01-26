import {useQuery} from "@tanstack/react-query";
import filesService from "../../services/files.service.ts";

export const useDeleteFile = (id: number) => {
    return useQuery({
        queryKey: ['deleteFile'],
        queryFn: () => filesService.deleteFile(id),
        select: ({data}) => data
    })
}