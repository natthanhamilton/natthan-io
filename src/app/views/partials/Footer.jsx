import React from 'react';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';

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
  badge: {
    padding: 5
  }
});

const Footer = (props) => {
  const c = props.classes

return (
  <Grid className={c.root} container spacing={24} alignItems="flex-start" direction="row" justify="flex-start">
    <Grid className={c.git} item xs={12}>
      <a className={c.gitLink} target="_new" href="https://github.com/natthanhamilton/natthan-io">
        <Button color="primary" variant="raised">
Visit the GitHub repository!
        </Button>
      </a>
    </Grid>
    <Grid item xs={12}>
      <a href='https://travis-ci.org/'><img className={c.badge} alt="Travis-CI" src="https://img.shields.io/travis/natthanhamilton/natthan-io.svg?style=for-the-badge" /></a>
      <a href='https://ci.appveyor.com/'><img className={c.badge} alt="App-Veyor" src="https://img.shields.io/appveyor/ci/natthanhamilton/natthan-io.svg?style=for-the-badge" /></a>
      <a href="https://david-dm.org/natthanhamilton/natthan-io" title="dependencies status"><img className={c.badge} src="https://img.shields.io/david/natthanhamilton/natthan-io.svg?style=for-the-badge" /></a>
      <a href="https://david-dm.org/natthanhamilton/natthan-io?type=dev" title="devDependencies status"><img className={c.badge} src="https://img.shields.io/david/dev/natthanhamilton/natthan-io.svg?style=for-the-badge" /></a>
      <a href='https://coveralls.io/github/natthanhamilton/natthan-io?branch=master'><img className={c.badge} src='https://img.shields.io/coveralls/github/natthanhamilton/natthan-io.svg?style=for-the-badge' alt='Coverage Status' /></a>
    </Grid>
  </Grid>);
}

export default withStyles(styles)(Footer);
