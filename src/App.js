import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider} from '@material-ui/core';
import { mainTheme } from './theme-creator';
import './App.css';
import LandingComponent from './Components/LandingComponent';


function App() {
  return (
	<>
	<ThemeProvider theme={mainTheme}>
		<Router>
			<Redirect to="/home"/>

			<Switch>		

				<Route path="/home" render={() => <LandingComponent/> } />
			</Switch>
		</Router>
    
	</ThemeProvider>
    </>
  );
}

export default App;
