import React from 'react'
import { Box, Typography } from '@mui/material'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// Components
import SwipeDrawer from './SwipeDrawer';
import Notes from './notes/Notes';
import Archives from './notes/Archives';
import Form from './notes/Form';
import Trash from './notes/Trash';




function Home() {
  return (
    <div>
      <Router>
        <Box sx={{ display: 'flex' }}>
          <SwipeDrawer />
          <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 6 }}>
            <Form />
            <Routes>
              <Route path="/" element={<Notes />}></Route>
              <Route path="/archives" element={<Archives />}></Route>
              <Route path="/trash" element={<Trash />}></Route>
            </Routes>
          </Box>
        </Box>
      </Router>
    </div>
  )
}

export default Home