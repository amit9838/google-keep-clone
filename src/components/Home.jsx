import React from 'react'
import { Box } from '@mui/material'
import {
  BrowserRouter as 
  Routes,
  Route
} from "react-router-dom";
import { useLocation } from "react-router-dom";

// Components
import SwipeDrawer from './SwipeDrawer';
import Notes from './notes/Notes';
import Archives from './notes/Archives';
import Form from './notes/Form';
import Trash from './notes/Trash';




function Home() {
  const location = useLocation()

  return (
    <div>

      <Box sx={{ display: 'flex' }}>
        <SwipeDrawer />
        <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 6 }}>
          {location.pathname === '/' && <Form />}
          <Routes>
            <Route path="/" element={<Notes />}></Route>
            <Route path="/archives" element={<Archives />}></Route>
            <Route path="/trash" element={<Trash />}></Route>
          </Routes>
        </Box>
      </Box>

    </div>
  )
}

export default Home