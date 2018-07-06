import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import LocationOn from '@material-ui/icons/LocationOn';
import DateRange from '@material-ui/icons/DateRange';
import School from '@material-ui/icons/School';

const Education = props => {
  const { classes, t } = props;

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12}>
        <Typography className={classes.sectionTitle} variant="headline">
          <span>
            <School className={classes.iconLarge} />
          </span>
          {t('education.title')}
        </Typography>
      </Grid>

      <Grid item xs={12} className={classes.section}>
        <Typography variant="title">
          {t('education.uName')}
        </Typography>
        <Typography variant="body2">
          <LocationOn className={classes.iconSmall} />
          {t('education.uLocation')} 
          {' '}
          <DateRange className={classes.iconSmall} />
          {t('education.uStart')}
          {' '}
-
          {t('education.uEnd')}
        </Typography>
        <Typography variant="body1">
          {t('education.uDegree')}
        </Typography>
      </Grid>
    </Grid>
  );
};

Education.propTypes = {
  classes: PropTypes.object,
  t: PropTypes.func.isRequired
};
Education.defaultProps = {
  classes: {}
};

// Theme
const styles = () => ({
  root: {
    flexGrow: 1,
    margin: 0,
    padding: 0
  },
  container: {
    margin: 0,
    padding: 12,
    width: '100% !important'
  },
  iconLarge: {
    width: 25,
    height: 25
  },
  iconSmall: {
    width: 10,
    height: 10
  },
  section: {
    padding: '10px 0 10px 0',
    '@media (min-width: 960px)': {
      paddingLeft: '40px'
    }
  }
});

export default withStyles(styles)(translate()(Education));
