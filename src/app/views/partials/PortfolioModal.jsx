import React, {Component} from 'react'
import cloudinary from 'cloudinary'

import {withStyles} from 'material-ui/styles';
import Dialog, {DialogActions, DialogContent, DialogContentText, DialogTitle,} from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography'

const styles = {
  dialog: {
    zIndex: 11111111
  },
  paper: {
    margin: '0 0 20 0',
    padding: 0,
  },
  image: {
    maxWidth: '100%'
  },
  title: {
    paddingBottom: 10
  },
};

class PortfolioModal extends Component {
  handleClose = () => {
    const s = Object.assign({}, this.props.state)
    s.portfolio[this.props.index] = false
    this.props.handleClose(s)
  }
  render() {
    const d = this.props.portfolio
    const c = this.props.classes

    return (<Dialog className={c.dialog} open={this.props.state.portfolio[this.props.index]} onClose={this.handleClose} aria-labelledby={d.name} aria-describedby={d.summary}>
      <DialogContent>
        <DialogContentText id={d.summary}>
          <Paper className={c.paper} elevation={4}>
            <img className={c.image} src={cloudinary.url(`portfolio/${d.image}.jpg`)} title={d.name} />
          </Paper>
          <Typography className={c.title} variant="title">{d.name}</Typography>
          <Typography variant="body1">{d.content}</Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={this.handleClose} color="primary" autoFocus="autoFocus">
          Close
        </Button>
      </DialogActions>
    </Dialog>);
  }
}
export default withStyles(styles)(PortfolioModal);
