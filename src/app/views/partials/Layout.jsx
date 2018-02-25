import React, {Component} from 'react'
import LoadingBar from 'react-redux-loading-bar'

import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

const styles = theme => ({
  root: {
    position: 'relative',
    zIndex: 1111111,
    flexGrow: 1,
    padding: theme.spacing.unit * 5,
  },
  loadingBar: {
    backgroundColor: '#039be5',
    zIndex: '999999'
  },
    toolBar: {
      width: '100%',
      zIndex: 0,
      height: 100
    }
});

class Layout extends Component {
  render() {
    const c = this.props.classes

    return (<div>
      <LoadingBar className={c.loadingBar} showFastActions="showFastActions" updateTime={200} maxProgress={90}/>
      <AppBar position="fixed">
        <Toolbar className={c.toolBar}>
        </Toolbar>
      </AppBar>
      <Grid container="container" className={c.root} spacing={0} alignItems="flex-start" direction="row" justify="center">
        <Grid item="item" xs={12} sm={10} md={8}>
          {this.props.children}
        </Grid>
      </Grid>
    </div>)
  }
}
export default withStyles(styles)(Layout)
