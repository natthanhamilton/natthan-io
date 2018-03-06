import React from 'react';
import PropTypes from 'prop-types';
import cloudinary from 'cloudinary';
import Img from 'react-image-smooth-loading'
import {
  translate
} from 'react-i18next';

import {
  withStyles
} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';

import locale from '../../../assets/locales/en-US/translations';

const styles = theme => ( {
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
  },
  imgPlaceholder: {
    display: 'inline-block',
    width: '36px !important',
    height: '36px !important',
    padding: '5 !important',
    '& img': {
      height: '36px !important',
      width: '36px !important'
    }
  }
} );

const Person = ( props ) => {
  const c = { ...props.c,
    ...props.classes
  };
  const {
    t
  } = props;

  const list = locale.actions.map( ( d, i ) => (
    <a key={i} target="_new" href={d.url}>
      <Img className={c.imgPlaceholder} src={cloudinary.url(`icons/${d.name.toLowerCase()}.png`, {width: 36, crop: "scale", secure: true})} alt={t( `actions.${i}` )} />
    </a> ) );

  return (
    <Grid container className={c.container} spacing={24}>
      <Grid item xs={12}>
        <Avatar alt="Natthan Hamilton" src={cloudinary.url(`portraits/nate.jpg`, {height: 113, quality: 60, width: 100, crop: "scale"})} className={c.avatar} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="title" align="center">{t( `person.name` )}</Typography>
        <Typography variant="body1" align="center">{t( `person.description` )}</Typography>
      </Grid>
      <Grid className={c.actions} item xs={12}>{list}</Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
    </Grid> );
}


Person.propTypes = {
  classes: PropTypes.object,
  c: PropTypes.object,
  t: PropTypes.object
}
Person.defaultProps = {
  classes: {},
  c: {},
  t: {}
};

export default withStyles( styles )( translate( 'translations' )( Person ) );