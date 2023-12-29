import * as React from 'react';
import { red } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import PageviewIcon from '@mui/icons-material/Pageview';


export default function FailIcon() {
    return (
        <Avatar sx={{ bgcolor: red[500] }}>
            <PageviewIcon />
        </Avatar>
    );
}