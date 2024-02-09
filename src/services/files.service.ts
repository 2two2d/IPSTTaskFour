import axios from "axios";
import {TFile, TFileDeleted, TFileResponse} from "../types/TFile.ts";

class FilesService {
    private URL: string = 'http://5.35.93.223:7000/drive/files'

    async addFile(data: TFile) {

        function objectToFormData(obj: object): FormData {
            const formData = new FormData();

            Object.entries(obj).forEach((value: any, key: string) => {
                formData.append(key, value);
            });

            return formData;
        }


        return axios.post<TFileResponse>(this.URL, {folderId: data.folderId, file: objectToFormData(data)})

    }

    async deleteFile(id: string) {
        return axios.delete<TFileDeleted>(`${this.URL}/${id}`)
    }

}

export default new FilesService()