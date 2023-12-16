import React from 'react';
import Home from './components/Home';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewDiscussion from './components/NewDiscussion';
import ChannelPage from './components/ChannelPage';
import DiscussionsBySearch from './components/DiscussionsBySearch';

const customTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#4CAF50',
    },
    background: {
      default: '#000000',
    },
    text: {
      primary: '#FFFFFF',
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-discussion" element={<NewDiscussion />} />
          <Route path="/channel/:channelId" element={<ChannelPage/>} />
          <Route path="/search-results/:searchTerm" element={<DiscussionsBySearch/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
