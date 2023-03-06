import { useContext, useState,useRef,useEffect } from 'react';
import styled from '@emotion/styled'
import { Card, CardContent, CardActions, IconButton, Typography, Tooltip } from '@mui/material'
import { grey } from '@mui/material/colors';
import { DeleteOutlined, ArchiveOutlined, UnarchiveOutlined,RestoreFromTrashOutlined } from '@mui/icons-material';
import FadeMenu from './FadeMenu';
import Background from './Background';
import { DataContext } from '../context/Dataprovider';


const NoteCard = styled(Card)`
    min-width:14rem;
    max-width:18rem;
    margin:.2rem .2rem;
    box-shadow:none;
    border:1px solid #e0e0e0;
    border-radius:.5rem;
    :hover {
        box-shadow:0 0 5px #e0e0e0;
        border:1px solid #a5a5a5;
    }  
`;


function NoteItem({ note }) {
    const [hovered, setHovered] = useState(true);
    const [col, setCol] = useState(note.background)
    const { notes,setNotes,updateNotes } = useContext(DataContext);
    const hideCard = useRef()

    let menulist = ['Delete Permanently', 'Share']

    useEffect(() => {
    updateNotes();
    }, [])
    

    const handleArchiveClick = () => {
        for (let i = 0; i < notes.length; i++) {
            if (notes[i].id === note.id) {
                notes[i].status = 'archive';
                note.status = 'archive';
                setNotes(notes)
                updateNotes();
                hideCard.current.style.display='none';
                break;
            }
        }
    }
    const handleUnarchiveClick = () => {
        for (let i = 0; i < notes.length; i++) {
            if (notes[i].id === note.id) {
                notes[i].status = 'active';
                note.status = 'active';
                setNotes(notes)
                updateNotes();
                hideCard.current.style.display='none';
                break;
            }
        }
    }

    const handleTrashClick = () => {
        for (let i = 0; i < notes.length; i++) {
            if (notes[i].id === note.id) {
                notes[i].status = 'trash';
                note.status = 'trash';
                setNotes(notes)
                updateNotes();
                hideCard.current.style.display='none';  
                break;
            }
        }
    }
    const handleUntrashClick = () => {
        for (let i = 0; i < notes.length; i++) {
            if (notes[i].id === note.id) {
                notes[i].status = 'active';
                note.status = 'active';
                setNotes(notes)
                updateNotes();
                hideCard.current.style.display='none';  
                break;
            }
        }
    }




    // console.log(note)
    return (
        <>
            <NoteCard ref={hideCard} className='NoteCard'  sx={{ backgroundColor: note.background }}>
                <CardContent sx={{ padding: '.5rem .8rem' }}>
                    <Typography variant='h6' sx={{ fontSize: "1rem", fontFamily: 'Inter', fontWeight: '500', color: grey[900] }}>{note.title}</Typography>
                    <Typography sx={{ fontSize: ".8rem", color: grey[800], fontFamily: 'Inter', fontWeight: '400' }} variant='h6'>{note.description}</Typography>

                </CardContent>
                <CardActions sx={{ minHeight: "2rem" , borderTop:'1px solid lightgrey' ,padding:'.1rem .1rem'}} >
                    {hovered && <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <div className='left'>
                           
                            {note.status==='archive'?
                            <Tooltip title="Unarchive">
                                <IconButton size='normal' onClick={handleUnarchiveClick} ><UnarchiveOutlined fontSize='' /> </IconButton>
                            </Tooltip>
                            :
                            <Tooltip title="Archive">
                                <IconButton size='normal' onClick={handleArchiveClick} ><ArchiveOutlined fontSize='' /> </IconButton>
                            </Tooltip>}
                            <Background note={note} setCol={setCol} setHovered={setHovered} />
                            {note.status==='trash'?
                            <Tooltip title="Restore">
                                <IconButton size='normal' onClick={handleUntrashClick} ><RestoreFromTrashOutlined fontSize='normal' /> </IconButton>
                            </Tooltip>
                            :
                            <Tooltip title="Move To Trash">
                                <IconButton size='normal' onClick={handleTrashClick} ><DeleteOutlined fontSize='normal' /> </IconButton>
                            </Tooltip>}

                        </div>
                        <div className='right'>
                            <FadeMenu menulist={menulist}  note={note} hideCard={hideCard} />
                        </div>
                    </div>}
                </CardActions>
            </NoteCard>

        </>
    )
}

export default NoteItem;