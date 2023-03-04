import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { IconButton, MenuList } from '@mui/material';
import { MoreVertOutlined } from '@mui/icons-material';
import styled from '@emotion/styled';


const MenuCus = styled(Menu)`
    box-shadow:0 0 5px;
`;

export default function FadeMenu({ menulist,setHovered }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        setHovered(false);
    };

    return (
        <div>
            <IconButton
                size='small'
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MoreVertOutlined fontSize='small' />
            </IconButton>
            <MenuCus
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
                size="small"
            >
                <MenuList dense disablePadding={true} boxShadow={1} >
                    <MenuItem onClick={handleClose} sx={{ fontFamily: 'Inter' }}>Delete Permantly</MenuItem>
                    <MenuItem onClick={handleClose} sx={{ fontFamily: 'Inter' }}>Change Color</MenuItem>
                </MenuList>
            </MenuCus>
        </div>
    );
}