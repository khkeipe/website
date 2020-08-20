import React from 'react';
import sunset from '../images/sunset.jpg';
import { subTheme } from '../theme-creator';
import { Typography, ThemeProvider, Container } from '@material-ui/core';


const LandingComponent = () => {

	return (
		<>
			<div className="App" style={{backgroundImage: `url(${sunset})`, margin: 0, height:'100vh' }}>
			<Container>
				<Typography varient="h1" color="primary"> Dream Catcher LLC</Typography>
				
				<ThemeProvider theme={subTheme}>
					<Typography > Solutions </Typography>
				</ThemeProvider>
			</Container>
			
			</div>
		</>
	)
}

export default LandingComponent;