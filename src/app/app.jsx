import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import {
  Provider
} from 'react-redux';
import {
  PersistGate
} from 'redux-persist/es/integration/react';
import {
  MuiThemeProvider,
  createMuiTheme,
} from 'material-ui/styles';
import cloudinary from 'cloudinary'
import {
  I18nextProvider
} from 'react-i18next';

import {
  persistor,
  store
} from './store';
import i18n from './i18n';

import * as components from './components';
import {
  AppLoading
} from './views';

if ( 'serviceWorker' in navigator ) {
  window.addEventListener( 'load', () => {
    navigator.serviceWorker.register( '/sw.js' ).then( registration => {
      registration.pushManager.subscribe( {
        userVisibleOnly: true
      } );
      //console.log( 'SW registered: ', registration );
    } ).catch( registrationError => {
      //console.log( 'SW registration failed: ', registrationError );
    } );
  } );
}

cloudinary.config( {
  cloud_name: process.env.CLOUDINARY_USER,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
} );

const theme = createMuiTheme();

const App = () => {
  return ( <MuiThemeProvider theme={theme}>
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <PersistGate loading={<AppLoading />} persistor={persistor}>
          <Router basename="/">
            <Switch>
              <Route path="/" exact component={components.Home} />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    </I18nextProvider>
  </MuiThemeProvider> );
}

ReactDOM.render( <App />, document.getElementById( 'app' ) );