import {useMutation} from "@tanstack/react-query";
import {TFile} from "../../types/TFile.ts";
import filesService from "../../services/files.service.ts";

export const useAddFile = (data: TFile) => {
    const {mutate: addFile, isSuccess} = useMutation({
        mutationKey: ['addFile', data],
        mutationFn: () => filesService.addFile(data),
    })

    return {addFile, isSuccess}
}