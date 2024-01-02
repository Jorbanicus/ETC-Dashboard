import * as React from 'react';
import { red } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import DangerousIcon from '@mui/icons-material/Dangerous';


export default function FailIcon() {
    return (
        <Avatar sx={{ bgcolor: red[500] }}>
            <DangerousIcon />
        </Avatar>
    );
}