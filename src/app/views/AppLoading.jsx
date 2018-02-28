import React from 'react';

import Grid from 'material-ui/Grid';
import {CircularProgress} from 'material-ui/Progress';

const AppLoading = (
  <Grid
    container
    alignItems='center'
    direction='row'
    justify='center'
    style={{
          height: '100%'
        }}
  >
    <Grid item>
      <CircularProgress size={50} />
    </Grid>
  </Grid>
)

export default AppLoading;
