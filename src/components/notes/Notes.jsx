import NoteItem from './NoteItem';
import { Grid } from '@mui/material';
import React, { useContext } from 'react'
import { DataContext } from '../context/Dataprovider';
import { LightbulbOutlined } from '@mui/icons-material';
import { useLocation } from "react-router-dom";



function Notes() {
  const { notes } = useContext(DataContext);
  const location = useLocation()

  return (
    <>
      <Grid container>
        {(notes.length > 0) && notes.map(note => (
          <Grid item key={note.id}>
            {(note.status === 'active') && <NoteItem note={note} />}
          </Grid>
        ))}

        {location.pathname === '/'  && notes.filter(element => { return (element.status === 'active') }).length === 0 ?
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minWidth: '80vw', minHeight: '40vh' }}>
            <LightbulbOutlined style={{ color: 'grey', fontSize: "10rem" }} />
            <h3 style={{ color: 'darkgrey', fontFamily:'inter', fontWeight:'normal' }}>Notes you add will appear here</h3>
          </div>   
          :
          <div></div>
        }
     

      </Grid>
    </>
  )
}

export default Notes