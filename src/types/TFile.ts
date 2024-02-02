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
}

export type TFileDeleted = {
    message: string
}