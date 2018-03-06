import React from 'react';
import PropTypes from 'prop-types';
import {
  translate
} from 'react-i18next';

import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

import LocationOn from 'material-ui-icons/LocationOn';
import DateRange from 'material-ui-icons/DateRange';
import School from 'material-ui-icons/School';

const Education = ( props ) => {
  const {
    c,
    t
  } = props;


  return (
    <Grid container className={c.container} spacing={0}>

      <Grid item xs={12}>
        <Typography className={c.sectionTitle} variant="title"><span><School className={c.iconLarge} /></span>
          {t('education.title')}
        </Typography>
      </Grid>

      <Grid item xs={12} className={c.section}>
        <Typography variant="title">{t('education.uName')}</Typography>
        <Typography variant="body2"><LocationOn className={c.iconSmall} />
          {t('education.uLocation')} &nbsp;&nbsp;<DateRange className={c.iconSmall} />
          {t('education.uStart')}&nbsp;-&nbsp;{t('education.uEnd')}
        </Typography>
        <Typography variant="body1">{t('education.uDegree')}</Typography>
      </Grid>
    </Grid> );
}

Education.propTypes = {
  c: PropTypes.object,
  t: PropTypes.func.isRequired
}
Education.defaultProps = {
  c: {}
};

export default translate()( Education );