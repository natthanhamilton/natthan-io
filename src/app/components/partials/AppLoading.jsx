import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

const AppLoading = props => {
  const { classes } = props;

  return (
    <Grid container alignItems="center" justify="center" className={classes.root}>
      <Grid item xs={12}>
        <CircularProgress size={50} />
      </Grid>
    </Grid>
  );
};

AppLoading.propTypes = {
  classes: PropTypes.object
};
AppLoading.defaultProps = {
  classes: {}
};

// Theme
const styles = () => ({
  root: {
    flexGrow: 1,
    height: '100%'
  }
});

export default withStyles(styles)(AppLoading);
