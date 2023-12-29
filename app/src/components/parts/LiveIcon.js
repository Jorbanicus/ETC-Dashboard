import * as React from 'react';
import { green} from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

export default function LiveIcon() {
    return (
        <Avatar sx={{ bgcolor: green[500] }}>
            <ThumbUpAltIcon />
        </Avatar>
    );
}


