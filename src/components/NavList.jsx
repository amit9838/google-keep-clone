import React,{useEffect} from 'react';
import { List, ListItem, ListItemButton, ListItemText, ListItemIcon } from '@mui/material';
import { LightbulbOutlined, ArchiveOutlined, DeleteOutlineOutlined } from '@mui/icons-material';
import { Link, useLocation } from "react-router-dom";
import { grey } from '@mui/material/colors';
import './notes/Form.css'



function NavList({ open }) {
    const location = useLocation()

    const navList = [
        { id: 1, name: "Notes", icon: <LightbulbOutlined />, address: '/' },
        { id: 2, name: "Archive", icon: <ArchiveOutlined />, address: '/archives' },
        { id: 3, name: "Trash", icon: <DeleteOutlineOutlined />, address: '/trash' },
    ]


    
    useEffect(() => {
        let links = document.getElementsByClassName('navLabel')
        Array.from(links).forEach(e=>{
            e.style.textDecoration="none";
            e.style.fontFamily="inter";
        })
    }, [])
    

    return (
        <List sx={{marginTop:".5rem"}}>
            {navList.map((item) => (
                <ListItem key={item.id}  className={` ${location.pathname === item.address ? "active" : ""}`} disablePadding sx={{ display: 'block', "&:hover":{borderRadius:"0 2rem 2rem 0"}}}>
                    <Link to={item.address} className = "navLabel">
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                                backgroundColor:"none",
                                "&:hover":{borderRadius:"0 2rem 2rem 0",  backgroundColor:"none"}}
                            }
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
                            <ListItemText  primary={item.name} sx={{ opacity: open ? 1 : 0, color:grey[800]}}/>
                        </ListItemButton>
                    </Link>
                </ListItem>
            ))}
        </List>
    )
}

export default NavList