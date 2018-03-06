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

  const tech = locale.skills.tech.map( ( d, i ) => ( <div key={i}>
    <Typography variant="body2">{t( `skills.tech.${i}.name` )}
      <small className={c.skillExp}>{t( `skills.tech.${i}.experience` )}</small>
    </Typography>
    <LinearProgress className={c.progressBar} variant="determinate" value={t( `skills.tech.${i}.percent` )} />
  </div> ) );

  const biz = locale.skills.biz.map( ( d, i ) => ( <div key={i}>
    <Typography variant="body2">{t( `skills.biz.${i}.name` )}
      <small className={c.skillExp}>{t( `skills.biz.${i}.experience` )}</small>
    </Typography>
    <LinearProgress className={c.progressBar} variant="determinate" value={t( `skills.biz.${i}.percent` )} />
  </div> ) );

  return (
    <Grid container className={c.container} spacing={24}>

      <Grid item xs={12}>
        <Typography className={c.sectionTitle} variant="title"><span><Star className={c.iconLarge} /></span>
          {t( `skills.title` )}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2"><strong>{t( `skills.techTitle` )}</strong></Typography>
        {tech}
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2"><strong>{t( `skills.bizTitle` )}</strong></Typography>
        {biz}
      </Grid>
    </Grid> );
}

Skills.propTypes = {
  classes: PropTypes.object,
  c: PropTypes.object,
  t: PropTypes.func.isRequired
}
Skills.defaultProps = {
  classes: {},
  c: {}
};

export default withStyles( styles )( translate()( Skills ) );