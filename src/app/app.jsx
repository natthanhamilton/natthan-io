import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

import './i18n';
import * as components from './components';
import AppLoading from './components/partials/AppLoading';
console.log(process.env);
const App = () => {
	return (
		<Suspense fallback={null}>
			<MuiThemeProvider theme={theme}>
				<Router basename="/">
					<Switch>
						<Route path="/" exact component={components.Home} />
					</Switch>
				</Router>
			</MuiThemeProvider>
		</Suspense>
	);
};

// Server Worker
// if ('serviceWorker' in navigator) {
// 	window.addEventListener('load', () => {
// 		navigator.serviceWorker
// 			.register('/sw.js')
// 			.then((registration) => {
// 				registration.pushManager.subscribe({
// 					userVisibleOnly: true,
// 				});
// 			})
// 			.catch((registrationError) => {
// 				// console.log('SW registration failed: ', registrationError);
// 			});
// 	});
// }

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
