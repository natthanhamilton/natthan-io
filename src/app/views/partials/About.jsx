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
        <Typography variant="title"><AccountCircle className={c.iconLarge} />
          &nbsp;{t('about.aboutTitle')}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">{t('about.aboutContent')}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="title"><Phone className={c.iconLarge} />
          &nbsp;{t('contact.contactTitle')}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1"><LocationOn className={c.iconSmall} />
          &nbsp;{t('contact.contactLocation')}
        </Typography>
        <Typography variant="body1"><Email className={c.iconSmall} />
          &nbsp;{t('contact.contactEmail')}
        </Typography>
      </Grid>
    </Grid> );
}

About.propTypes = {
  c: PropTypes.object,
  t: PropTypes.object
}
About.defaultProps = {
  c: {},
  t: {}
};

export default translate( 'translations' )( About );