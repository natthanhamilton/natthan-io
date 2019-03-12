import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

import './i18n';
import { Root } from './components';

const App = () => {
	return (
		<Suspense fallback={null}>
			<MuiThemeProvider theme={theme}>
				<Root />
			</MuiThemeProvider>
		</Suspense>
	);
};

//Theme
const theme = createMuiTheme({
	palette: {
		primary: blue,
	},
	typography: {
		headline: {
			color: blue[700],
			borderBottom: '2px solid',
			borderColor: blue[500],
			paddingBottom: '5px',
			'& span': {
				position: 'relative',
				top: '4px',
				paddingRight: '5px',
			},
		},
	},
	MuiDivider: {
		margin: '10 0',
	},
	overrides: {
		MuiExpansionPanelDetails: {
			root: {
				'@media (max-width: 960px)': {
					padding: '8px',
				},
			},
		},
	},
});

ReactDOM.render(<App />, document.getElementById('app'));
