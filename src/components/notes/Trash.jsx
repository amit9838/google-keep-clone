import NoteItem from './NoteItem';
import { Grid } from '@mui/material';
import React, { useContext } from 'react'
import { DataContext } from '../context/Dataprovider';


function Trash() {
  const { notes } = useContext(DataContext);
  return (
    <>
      <Grid container>
        {notes.map(note => (
          <Grid item key={note.id}>
            {(note.status === 'trash') &&<NoteItem  note={note}/>}
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Trash