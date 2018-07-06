import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Helmet } from 'react-helmet';

import locale from '../../../assets/locales/en-US/translations';

const Layout = props => {
  const { children, classes, t } = props;

  const skillsExperienced = locale.skillsExperienced.map((d, i) => t(`skillsExperienced.${i}`));
  const skillsFamiliar = locale.skillsFamiliar.map((d, i) => t(`skillsExperienced.${i}`));
  const skillsLearning = locale.skillsLearning.map((d, i) => t(`skillsExperienced.${i}`));

  return (
    <Grid container className={classes.root} alignItems="flex-start" justify="center">
      <Grid item xs={12} sm={10} md={8}>
        {children}
      </Grid>

      <Helmet>
        <title>
          {t('site.title')}
        </title>
        <meta name="description" content={skillsExperienced + skillsFamiliar + skillsLearning} />
        <meta name="author" content={t('site.author')} />

        <meta property="og:title" content={t('seo.og.title')} />
        <meta property="og:description" content={t('seo.og.description')} />
        <meta property="og:url" content={t('seo.og.url')} />
        <meta property="og:image" content={t('seo.og.image')} />

        <meta name="twitter:card" content={t('seo.twitter.card')} />
        <meta name="twitter:site" content={t('seo.twitter.site')} />
        <meta name="twitter:creator" content={t('seo.twitter.creator')} />
        <meta name="twitter:title" content={t('seo.twitter.title')} />
        <meta name="twitter:description" content={t('seo.twitter.description')} />
        <meta name="twitter:image" content={t('seo.twitter.image')} />
      </Helmet>
    </Grid>
  );
};

Layout.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.array,
  t: PropTypes.func.isRequired
};
Layout.defaultProps = {
  classes: {},
  children: []
};

//Theme
const styles = theme => ({
  root: {
    position: 'relative',
    zIndex: 1111111,
    flexGrow: 1,
    padding: theme.spacing.unit * 5
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
});

export default withStyles(styles)(translate()(Layout));
