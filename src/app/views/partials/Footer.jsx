import React from 'react';
import PropTypes from 'prop-types';
import {
  translate
} from 'react-i18next';

import {
  withStyles
} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Tooltip from 'material-ui/Tooltip';
import LazyLoad from 'react-lazy-load';

import locale from '../../../assets/locales/en-US/translations';

const styles = theme => ( {
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 5,
    paddingLeft: 0,
    paddingRight: 0
  },
  git: {
    textAlign: 'center'
  },
  gitLink: {
    textDecoration: 'none',
    padding: '0 5px'
  },
  badges: {
    textAlign: 'center'
  },
  badge: {
    padding: 5
  }
} );

const Footer = ( props ) => {
  const c = { ...props.c,
    ...props.classes
  };
  const t = props.t;

  const list = locale.badges.map( ( d, i ) => ( <LazyLoad key={i} className={c.lazyLoad}>
    <Tooltip title={t(`badges.${i}.tool`)} placement="bottom">
      <a href={d.link}><img className={c.badge} src={d.image} alt={t(`badges.${i}.tool`)} /></a>
    </Tooltip>
  </LazyLoad> ) );

  return (
    <Grid className={c.root} container spacing={24}>
      <Grid className={c.badges} item xs={12}>{list}</Grid>
      <Grid className={c.git} item xs={12}>
        <a className={c.gitLink} target="_new" href="https://github.com/natthanhamilton/natthan-io">
          <Button color="primary" variant="raised">{t(`github.linkText`)}</Button>
        </a>
      </Grid>
    </Grid> );
}

Footer.propTypes = {
  classes: PropTypes.object,
  c: PropTypes.object,
  t: PropTypes.func.isRequired
}
Footer.defaultProps = {
  classes: {},
  c: {}
};

export default withStyles( styles )( translate( 'translations' )( Footer ) );