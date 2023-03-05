import { React, useState, useRef, useContext } from 'react'
import { Box, TextField, ClickAwayListener } from '@mui/material'
import styled from '@emotion/styled';
import { DataContext } from '../context/Dataprovider';
import { v4 as uuid } from 'uuid'
import './Form.css'



const Container = styled(Box)`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
    // background-color:grey;
  margin-top:1rem;
  min-height:2rem; 
  `;


const note = {
    id: '',
    title: '',
    description: '',
    background: '',
    status: 'active',
}


function Form() {
    const [showTextField, setShowTextField] = useState(false);
    const [addNote, setAddNote] = useState({ ...note, id: uuid() })

    const { setNotes,updateNotes } = useContext(DataContext);
    
    const FormRef = useRef()

    const handleTextFieldClick = () => {
        setShowTextField(true);
        FormRef.current.style.minHeight = '4.5rem';
    }

    const handleClickAway = () => {
        setShowTextField(false)
        FormRef.current.style.minHeight = '2rem';

        setAddNote({ ...note, id: uuid() })
        if (addNote.title || addNote.description) {
            setNotes(x => [...x, addNote]);
        }
    }

    const handleTextChange = (e) => {
        let newNote = { ...addNote, [e.target.name]: e.target.value }
        setAddNote(newNote)
    }

    return (
        <Container>
            <ClickAwayListener onClickAway={handleClickAway}>
                <div ref={FormRef} className="form_div" style={{ display: 'flex', flexDirection: 'column', padding: '.3rem 1rem', margin: '1rem 0rem', borderRadius: '.5rem', boxShadow: '0 2px 2px 0 rgb(60 64 67/ 20%), 0px 0px 10px rgb(40 40 45/ 8%)' }}>
                    {showTextField &&
                        <TextField
                            variant="standard"
                            placeholder='Title'
                            InputProps={{ disableUnderline: true }}
                            style={{ marginBottom: '.2rem' }}
                            name="title"
                            onChange={handleTextChange}
                            value={addNote.title}
                            sx={{
                                input: {
                                  border: "none",
                                  fontSize:"1rem",
                                  fontFamily:'inter',
                                  
                                }
                              }}
                            />    
                        }
                        <TextField
                            onClick={handleTextFieldClick}
                            InputProps={{ disableUnderline: true }}
                            variant="standard"
                            placeholder='Take a note...'
                            multiline
                            name="description"
                            onChange={handleTextChange}
                            value={addNote.description}
                            sx={{
                                textarea: {
                                  border: "none",
                                  fontSize:".9rem",
                                  fontFamily:'inter'
                                  
                                }
                              }}
                                />
                </div>
            </ClickAwayListener>
            {/* </Box>  */}
        </Container>
    )
}

export default Form