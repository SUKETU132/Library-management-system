import React from 'react';
import Button from '@mui/material/Button'; // Import Button component from Material-UI

export default function Buttons(props) {
    return (
        <Button id="btn" variant="outlined" onClick={props.onClick}>
            {props.name}
        </Button>
    );
}
