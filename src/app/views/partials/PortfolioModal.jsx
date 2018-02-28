import React, {Component} from 'react'
import {connect} from 'react-redux'
import cloudinary from 'cloudinary'
import PropTypes from 'prop-types';
import {closePortfolio} from '../../redux/actions'

import {withStyles} from 'material-ui/styles';
import Dialog, {DialogActions, DialogContent, DialogContentText, DialogTitle,} from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography'

import locale from '../../../assets/locale/en_us';

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
  constructor(props) {
    super(props);
    this.state = {
      portfolio: {
          name: "",
          summary: "",
          content: "",
          image: ""
        },
        index: null
    };
  }
  componentWillMount() {
    if (this.props.store.portfolio != null) {
      this.setState({
        portfolio: locale.portfolio[this.props.store.portfolio],
        index: this.props.store.portfolio
      });
    }
  }

  render() {
    const hasPortfolio = Boolean(this.state.index)
    const c = this.props.classes
    const d = this.state.portfolio

    return (<Dialog
      className={c.dialog}
      open={hasPortfolio}
      onClose={() => this.props.dispatch(closePortfolio())}
      aria-labelledby={d.name}
      aria-describedby={d.summary}
    >
      <DialogContent>
        <DialogContentText id={d.summary}>
          <Paper className={c.paper} elevation={4}>
            <img className={c.image} src={cloudinary.url(`portfolio/${d.image}.jpg`)} alt={d.name} />
          </Paper>
          <Typography className={c.title} variant="title">{d.name}</Typography>
          <Typography variant="body1">{d.content}</Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => this.props.dispatch(closePortfolio())} color="primary">
            Close
        </Button>
      </DialogActions>
    </Dialog>)
  }
}

PortfolioModal.propTypes = {
    store: PropTypes.object,
    classes: PropTypes.object,
    dispatch: PropTypes.func
}
PortfolioModal.defaultProps = {
  store: {},
    classes: {}
};

export default withStyles(styles)(connect(store => ({store}), undefined)(PortfolioModal))
