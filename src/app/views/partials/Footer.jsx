import React from 'react';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Tooltip from 'material-ui/Tooltip';

import locale from '../../../assets/locale/en_us';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 5,
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
});

const Footer = (props) => {
  const c = props.classes

    const list = locale.badges.map((d, key) => (<Tooltip key={key} title={d.tool} placement="bottom">
      <a href={d.link}><img className={c.badge} src={d.image} alt={d.tool} /></a>
    </Tooltip>));

return (
  <Grid className={c.root} container spacing={24} alignItems="flex-start" direction="row" justify="flex-start">
    <Grid className={c.git} item xs={12}>
      <a className={c.gitLink} target="_new" href="https://github.com/natthanhamilton/natthan-io">
        <Button color="primary" variant="raised">
Visit the GitHub repository!
        </Button>
      </a>
    </Grid>
    <Grid className={c.badges} item xs={12}>
      {list}
    </Grid>
  </Grid>);
}

export default withStyles(styles)(Footer);
