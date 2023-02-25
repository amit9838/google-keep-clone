import * as React from 'react';
import {List, ListItem, ListItemButton, ListItemText, ListItemIcon} from '@mui/material';
import { LightbulbOutlined, ArchiveOutlined, DeleteOutlineOutlined } from '@mui/icons-material';



function NavList({ open }) {

    const navList = [
        { id: 1, name: "Notes", icon:<LightbulbOutlined/> },
        { id: 2, name: "Archive", icon: <ArchiveOutlined/>},
        { id: 3, name: "Trash", icon: <DeleteOutlineOutlined/>},
    ]

return (
    <List>
        {navList.map((item) => (
            <ListItem key={item.id} disablePadding sx={{ display: 'block' }}>
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
                    <ListItemText primary={item.name} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
            </ListItem>
        ))}
    </List>
)
}

export default NavList