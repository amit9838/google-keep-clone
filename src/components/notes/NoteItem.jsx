import styled from '@emotion/styled'
import { Card, CardContent, CardActions, IconButton, Paper, Typography } from '@mui/material'
import { useState } from 'react'
import { grey,red } from '@mui/material/colors';
import { DeleteOutlined, ArchiveOutlined, MoreVertOutlined,ColorLensOutlined } from '@mui/icons-material';
import { minHeight } from '@mui/system';
import FadeMenu from './FadeMenu';
import Background from './Background';

const NoteCard = styled(Card)`
    
    min-width:15rem;
    max-width:20rem;
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
    const [hovered, setHovered] = useState(false);
    const [col, setCol] = useState(note.background)


    let menulist = ['Delete Permanently','Share']
    let CardColor = '#e0e0f0'

    // console.log(note)
    return (
        <>
            <NoteCard  className='NoteCard' onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} sx={{backgroundColor:note.background}}>
                <CardContent sx={{padding:'.5rem .8rem'}}>
                    <Typography variant='h6' sx={{fontSize: "1rem", fontFamily: 'Inter', fontWeight: '500', color: grey[900] }}>{note.title}</Typography>
                    <Typography sx={{ fontSize: ".8rem", color: grey[800], fontFamily: 'Inter', fontWeight: '400' }} variant='h6'>{note.description}</Typography>

                </CardContent>
                <CardActions sx={{ minHeight: "2rem" }}>
                    {hovered && <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <div className='left'>
                            <IconButton size='small'><DeleteOutlined fontSize='small' /> </IconButton>
                            <IconButton size='small'><ArchiveOutlined fontSize='small' /> </IconButton>
                            <Background note = {note} setCol={setCol} setHovered={setHovered}/>
                        </div>
                        <div className='right'>
                            <FadeMenu menulist = {menulist} setHovered={setHovered} />
                        </div>
                    </div>}
                </CardActions>
            </NoteCard>

        </>
    )
}

export default NoteItem;