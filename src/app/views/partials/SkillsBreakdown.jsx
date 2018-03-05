import React from 'react';
import PropTypes from 'prop-types';
import cloudinary from 'cloudinary';
import LazyLoad from 'react-lazy-load';

import {
  withStyles
} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Tooltip from 'material-ui/Tooltip';
import Star from 'material-ui-icons/Star';

import locale from '../../../assets/locale/en_us';
import GenerateSkillsList from './GenerateSkillsList'

const styles = theme => ( {
  skillImg: {
    display: 'inline-block',
    width: '48px !important',
    height: '48px !important',
    padding: '7 !important'
  }
} );

const SkillsBreakdown = ( props ) => {
  const c = { ...props.c,
    ...props.classes
  };
  return (
    <Grid item sm={12}>
      <Grid container className={c.container} spacing={0}>
        <Grid item sm={12}>
          <Typography variant="title"><Star className={c.iconLarge} />
            {locale.skillsExperienced.length+locale.skillsFamiliar.length+locale.skillsLearning.length}&nbsp;Languages, Tools, and The Kitchen Sink
          </Typography>
        </Grid>
        <Grid item sm={4}>
          <Typography variant="body1">Experienced</Typography>
          <GenerateSkillsList data={locale.skillsExperienced} />
        </Grid>
        <Grid item sm={4}>
          <Typography variant="body1">Familiar</Typography>
          <GenerateSkillsList data={locale.skillsFamiliar} />
        </Grid>
        <Grid item sm={4}>
          <Typography variant="body1">Learning</Typography>
          <GenerateSkillsList data={locale.skillsLearning} />
        </Grid>
      </Grid>
    </Grid> );
};

SkillsBreakdown.propTypes = {
  classes: PropTypes.object,
  c: PropTypes.object
}
SkillsBreakdown.defaultProps = {
  classes: {},
  c: {}
};

export default withStyles( styles )( SkillsBreakdown );