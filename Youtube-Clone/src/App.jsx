import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import { Navbar,Feed,VideoDetails,SearchFeed,ChannelDetails } from './components'
import './App.css'

function App() {
  return (
   <BrowserRouter>
   <Box sx={{backgroundColor:"#000"}} >
    <Navbar />
    <Routes>
      <Route path='/' exact element={<Feed />} />
      <Route path='/video/:id' element={<VideoDetails />} />
      <Route path='/channel/:id' element={<ChannelDetails />} />
      <Route path='/search/:searchTerm' element={<SearchFeed />} />
    </Routes>
    </Box>
   </BrowserRouter>
  )
}

export default App
