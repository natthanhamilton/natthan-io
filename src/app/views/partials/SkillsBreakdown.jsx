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

  const list = locale.skillsFull.map( ( d, key ) => (
    <LazyLoad key={key} className={c.skillImg}>
      <Tooltip title={d} placement="bottom">
        <img src={cloudinary.url(`tools/${d.replace(/\s+/g, '-').toLowerCase()}.png`, {quality: 50, width: 48, crop: "scale"})} alt={d} />
      </Tooltip>
    </LazyLoad> ) );

  return (
    <Grid item xs={12}>
      <Grid container className={c.container} spacing={0}>
        <Grid item xs={12}>
          <Typography variant="title"><Star className={c.iconLarge} />
            {locale.skillsFull.length}&nbsp;Languages, Tools, and The Kitchen Sink
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {list}
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