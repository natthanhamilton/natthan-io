import React from 'react';
import PropTypes from 'prop-types';

import Grid from 'material-ui/Grid';
import {CircularProgress} from 'material-ui/Progress';

const AppLoading = (props) => {
  return (<Grid
    container
    alignItems='center'
    direction='row'
    justify='center'
    style={props.overlay
      ? {
        height: '100%',
        position: 'absolute',
        top: 0,
        background: 'rgba(0,0,0,0.4)'
      }
      : {
        height: '100%'
      }}
  >
    <Grid item="item">
      <CircularProgress size={50} />
    </Grid>
  </Grid>);
}

AppLoading.propTypes = {
  overlay: PropTypes.bool
}
AppLoading.defaultProps = {
  overlay: false
};
export default AppLoading;
