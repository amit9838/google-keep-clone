import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Drawer as MuiDrawer } from '@mui/material';


// Componets
import HeaderBar from './HeaderBar';
import NavList from '../NavList';

const drawerWidth = 220;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    zIndex: 1201,
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const SwipeDrawer = () => {
    // const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    const handleDrawer = () => {
        setOpen(prevState => !prevState);
    };


    return (
        <>
            <HeaderBar open={open} handleDrawer={handleDrawer} />
            <Drawer variant="permanent" open={open}>
                <DrawerHeader></DrawerHeader>
                <NavList open={open} />
            </Drawer>
        </>
    );
}


export default SwipeDrawer;