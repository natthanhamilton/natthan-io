import React from 'react';
import PropTypes from 'prop-types';

import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

import Phone from 'material-ui-icons/Phone';
import AccountCircle from 'material-ui-icons/AccountCircle';
import LocationOn from 'material-ui-icons/LocationOn';
import Email from 'material-ui-icons/Email';

import locale from '../../../assets/locale/en_us';

const Person = (props) => {
  const c = props.c;
return (
  <Grid container="container" className={c.container} spacing={24}>
    <Grid item="item" xs={12}>
      <Typography variant="title"><AccountCircle className={c.iconLarge} />
          &nbsp;About Me
      </Typography>
    </Grid>
    <Grid item="item" xs={12}>
      <Typography variant="body1">Blending strong business experience with technical talents empowers me to think differently, leading to creative problem solving and aggressively fast learning. With tea direct from the source in China, sleep is optional.</Typography>
    </Grid>
    <Grid item="item" xs={12}>
      <Typography variant="title"><Phone className={c.iconLarge} />
          &nbsp;Contact Me
      </Typography>
    </Grid>
    <Grid item="item" xs={12}>
      <Typography variant="body1"><LocationOn className={c.iconSmall} />
          &nbsp;San Diego, California
      </Typography>
      <Typography variant="body1"><Email className={c.iconSmall} />
          &nbsp;NatthanHamilton@gmail.com
      </Typography>
    </Grid>
  </Grid>);
}


Person.propTypes = {
  c: PropTypes.Object
}
Person.defaultProps = {
  c: {}
};

export default Person;
