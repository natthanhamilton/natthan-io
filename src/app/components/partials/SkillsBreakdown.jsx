import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Star from '@material-ui/icons/Star';

import locale from '../../../assets/locales/en-US/translations';
import GenerateSkillsList from './GenerateSkillsList';

const SkillsBreakdown = props => {
  const { classes, t } = props;
  const skillsLength =
    locale.skillsExperienced.length +
    locale.skillsFamiliar.length +
    locale.skillsLearning.length +
    locale.skillsTools.length;

  return (
    <Grid item xs={12}>
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <Typography className={classes.sectionTitle} variant="headline">
            <span>
              <Star className={classes.iconLarge} />
            </span>
            {skillsLength} 
            {' '}
            {t(`skills.breakdownTitle`)}
          </Typography>
        </Grid>
        <Grid className={classes.section} item xs={12}>
          <Typography variant="title">
            {t(`skills.experiencedTitle`)}
          </Typography>
          <GenerateSkillsList item="skillsExperienced" data={locale.skillsExperienced} />
        </Grid>
        <Grid className={classes.section} item xs={12}>
          <Typography variant="title">
            {t(`skills.familiarTitle`)}
          </Typography>
          <GenerateSkillsList item="skillsFamiliar" data={locale.skillsFamiliar} />
        </Grid>
        <Grid className={classes.section} item xs={12}>
          <Typography variant="title">
            {t(`skills.learningTitle`)}
          </Typography>
          <GenerateSkillsList item="skillsLearning" data={locale.skillsLearning} />
        </Grid>
        <Grid className={classes.section} item xs={12}>
          <Typography variant="title">
            {t(`skills.toolsTitle`)}
          </Typography>
          <GenerateSkillsList item="skillsTools" data={locale.skillsTools} />
        </Grid>
      </Grid>
    </Grid>
  );
};

SkillsBreakdown.propTypes = {
  classes: PropTypes.object,
  t: PropTypes.func.isRequired
};
SkillsBreakdown.defaultProps = {
  classes: {}
};

// Theme
const styles = () => ({
  root: {
    flexGrow: 1,
    margin: 0,
    padding: 0
  },
  container: {
    margin: 0,
    padding: 12,
    width: '100% !important'
  },
  iconLarge: {
    width: 25,
    height: 25
  },
  iconSmall: {
    width: 10,
    height: 10
  },
  skillImg: {
    display: 'inline-block',
    width: '48px !important',
    height: '48px !important',
    padding: '7 !important'
  },
  section: {
    padding: '10px 0'
  }
});

export default withStyles(styles)(translate()(SkillsBreakdown));
