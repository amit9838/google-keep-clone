import  {useContext,useState} from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { IconButton, MenuList } from '@mui/material';
import { MoreVertOutlined } from '@mui/icons-material';
import styled from '@emotion/styled';
import { DataContext } from '../context/Dataprovider';


const MenuCus = styled(Menu)`
    box-shadow:0 0 5px;
`;

export default function FadeMenu({ menulist,note,hideCard }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const {notes, setNotes,updateNotes } = useContext(DataContext);


    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        // setHovered(false);
        setAnchorEl(null);
    };
    
    
    const handleDeletePermanently=()=> {
        for (let i = 0; i < notes.length; i++) {
            if (notes[i].id === note.id) {
                notes.splice(i, 1);
                hideCard.current.style.display='none';  
                setNotes(notes);
                break;
            }
        }
        // setHovered(false);
        setAnchorEl(null);
        updateNotes();
    }
    
    return (
        <div>
            <IconButton
                size='normal'
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MoreVertOutlined fontSize='normal' />
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
                <MenuList dense disablePadding={true} >
                    <MenuItem onClick={handleDeletePermanently} sx={{ fontFamily: 'Inter' }}>Delete Permanently</MenuItem>
                    <MenuItem onClick={handleClose} sx={{ fontFamily: 'Inter' }}>Share</MenuItem>
                </MenuList>
            </MenuCus>
        </div>
    );
}