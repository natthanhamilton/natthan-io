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
import {Helmet} from "react-helmet";

import configureStore from './store';

import * as components from './components';
import { AppLoading } from './views';
import '../assets/css/minimal.scss';
import locale from '../assets/locale/en_us'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_USER,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const {
  persistor,
  store,
} = configureStore();
const theme = createMuiTheme();

const App = () => {
    return (<MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={<AppLoading />} persistor={persistor}>
          <Helmet>
            <title>{locale.site.title}</title>
            <meta name="description" content={locale.skillsFull.join(",")} />
            <meta name="author" content={locale.site.author} />

            <meta property="og:title" content={locale.seo.og.title} />
            <meta property="og:description" content={locale.seo.og.description} />
            <meta property="og:url" content={locale.seo.og.url} />
            <meta property="og:image" content={locale.seo.og.image} />

            <meta name="twitter:card" content={locale.seo.twitter.card} />
            <meta name="twitter:site" content={locale.seo.twitter.site} />
            <meta name="twitter:creator" content={locale.seo.twitter.creator} />
            <meta name="twitter:title" content={locale.seo.twitter.title} />
            <meta name="twitter:description" content={locale.seo.twitter.description} />
            <meta name="twitter:image" content={locale.seo.twitter.image} />
          </Helmet>
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
