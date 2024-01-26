import axios from "axios";
import {TFile, TFileDeleted, TFileResponse} from "../types/TFile.ts";

class FilesService {
    private URL: string = 'http://5.35.93.223:7000/drive/files'

    async addFile(data: TFile) {
        return axios.post<TFileResponse>(this.URL, data)
    }

    async deleteFile(id: number) {
        return axios.delete<TFileDeleted>(`${this.URL}/${id}`)
    }

}

export default new FilesService()