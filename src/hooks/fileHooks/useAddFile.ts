import {useMutation} from "@tanstack/react-query";
import {TFile} from "../../types/TFile.ts";
import filesService from "../../services/files.service.ts";

export const useAddFile = (data: TFile) => {
    const {mutate: addFile} = useMutation({
        mutationKey: ['addFile'],
        mutationFn: () => filesService.addFile(data),
    })

    return addFile
}