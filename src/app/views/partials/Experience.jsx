import React from 'react';
import PropTypes from 'prop-types';

import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

import LocationOn from 'material-ui-icons/LocationOn';
import DateRange from 'material-ui-icons/DateRange';
import Work from 'material-ui-icons/Work';

import locale from '../../../assets/locale/en_us';

const Experience = ( props ) => {
  const c = props.c;

  const res = locale.work.map( ( d, i ) => {
    const description = d.activity.map( ( content, ii ) => ( <li key={ii}>
      <Typography className={c.padding} variant="body1">{content}</Typography>
    </li> ) );

    return (
      <div key={i}>
        <Grid container spacing={0}>
          {i > 0 && (
          <Grid item xs={12}>
            <Divider className={c.divider} />
          </Grid>
        )}
          <Grid item xs={12} className={c.section}>
            <Typography variant="title">{d.title}</Typography>
            <Typography className={c.padding} variant="body2"><LocationOn className={c.iconSmall} /> {d.location}
          &nbsp;&nbsp;
              <DateRange className={c.iconSmall} /> {d.started}&nbsp;-&nbsp;{d.ended}
            </Typography>
            <Typography className={c.padding} variant="body2"><strong>SITUATION</strong></Typography>
            <Typography className={c.padding} variant="body1">{d.situation}</Typography>
            <Typography className={c.padding} variant="body2"><strong>TASK</strong></Typography>
            <Typography className={c.padding} variant="body1">{d.task}</Typography>
            <Typography className={c.padding} variant="body2"><strong>ACTIVITY</strong></Typography>
            <ul className={c.ul}>{description}</ul>
            <Typography className={c.padding} variant="body2"><strong>RESULT</strong></Typography>
            <Typography className={c.padding} variant="body1">{d.result}</Typography>
          </Grid>
        </Grid>
      </div> );
  } );

  return (
    <Grid container className={c.container} spacing={0}>
      <Grid item xs={12}>
        <Typography variant="title"><span><Work className={c.iconLarge} /></span>
                      &nbsp;Work Experience
        </Typography>
      </Grid>
      <Grid item xs={12}>{res}</Grid>
    </Grid> );
}

Experience.propTypes = {
  c: PropTypes.object
}
Experience.defaultProps = {
  c: {}
};
export default Experience;