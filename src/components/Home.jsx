import React from 'react'
import { Box, Typography } from '@mui/material'


// Components
import SwipeDrawer from './SwipeDrawer';
import Notes from './notes/Notes';
import Form from './notes/Form';




function Home() {
  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <SwipeDrawer />
        <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 6 }}>
            <Form />
          {/* <Notes /> */}
        </Box>
      </Box>
    </div>
  )
}

export default Home