import axios from "axios";
import {TFolder, TFolderPayload, TFolderDeleted} from "../types/TFolder.ts";

class FoldersService {
    private URL: string = 'http://5.35.93.223:7000/drive/folder'

    async getFolder(id: string) {
        return axios.get<{ data: TFolder }>(`${this.URL}/${id}`)
    }

    async changeFolder(id: string, data: TFolderPayload) {
        return axios.patch<{ data: Omit<TFolder, 'children'> }>(`${this.URL}/${id}`, {name: data.name, id: data.parentId})
    }

    async deleteFolder(id: string) {
        return axios.delete<TFolderDeleted>(`${this.URL}/${id}`)
    }

    async addFolder(data: TFolderPayload) {
        return axios.post<{ data: Omit<TFolder, 'children'> }>(this.URL, data)
    }

}

export default new FoldersService()