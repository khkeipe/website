import { createMuiTheme } from '@material-ui/core';

export const mainTheme = createMuiTheme({
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

  
export const subTheme = createMuiTheme({
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
		'fairway',
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
	  fontSize: 24,
	},
  });