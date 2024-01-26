export enum folderChildTypeEnum {"folder" = "folder",
                                 "file" = "file"}

export type TFolderChild = {
    id: string,
    name: string,
    type: folderChildTypeEnum
}

export type TFolder = {
    id: string,
    name: string,
    children: TFolderChild[]
}

export type TFolderPayload = {
    parentId: "root" | string,
    name: string
}

export type TFolderDeleted = {
    message: string
}

