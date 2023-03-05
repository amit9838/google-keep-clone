import * as React from 'react';
import { styled } from '@mui/material/styles';
import {AppBar ,Toolbar, Typography, IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from './Google-keep-logo1.png'

const Header = styled(AppBar)`
    z-index:1201;
    background-color:#fff;
    color:black;
    height:70px;
    box-shadow:inset 0 -1px 0 0 #dadce0;
`;

const Title = styled(Typography) `
    color:#5f6368;
    font-size:1.3rem;
    margin-left:1rem;
`;

const HeaderBar = ({ handleDrawer, open }) => {

    const img = logo;

    return (
        <>
            <Header open={open}>
                <Toolbar>
                    <IconButton
                        onClick={handleDrawer}
                        edge="start"
                        sx={{ marginRight: 1, }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <img src={img} alt="logo" style = {{width:34}}/>
                    <Title>Keep</Title>
                </Toolbar>
            </Header>
        </>
    )
}


export default HeaderBar;