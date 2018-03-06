import React from 'react';
import PropTypes from 'prop-types';
import {
  translate
} from 'react-i18next';

import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

import Phone from 'material-ui-icons/Phone';
import AccountCircle from 'material-ui-icons/AccountCircle';
import LocationOn from 'material-ui-icons/LocationOn';
import Email from 'material-ui-icons/Email';

const About = ( props ) => {
  const {
    c,
    t
  } = props;

  return (
    <Grid container className={c.container} spacing={24}>
      <Grid item xs={12}>
        <Typography className={c.sectionTitle} variant="title"><span><AccountCircle className={c.iconLarge} /></span>
          &nbsp;{t('about.aboutTitle')}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">{t('about.aboutContent')}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className={c.sectionTitle} variant="title"><span><Phone className={c.iconLarge} /></span>
          &nbsp;{t('about.contactTitle')}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1"><LocationOn className={c.iconSmall} />
          &nbsp;{t('about.contactLocation')}
        </Typography>
        <Typography variant="body1"><Email className={c.iconSmall} />
          &nbsp;{t('about.contactEmail')}
        </Typography>
      </Grid>
    </Grid> );
}

About.propTypes = {
  c: PropTypes.object,
  t: PropTypes.func.isRequired
}
About.defaultProps = {
  c: {}
};

export default translate( 'translations' )( About );