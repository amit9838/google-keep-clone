import styled from '@emotion/styled'
import { Card, CardContent, Paper, Typography } from '@mui/material'
import React  from 'react'

const NoteCard = styled(Card)`
    min-width:18rem;
    margin:.2rem .2rem;
    box-shadow:none;
    border:1px solid #e0e0e0;
`;


function NoteItem({ note }) {

    
    console.log(note)
    return (
        <>
            <NoteCard className='NoteCard'>
                <CardContent>
                    <Typography>{note.title}</Typography>
                    <Typography>{note.description}</Typography>
                </CardContent>
            </NoteCard>

        </>
    )
}

export default NoteItem;