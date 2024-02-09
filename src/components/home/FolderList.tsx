import {Box} from "@mui/material";
import Folder from "./Folder.tsx";
import File from "./File.tsx";
import {TFolder} from "../../types/TFolder.ts";
import { SubdirectoryArrowRight } from "@mui/icons-material";

const FolderList = ({folder}: {folder: TFolder}) => {

    return (
        <Box className="sub_folders">
            {folder?.children.map((item)=> {
                return  <Box key={item.id} className="sub_folder">
                    <SubdirectoryArrowRight></SubdirectoryArrowRight>
                    {item.type === "folder" ?
                        <Folder key={item.id} id={item.id} parentId={folder.id}></Folder>:
                        <File></File>}
                </Box>
            })}
        </Box>
    )
}

export default FolderList