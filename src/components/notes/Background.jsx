import  {useContext,useEffect,useState} from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Card, CardContent, IconButton } from '@mui/material';
import { ColorLensOutlined, Circle,CheckCircle,CircleOutlined,CheckCircleOutlineOutlined } from '@mui/icons-material'
import { DataContext } from '../context/Dataprovider';


const colors = ['#E96479', '#ECF2FF', '#EDF1D6', '#7DB9B6', '#FFEBB7', '#D8D9CF', '#B97A95'];
// const colors = [{ id: 1, color: '#E96479' }, { id: 2, color: '#ECF2FF' }, { id: 2, color: '#EDF1D6' }];

export default function Background({note,setCol,setHovered}) {
  const {notes, setNotes } = useContext(DataContext);

  const [anchorEl, setAnchorEl] = useState(null);


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
    setHovered(false);
  };
  


  const handleColor = (color) => {
    for(let i =0;i<notes.length;i++) {
      if(notes[i].id===note.id){
        notes[i].background = color;
        console.log(color);
        note.background= color;
        setCol(color);
        setNotes(notes)
        setAnchorEl(null);
        setHovered(false);
        break;
      }
    }
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  return (
    <>
      <IconButton disableRipple size='small' aria-describedby={id} variant="text" onClick={handleClick} ><ColorLensOutlined fontSize='small' /> </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 4,
        }}
      >
        <Card sx={{ padding: '.2rem .5rem' , maxWidth:'13rem'}}>
          {colors.map((item, index) => (
            <IconButton key={index} onClick={()=>handleColor(item)}>
              {note.background===item? 
              <CheckCircle fontSize='large' sx={{ color: item }}/>
             :<Circle  fontSize='large' sx={{ color: item }} />
            }
              </IconButton>
          ))}
            <IconButton onClick={()=>handleColor("")}>
              {note.background===""? 
              <CheckCircleOutlineOutlined fontSize='large' />
             :<CircleOutlined  fontSize='large' />
            }
              </IconButton>

        </Card>
      </Popover>
    </>
  );
}