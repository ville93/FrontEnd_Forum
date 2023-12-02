import React from 'react';
import Home from './components/Home';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

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
      <Home />
    </ThemeProvider>
  );
}
