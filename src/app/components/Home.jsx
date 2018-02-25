import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {HomeView} from '../views'
import {showLoading, hideLoading} from 'react-redux-loading-bar'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: false,
    };
  }
  componentWillMount() {
    this.setStore(this.props.store);
    this.props.dispatch(showLoading())
  }
  componentDidMount() {
    this.props.dispatch(hideLoading())
  }
  componentWillReceiveProps(newProps) {
    if (this.props.store != newProps.store) {
      this.setStore(newProps.store);
    }
  }
  setStore(d) {
    this.setState({user: d.user});
  }

  render() {
    return (<HomeView state={this.state} />)
  }
}
export default withRouter(connect(store => ({store}), undefined)(Home))
