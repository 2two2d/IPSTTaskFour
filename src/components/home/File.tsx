import {TFileResponse} from "../../types/TFile.ts";
import {Box, Chip} from "@mui/material";

const File = ({file}: { file: TFileResponse }) => {

    return (
        <Box className="file">
            <Chip
                label={<a
                            href={file.file.filepath}
                            target={"_blank"}
                        >{file.file.name}</a>}
            ></Chip>
        </Box>
    )
}

export default File