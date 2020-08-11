import React from 'react';
import { Typography } from '@material-ui/core';
import sunset from './images/sunset.jpg';
import './App.css';

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${sunset})` }}>
        <Typography>Welcome</Typography>
    </div>
  );
}

export default App;
