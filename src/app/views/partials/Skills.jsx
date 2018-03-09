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
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';


import Star from 'material-ui-icons/Star';

import locale from '../../../assets/locales/en-US/translations';

const styles = theme => ( {
  skillExp: {
    float: 'right'
  },
  progressBar: {
    marginBottom: 5
  },
  chip: {
    margin: theme.spacing.unit / 2,
  },
} );

const Skills = ( props ) => {
  const c = { ...props.c,
    ...props.classes
  };
  const t = props.t;

  const tech = locale.skills.tech.map( ( d, i ) => (
    <Chip key={i} label={<small>{t( `skills.tech.${i}.name` )}</small>} className={c.chip} /> ) );

  const biz = locale.skills.biz.map( ( d, i ) => (
    <Chip key={i} label={<small>{t( `skills.biz.${i}.name` )}</small>} className={c.chip} /> ) );

  return (
    <Grid container className={c.container} spacing={24}>

      <Grid item xs={12}>
        <Typography className={c.sectionTitle} variant="headline"><span><Star className={c.iconLarge} /></span>
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