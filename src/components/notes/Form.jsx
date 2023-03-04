import { React, useState,useRef,useContext } from 'react'
import { Box, TextField, ClickAwayListener } from '@mui/material'
import styled from '@emotion/styled';
import { DataContext } from '../context/Dataprovider';
import {v4 as uuid} from 'uuid'


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
    id : '',
    title : '',
    description : '',
    background : '',
    status : 'active',
}


//   boxShadow:'0 1px 2px 0 rgb(60 64 67/ 30%), 0 2px 6px 2px rgb(60 64 70 15%)' 
function Form() {
    const [showTextField, setShowTextField] = useState(false);
    const [addNote, setAddNote] = useState({...note, id:uuid()})

    const {setNotes} = useContext(DataContext);

    const FormRef = useRef()

    const handleTextFieldClick = () => {
        setShowTextField(true);
        FormRef.current.style.minHeight='4.5rem';
        // console.log(FormRef.current)
    }
    
    const handleClickAway = () => {
        setShowTextField(false)
        FormRef.current.style.minHeight='2rem';

        setAddNote({...note,id:uuid()})
        if(addNote.title || addNote.description) {
            setNotes(x=> [...x,addNote])
        } 
    }

    const handleTextChange= (e) =>{
        let newNote = { ...addNote, [e.target.name]: e.target.value}
        setAddNote(newNote)
    }

    return (
        <Container>
            {/* <Box sx={{display:'flex', flexDirection:'column', minWidth:'25rem', boxShadow:'0 1px 2px 0 rgb(60 64 67/ 30%)', borderRadius:'.5rem', padding :'1rem 2rem' }}>  */}
            <ClickAwayListener onClickAway={handleClickAway}>
                <div ref = {FormRef} style={{ display: 'flex', flexDirection: 'column', minWidth: '30rem', padding: '.3rem 1rem',margin:'1rem 0rem' , borderRadius:'.5rem',boxShadow:'0 2px 2px 0 rgb(60 64 67/ 20%), 0px 0px 6px rgb(40 40 45/ 15%)' }}>
                    {showTextField &&
                        <TextField
                            variant="standard"
                            placeholder='Title'
                            InputProps={{ disableUnderline: true }}
                            style={{ marginBottom: '.2rem' }}
                            name = "title"
                            onChange = {handleTextChange}
                            value = {addNote.title}
                            sx={[{fontFamily:'Inter'},()=>({'&::placeholder':{color:'red'}})]}

                            />
                        }

                    <TextField
                        onClick={handleTextFieldClick}
                        variant="standard"
                        placeholder='Take a note...'
                        InputProps={{ disableUnderline: true}}
                        multiline
                        name = "description"
                        onChange = {handleTextChange}
                        value = {addNote.description}
                        sx={[{fontFamily:'Inter'},()=>({'&::placeholder':{color:'red'}}),()=>({'&::-webkit-input-placeholder ':{color:'red'}}) ]}
                        />
                </div>
            </ClickAwayListener>
            {/* </Box>  */}
        </Container>
    )
}

export default Form