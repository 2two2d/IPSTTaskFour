import {ToggleButton, ToggleButtonGroup, Typography} from "@mui/material"

const FormToggle = ({whichForm, handleChangeForm}:
                        { whichForm: string | null, handleChangeForm }) => {

    return (
        <ToggleButtonGroup
            value={whichForm}
            exclusive
            onChange={handleChangeForm}
            aria-label="text alignment"
        >
            <ToggleButton value="file" color="secondary">
                <Typography>Файл</Typography>
            </ToggleButton>
            <ToggleButton value="form" color="secondary">
                <Typography>Папку</Typography>
            </ToggleButton>
        </ToggleButtonGroup>
    )
}

export default FormToggle