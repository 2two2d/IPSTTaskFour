import {Chip, TextField} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import {useEffect, useState} from "react";
import {TFolder, TFolderChild} from "../../types/TFolder.ts";
import {useChangeFolder} from "../../hooks/folderHooks/useChangeFolder.ts";

const FolderLabel = ({folder, parentId}: { folder: TFolder | TFolderChild, parentId: string }) => {

    const [isEditing, setIsEditing] = useState<boolean>(false)

    const [name, setName] = useState<string>(folder.name)

    const changeFolder = useChangeFolder({name: name || 'undefined', parentId: parentId}, folder.id)

    useEffect(() => {
        console.log(123)
        if (!isEditing && name !== folder.name) changeFolder()
    }, [isEditing]);

    return (
        <div className="chip">
            <EditIcon onClick={() => setIsEditing((prev) => !prev)}></EditIcon>
            {!isEditing ?
                <Chip label={name}></Chip> :
                <TextField
                    variant={"standard"}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                ></TextField>}

        </div>
    )
}

export default FolderLabel