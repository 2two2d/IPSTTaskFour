import {useQuery} from "@tanstack/react-query";
import {TFile} from "../../types/TFile.ts";
import filesService from "../../services/files.service.ts";

export const useAddFile = (data: TFile) => {
    return useQuery({
        queryKey: ['addFile'],
        queryFn: () => filesService.addFile(data),
        select: ({data}) => data
    })
}