import { React, useState,useRef,useContext } from 'react'
import { Box, TextField, Paper, ClickAwayListener } from '@mui/material'
import styled from '@emotion/styled';
import { borderRadius } from '@mui/system';
import { DataContext } from '../context/Dataprovider';


const Container = styled(Box)`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
    // background-color:grey;
  margin-top:1rem;
  min-height:2rem; 
  `;



//   boxShadow:'0 1px 2px 0 rgb(60 64 67/ 30%), 0 2px 6px 2px rgb(60 64 70 15%)' 
function Form() {
    const [showTextField, setShowTextField] = useState(false);

    const {notes,SetNotes} = useContext(DataContext);

    const FormRef = useRef()

    const handleTextFieldClick = () => {
        setShowTextField(true);
        FormRef.current.style.minHeight='4.5rem';
        // console.log(FormRef.current)
    }
    
    const handleClickAway = () => {
        setShowTextField(false)
        FormRef.current.style.minHeight='2rem';
    }

    return (
        <Container>
            {/* <Box sx={{display:'flex', flexDirection:'column', minWidth:'25rem', boxShadow:'0 1px 2px 0 rgb(60 64 67/ 30%)', borderRadius:'.5rem', padding :'1rem 2rem' }}>  */}
            <ClickAwayListener onClickAway={handleClickAway}>
                <div ref = {FormRef} style={{ display: 'flex', flexDirection: 'column', minWidth: '28rem', padding: '.3rem 1rem', borderRadius:'.5rem',boxShadow:'0 1px 2px 0 rgb(60 64 67/ 30%)' }}>
                    {showTextField &&
                        <TextField
                            variant="standard"
                            placeholder='Title'
                            InputProps={{ disableUnderline: true }}
                            style={{ marginBottom: '.2rem' }}
                        />
                    }

                    <TextField
                        onClick={handleTextFieldClick}
                        variant="standard"
                        placeholder='Take a note...'
                        InputProps={{ disableUnderline: true}}
                        multiline
                    />
                </div>
            </ClickAwayListener>
            {/* </Box>  */}
        </Container>
    )
}

export default Form