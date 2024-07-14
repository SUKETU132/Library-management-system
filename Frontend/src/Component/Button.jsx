import { Button } from '@mui/material';

export default function Buttons(props) {
    return (
        <>
            <Button id="btn" variant="outlined">{props.name}</Button>
        </>
    )
}