import React from 'react';
import PropTypes from 'prop-types';

import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import {LinearProgress} from 'material-ui/Progress';
import Typography from 'material-ui/Typography';
import Star from 'material-ui-icons/Star';

import locale from '../../../assets/locale/en_us';

const styles = theme => ({
  skillExp: {
    float: 'right'
  },
  progressBar: {
    marginBottom: 5
  },
});

const Skills = (props) => {
  const c = {...props.c, ...props.classes};

  const res = locale.skills.map((d, i) => (<div key={i}>
    <Typography variant="body2">{d.name}
      <small className={c.skillExp}>{d.experience}</small>
    </Typography>
    <LinearProgress className={c.progressBar} variant="determinate" value={d.percent} />
  </div>));

  return (
    <Grid container className={c.container} spacing={24} alignItems="flex-start" direction="row" justify="flex-start">

      <Grid item xs={12}>
        <Typography variant="title"><Star className={c.iconLarge} />
                    &nbsp;Skills Overview
        </Typography>
      </Grid>
      <Grid item xs={12}>
        {res}
      </Grid>
    </Grid>);
}

Skills.propTypes = {
  c: PropTypes.object
}
Skills.defaultProps = {
  c: {}
};

export default withStyles(styles)(Skills);
