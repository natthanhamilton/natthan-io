import React from 'react';
import PropTypes from 'prop-types';

import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

import LocationOn from 'material-ui-icons/LocationOn';
import DateRange from 'material-ui-icons/DateRange';
import School from 'material-ui-icons/School';

import locale from '../../../assets/locale/en_us';

const Education = ( props ) => {
  const c = props.c;

  return (
    <Grid container className={c.container} spacing={0}>

        <Grid item xs={12}>
          <Typography variant="title"><School className={c.iconLarge} />
                      &nbsp;Education
          </Typography>
        </Grid>

        <Grid item xs={12} className={c.section}>
          <Typography variant="title">San Diego State University</Typography>
          <Typography variant="body2"><LocationOn className={c.iconSmall} />
                      &nbsp;San Diego, CA &nbsp;&nbsp;<DateRange className={c.iconSmall} />
                      &nbsp;2009&nbsp;-&nbsp;2011
          </Typography>
          <Typography variant="body1">Bachelor's of Science, Business Administration</Typography>
        </Grid>
      </Grid> );
}

Education.propTypes = {
  c: PropTypes.object
}
Education.defaultProps = {
  c: {}
};
export default Education;