import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

import Star from '@material-ui/icons/Star';

import locale from '../../../assets/locales/en-US/translations';

const Skills = props => {
  const { classes, t } = props;

  const tech = locale.skills.tech.map((skill, i) => {
    const name = t(`skills.tech.${i}.name`);
    return <Chip key={name} label={name} className={classes.chip} />;
  });

  const biz = locale.skills.biz.map((skill, i) => {
    const name = t(`skills.biz.${i}.name`);
    return <Chip key={name} label={name} className={classes.chip} />;
  });

  return (
    <Grid container className={classes.container} spacing={24}>
      <Grid item xs={12}>
        <Typography className={classes.sectionTitle} variant="headline">
          <span>
            <Star className={classes.iconLarge} />
          </span>
          {t(`skills.title`)}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2" className={classes.bold}>
          {t(`skills.techTitle`)}
        </Typography>
        {tech}
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2" className={classes.bold}>
          {t(`skills.bizTitle`)}
        </Typography>
        {biz}
      </Grid>
    </Grid>
  );
};

Skills.propTypes = {
  classes: PropTypes.object,
  t: PropTypes.func.isRequired
};
Skills.defaultProps = {
  classes: {}
};

//Theme
const styles = theme => ({
  skillExp: {
    float: 'right'
  },
  progressBar: {
    marginBottom: 5
  },
  chip: {
    margin: theme.spacing.unit / 2
  },
  bold: {
    fontWeight: 'bold'
  }
});

export default withStyles(styles)(translate()(Skills));
