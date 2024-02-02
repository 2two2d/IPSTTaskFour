import {Chip} from "@mui/material";
import {useEffect, useState} from "react";
import {useChangeFolder} from "../../hooks/folderHooks/useChangeFolder.ts";
import {TFolder} from "../../types/TFolder.ts";
import {Edit} from "@mui/icons-material";

const FolderChip = ({folder, refetch, parentId}:
                    { folder: TFolder|undefined, refetch: any, parentId: string }) => {

    const [value, setValue] = useState<string | undefined>('folder')

    const [isEditing, setIsEditing] = useState<boolean>(false)

    const mutateEdit = useChangeFolder({parentId: parentId, name: value}, folder?.id)

    const switchIsEditing = () => {
        setIsEditing((prev) => !prev)
    }

    useEffect(() => {
        if (!isEditing) {
            mutateEdit()
            refetch()
        }
    }, [isEditing]);

    useEffect(() => {
        setValue(folder?.name)
    }, [folder?.name]);

    return (
        <div className="chip">
            {isEditing ?
                <input
                    type="text"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    maxLength={10}/> :
                <Chip label={value}></Chip>}
            <Edit onClick={() => switchIsEditing()}></Edit>
        </div>
    )
}

export default FolderChip