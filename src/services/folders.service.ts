import axios from "axios";
import {TFolder, TFolderPayload, TFolderDeleted} from "../types/TFolder.ts";


class FoldersService {
    private URL: string = 'http://5.35.93.223:7000/drive/folder'

    async getFolder(id: number) {
        return axios.get<{data: TFolder}>(`${this.URL}/${id}`)
    }

    async changeFolder(id: number, data: TFolderPayload) {
        return axios.patch<{data: Omit<TFolder, 'children'>}>(`${this.URL}/${id}`, data)
    }

    async deleteFolder(id: number) {
        return axios.delete<TFolderDeleted>(`${this.URL}/${id}`)
    }

    async addFolder(data: TFolderPayload) {
        return axios.post<{data: Omit<TFolder, 'children'>}>(this.URL, data)
    }

}

export default new FoldersService()