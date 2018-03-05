import React from 'react'
import PropTypes from 'prop-types';

import {
  withStyles
} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import {
  Helmet
} from "react-helmet";
import locale from '../../../assets/locale/en_us'

const styles = theme => ( {
  root: {
    position: 'relative',
    zIndex: 1111111,
    flexGrow: 1,
    padding: theme.spacing.unit * 5,
  },
  loadingBar: {
    backgroundColor: '#039be5',
    zIndex: '999999'
  },
  toolBar: {
    width: '100%',
    zIndex: 0,
    height: 100
  }
} );

const Layout = ( props ) => {
  const c = props.classes

  return ( <div>
    <Helmet>
      <title>{locale.site.title}</title>
      <meta name="description" content={locale.skillsExperienced.join(",")+locale.skillsFamiliar.join(",")+locale.skillsLearning.join(",")} />
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
    {/*}<LoadingBar className={c.loadingBar} showFastActions="showFastActions" updateTime={200} maxProgress={90} />*/}
    <AppBar position="fixed">
      <Toolbar className={c.toolBar} />
    </AppBar>
    <Grid container className={c.root} spacing={0} alignItems="flex-start" direction="row" justify="center">
      <Grid item xs={12} sm={10} md={8}>
        {props.children}
      </Grid>
    </Grid>
  </div> )
}

Layout.propTypes = {
  classes: PropTypes.object
}
Layout.defaultProps = {
  classes: {}
};

export default withStyles( styles )( Layout )