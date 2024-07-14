import TextField from '@mui/material/TextField';
import './Component.css';

export default function Inputfield(props) {
    return (
        <>
            <TextField name={props.name} id="outlined-basic" label={props.label} type={props.type} variant="outlined"
                inputProps={{
                    sx: { fontSize: "13px", marginTop: "4px" }
                }} />
        </>
    )
}