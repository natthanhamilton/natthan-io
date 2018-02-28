import React from 'react';
import PropTypes from 'prop-types';

import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

import LocationOn from 'material-ui-icons/LocationOn';
import DateRange from 'material-ui-icons/DateRange';
import Work from 'material-ui-icons/Work';

import locale from '../../../assets/locale/en_us';

const Experience = (props) => {
  const c = props.c;

    const res = locale.work.map((d, i) => {
      const description = d.description.map((content, ii) => (<li key={ii}>
        <Typography className={c.padding} variant="body1">{content}</Typography>
      </li>));

      return (<Grid key={i} item xs={12} className={c.section}>
        {i > 0 && (<Divider className={c.divider} />)}
        <Typography variant="title">{d.title}</Typography>
        <Typography className={c.padding} variant="body2"><LocationOn className={c.iconSmall} /> {d.location}
          &nbsp;&nbsp;
          <DateRange className={c.iconSmall} /> {d.started}&nbsp;-&nbsp;{d.ended}
        </Typography>
        <Typography className={c.padding} variant="body2">
          <i>{d.summary}</i>
        </Typography>
        <ul className={c.ul}>{description}</ul>
      </Grid>);
    });
    
    return (
      <Grid container className={c.container} spacing={0} alignItems="flex-start" direction="row" justify="flex-start">
        <Grid item xs={12}>
          <Typography variant="title"><Work className={c.iconLarge} />
                      &nbsp;Work Experience
          </Typography>
        </Grid>
        {res}
      </Grid>);
  }

  Experience.propTypes = {
    c: PropTypes.object
  }
  Experience.defaultProps = {
    c: {}
  };
export default Experience;
