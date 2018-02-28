import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import {
  MuiThemeProvider,
  createMuiTheme,
} from 'material-ui/styles';
import cloudinary from 'cloudinary'

import {store, persister} from './store';

import * as components from './components';
import { AppLoading } from './views';
import '../assets/css/minimal.scss';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_USER,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const theme = createMuiTheme();

console.log('--persister')
console.log(persister)

const App = () => {
    return (<MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={<AppLoading />} persistor={persister.persist}>
          <Router basename="/">
            <Switch>
              <Route path="/" exact component={components.Home} />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    </MuiThemeProvider>);
  }

ReactDOM.render(<App />, document.getElementById('app'));
