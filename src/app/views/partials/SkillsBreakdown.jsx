import React from 'react';
import PropTypes from 'prop-types';
import cloudinary from 'cloudinary';
import LazyLoad from 'react-lazy-load';
import {
  translate
} from 'react-i18next';

import {
  withStyles
} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Tooltip from 'material-ui/Tooltip';
import Star from 'material-ui-icons/Star';

import locale from '../../../assets/locales/en-US/translations';
import GenerateSkillsList from './GenerateSkillsList'

const styles = theme => ( {
  skillImg: {
    display: 'inline-block',
    width: '48px !important',
    height: '48px !important',
    padding: '7 !important'
  },
  section: {
    padding: '10px 0'
  }
} );

const SkillsBreakdown = ( props ) => {
  const c = { ...props.c,
    ...props.classes
  };
  const t = props.t;

  return (
    <Grid item xs={12}>
      <Grid container className={c.container} spacing={0}>
        <Grid item xs={12}>
          <Typography className={c.sectionTitle} variant="headline"><span><Star className={c.iconLarge} /></span>
            {locale.skillsExperienced.length+locale.skillsFamiliar.length+locale.skillsLearning.length+locale.skillsTools.length}{" "}{t( `skills.breakdownTitle` )}
          </Typography>
        </Grid>
        <Grid className={c.section} item xs={12}>
          <Typography variant="title">{t( `skills.experiencedTitle` )}</Typography>
          <GenerateSkillsList item='skillsExperienced' data={locale.skillsExperienced} />
        </Grid>
        <Grid className={c.section} item xs={12}>
          <Typography variant="title">{t( `skills.familiarTitle` )}</Typography>
          <GenerateSkillsList item='skillsFamiliar' data={locale.skillsFamiliar} />
        </Grid>
        <Grid className={c.section} item xs={12}>
          <Typography variant="title">{t( `skills.learningTitle` )}</Typography>
          <GenerateSkillsList item='skillsLearning' data={locale.skillsLearning} />
        </Grid>
        <Grid className={c.section} item xs={12}>
          <Typography variant="title">{t( `skills.toolsTitle` )}</Typography>
          <GenerateSkillsList item='skillsTools' data={locale.skillsTools} />
        </Grid>
      </Grid>
    </Grid> );
};

SkillsBreakdown.propTypes = {
  classes: PropTypes.object,
  c: PropTypes.object,
  t: PropTypes.func.isRequired
}
SkillsBreakdown.defaultProps = {
  classes: {},
  c: {}
};

export default withStyles( styles )( translate()( SkillsBreakdown ) );