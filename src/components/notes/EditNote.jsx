import React, { useState, useContext } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton } from '@mui/material';
import { Edit } from '@mui/icons-material';
import { DataContext } from '../context/Dataprovider';



export default function EditNote({ note,setTitle,setDescription }) {
    const {notes, setNotes, updateNotes } = useContext(DataContext);
    const [open, setOpen] = useState(false);
    const [enote, setEnote] = useState(note)


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    const handleSave = () => {
        for (let i = 0; i < notes.length; i++) {
            if (notes[i].id === note.id) {
                notes[i].title = enote.title;
                notes[i].description = enote.description;
                setNotes(notes);
                setTitle(enote.title);
                setDescription(enote.description);
                updateNotes();
                console.log("saved")
                break;
            }
        }
        setOpen(false);
    }

    const handleTextChange = (e) => {
        let newNote = { ...enote, [e.target.name]: e.target.value }
        setEnote(newNote)
    }

    return (
        <div>
            <IconButton size='normal' onClick={handleClickOpen} ><Edit fontSize='' /> </IconButton>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit Note</DialogTitle>
                <DialogContent>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Title"
                        type="text"
                        fullWidth
                        value={enote.title}
                        name='title'
                        variant="standard"
                        onChange={handleTextChange}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Task"
                        type="text"
                        fullWidth
                        value={enote.description}
                        name='description'
                        onChange={handleTextChange}
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSave}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}