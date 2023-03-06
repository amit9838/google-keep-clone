import React from 'react'
import { Box } from '@mui/material'
import {
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
            <Route path="/" element={(
              <div>
                <Notes />
              </div>)
            }></Route>

            <Route path="/archives" element={(
              <div>
                <div style={{margin:'.2rem 0rem', color:'grey'}}>
                  <h3>Archive Notes</h3>
                  <hr style={{color:'lightgrey'}}/>
                </div>
                <Archives />
              </div>)
            }></Route>

            <Route path="/trash" element={(
              <div>
                <div style={{margin:'.2rem 0rem', color:'grey'}}>
                  <h3>Trash Notes</h3>
                  <hr style={{color:'lightgrey'}}/>
                </div>
                <Trash />
              </div>)
            }></Route>
          </Routes>
        </Box>
      </Box>

    </div>
  )
}

export default Home