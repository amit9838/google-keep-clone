import * as React from 'react';
import { List, ListItem, ListItemButton, ListItemText, ListItemIcon } from '@mui/material';
import { LightbulbOutlined, ArchiveOutlined, DeleteOutlineOutlined, FormatUnderlined } from '@mui/icons-material';
import { Link, useNavigate, useLocation, Navigate } from "react-router-dom";
import styled from '@emotion/styled';



const LinkText = styled(ListItemText)`
     
`;

function NavList({ open }) {

    const navList = [
        { id: 1, name: "Notes", icon: <LightbulbOutlined />, link: '/' },
        { id: 2, name: "Archive", icon: <ArchiveOutlined />, link: '/archives' },
        { id: 3, name: "Trash", icon: <DeleteOutlineOutlined />, link: '/trash' },
    ]

    return (
        <List>
            {navList.map((item) => (
                <ListItem key={item.id} disablePadding sx={{ display: 'block' }}>
                    <Link to={item.link}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,

                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <span>{item.icon}</span>
                            </ListItemIcon>
                            <LinkText primary={item.name} sx={{ opacity: open ? 1 : 0 }} />
                        </ListItemButton>
                    </Link>
                </ListItem>
            ))}
        </List>
    )
}

export default NavList