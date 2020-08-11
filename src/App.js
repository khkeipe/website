import React from 'react';
import { Typography } from '@material-ui/core';
import sunset from './images/sunset.jpg';
import './App.css';

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${sunset})` }}>
        <Typography variant="h1" color="white"> Korey Keipe</Typography>
    </div>
  );
}

export default App;
