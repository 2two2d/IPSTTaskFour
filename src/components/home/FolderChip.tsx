import {Chip} from "@mui/material";

const FolderChip = ({label}: { label: string|undefined }) => {

    return (
        <div className="chip">
                <Chip label={label}></Chip>
        </div>
    )
}

export default FolderChip