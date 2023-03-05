import NoteItem from './NoteItem';
import { Grid } from '@mui/material';
import React, { useContext } from 'react'
import { DataContext } from '../context/Dataprovider';


function Notes() {
  const { notes,setNotes } = useContext(DataContext);
  
  return (
    <>    
      <Grid container>
        {notes.map(note => (
          <Grid item key={note.id}>
            {(note.status === 'active') &&<NoteItem  note={note}/>}
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Notes