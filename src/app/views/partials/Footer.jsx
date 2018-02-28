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
    textDecoration: 'none'
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
      <a href='https://travis-ci.org/'><img alt="Travis-CI" src="https://travis-ci.org/natthanhamilton/natthan-io.svg?branch=master" /></a>
      <a href='https://ci.appveyor.com/'><img alt="App-Veyor" src="https://ci.appveyor.com/api/projects/status/5gywn7y6frv0y2k8?svg=true" /></a>
      <a href="https://david-dm.org/natthanhamilton/natthan-io" title="dependencies status"><img src="https://david-dm.org/natthanhamilton/natthan-io/status.svg" /></a>
      <a href="https://david-dm.org/natthanhamilton/natthan-io?type=dev" title="devDependencies status"><img src="https://david-dm.org/natthanhamilton/natthan-io/dev-status.svg" /></a>
      <a href='https://coveralls.io/github/natthanhamilton/natthan-io?branch=master'><img src='https://coveralls.io/repos/github/natthanhamilton/natthan-io/badge.svg?branch=master' alt='Coverage Status' /></a>
      */}
    </Grid>
  </Grid>);
}

export default withStyles(styles)(Footer);
