import React from 'react';
import PropTypes from 'prop-types';
import {
  translate
} from 'react-i18next';

import {
  withStyles
} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import {
  LinearProgress
} from 'material-ui/Progress';
import Typography from 'material-ui/Typography';
import Star from 'material-ui-icons/Star';

import locale from '../../../assets/locales/en-US/translations';

const styles = theme => ( {
  skillExp: {
    float: 'right'
  },
  progressBar: {
    marginBottom: 5
  },
} );

const Skills = ( props ) => {
  const c = { ...props.c,
    ...props.classes
  };
  const t = props.t;

  const res = locale.skills.list.map( ( d, i ) => ( <div key={i}>
    <Typography variant="body2">{t( `skills.list.${i}.name` )}
      <small className={c.skillExp}>{t( `skills.list.${i}.experience` )}</small>
    </Typography>
    <LinearProgress className={c.progressBar} variant="determinate" value={t( `skills.list.${i}.percent` )} />
  </div> ) );

  return (
    <Grid container className={c.container} spacing={24}>

      <Grid item xs={12}>
        <Typography variant="title"><Star className={c.iconLarge} />
          {t( `skills.title` )}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        {res}
      </Grid>
    </Grid> );
}

Skills.propTypes = {
  classes: PropTypes.object,
  c: PropTypes.object,
  t: PropTypes.object
}
Skills.defaultProps = {
  classes: {},
  c: {},
  t: {}
};

export default withStyles( styles )( translate( 'translations' )( Skills ) );