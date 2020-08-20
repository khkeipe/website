import React from 'react';
import { Typography, createMuiTheme, ThemeProvider } from '@material-ui/core';
import sunset from './images/sunset.jpg';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#7f848c',
      main: '#5f6670',
      dark: '#42474e',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily: [
      'brushland',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontSize: 36,
  },
});
function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${sunset})` }}>
      <ThemeProvider theme={theme}>
        <Typography varient="h1" color="primary"> Korey Keipe</Typography>
      </ThemeProvider>
    </div>
  );
}

export default App;
