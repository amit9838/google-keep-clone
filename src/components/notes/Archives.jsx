import NoteItem from './NoteItem';
import { Grid } from '@mui/material';
import React, { useContext } from 'react'
import { DataContext } from '../context/Dataprovider';


function Archives() {
  const { notes } = useContext(DataContext);
  return (
    <>
      <Grid container>
        {notes.map(note => (
          <Grid item key={note.id}>
            {(note.status === 'archive') &&<NoteItem  note={note}/>}
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Archives