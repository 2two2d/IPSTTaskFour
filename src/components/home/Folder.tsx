import {TFolder} from "../../types/TFolder.ts";
import {Box} from "@mui/material";
import FolderIcon from '@mui/icons-material/Folder';
import {Add} from "@mui/icons-material";
import FolderChip from "./FolderChip.tsx";
import {useState} from "react";
import ModalFormWindow from "./ModalFormWindow.tsx";
import {useGetFolder} from "../../hooks/folderHooks/useGetFolder.ts";
import FolderList from "./FolderList.tsx";
import CloseIcon from '@mui/icons-material/Close';
import ModalDeleteWindow from "./ModalDeleteWindow.tsx";

const Folder = ({id, parentId = ''}: { id: string, parentId: string }) => {

    const {data, refetch} = useGetFolder(id)

    const folder: TFolder | undefined = data?.data

    const [showFormModalWindow, setShowFormModalWindow] = useState<boolean>(false)
    const [showDeleteModalWindow, setShowDeleteModalWindow] = useState<boolean>(false)

    const [showSubFolders, setShowSubFolders] = useState<boolean>(true)

    return (
        <Box className="folder">
            <Box className="folder_options">
                <FolderIcon onClick={() => setShowSubFolders(prev => !prev)}></FolderIcon>
                <CloseIcon onClick={() => setShowDeleteModalWindow(true)}></CloseIcon>
                <FolderChip folder={folder} refetch={refetch} parentId={parentId}></FolderChip>
                <Add onClick={() => setShowFormModalWindow(true)}></Add>
                {showFormModalWindow &&
                    <ModalFormWindow folderId={folder?.id} closeModalWindow={() => setShowFormModalWindow(false)}/>}
                {showDeleteModalWindow &&
                    <ModalDeleteWindow folder={folder} closeModalWindow={() => setShowDeleteModalWindow(false)}/>}
            </Box>
            {Boolean(folder?.children.length) && showSubFolders && <FolderList folder={folder}></FolderList>}
        </Box>
    )
}

export default Folder