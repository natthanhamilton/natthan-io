import React from 'react';
import PropTypes from 'prop-types';
import cloudinary from 'cloudinary';
import Img from 'react-image-smooth-loading'

import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';

import locale from '../../../assets/locale/en_us';

const styles = theme => ({
  avatar: {
    width: 100,
    height: 100,
    margin: 'auto'
  },
  actionIcon: {
    maxHeight: 36,
    padding: '0 5px'
  },
  actions: {
    textAlign: 'center'
  }
});

const Person = (props) => {
  const c = {...props.c, ...props.classes};

    const list = locale.actions.map((d, i) => (
      <a key={i} target="_new" href={d.url}>
        <Img className='action-icons' src={cloudinary.url(`icons/${d.name.toLowerCase()}.png`, {width: 36, crop: "scale"})} alt={d.name} />
      </a>));

return (
  <Grid container className={c.container} spacing={24} alignItems="flex-start" direction="row" justify="flex-start">
    <Grid item xs={12}>
      <Avatar alt="Natthan Hamilton" src={cloudinary.url(`portraits/nate.jpg`, {height: 113, quality: 60, width: 100, crop: "scale"})} className={c.avatar} />
    </Grid>
    <Grid item xs={12}>
      <Typography variant="title" align="center">Natthan Hamilton</Typography>
      <Typography variant="body1" align="center">
                Business driven developer.
                Passionate to create beneficial solutions
      </Typography>
    </Grid>
    <Grid className={c.actions} item xs={12}>{list}</Grid>
    <Grid item xs={12}>
      <Divider />
    </Grid>
  </Grid>);
}


Person.propTypes = {
  classes: PropTypes.object,
    c: PropTypes.object
}
Person.defaultProps = {
  classes: {},
    c: {}
};

export default withStyles(styles)(Person);
