import axios from "axios";
import {TFile, TFileDeleted, TFileResponse} from "../types/TFile.ts";

class FilesService {
    private URL: string = 'http://5.35.93.223:7000/drive/files'

    async addFile(data: TFile) {

        const reader = new FileReader()

        reader.onload = (e) => {
            return axios.post<TFileResponse>(this.URL, {folderId: data.folderId, file: e.target.result})
        }
        reader.readAsBinaryString(data.file[0])
    }

    async deleteFile(id: string) {
        return axios.delete<TFileDeleted>(`${this.URL}/${id}`)
    }

}

export default new FilesService()