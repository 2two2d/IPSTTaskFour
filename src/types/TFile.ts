export type TFile = {
    folderId: string
    file: File[]
}

export type TFileResponse = {
    id: string,
    file: {
        name: string,
        filepath: string
    }
    type: "file"
}

export type TFileDeleted = {
    message: string
}