import React from 'react';
import PropTypes from 'prop-types';
import cloudinary from 'cloudinary';
import Img from 'react-image-smooth-loading'

import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Tooltip from 'material-ui/Tooltip';
import Star from 'material-ui-icons/Star';

import locale from '../../../assets/locale/en_us';

const SkillsBreakdown = (props) => {
  const c = {...props.c, ...props.classes};

  const list = locale.skillsFull.map((d, key) => (<Tooltip key={key} title={d} placement="bottom">
    <Img className='skill-icons' src={cloudinary.url(`tools/${d.replace(/\s+/g, '-').toLowerCase()}.png`, {quality: 50, width: 48, crop: "scale"})} alt={d} />
  </Tooltip>));

  return (
    <Grid item xs={12}>
      <Grid container className={c.container} spacing={0} alignItems="flex-start" direction="row" justify="flex-start">
        <Grid item xs={12}>
          <Typography variant="title"><Star className={c.iconLarge} />
            {locale.skillsFull.length}&nbsp;Languages, Tools, and The Kitchen Sink
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {list}
        </Grid>
      </Grid>
    </Grid>);
};

SkillsBreakdown.propTypes = {
  c: PropTypes.object
}
SkillsBreakdown.defaultProps = {
  c: {}
};

export default SkillsBreakdown;
