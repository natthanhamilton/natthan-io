import React, {Component} from 'react';
import cloudinary from 'cloudinary'
import Img from 'react-image-smooth-loading'

import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Card, {CardActions, CardContent, CardMedia,} from 'material-ui/Card';
import Button from 'material-ui/Button';

import GroupWork from 'material-ui-icons/GroupWork';

import PortfolioModal from './PortfolioModal';
import locale from '../../../assets/locale/en_us';

const styles = theme => ({
  container: {
    margin: 0,
    padding: 24,
    width: '100% !important'
  },
  iconLarge: {
    width: 25,
    height: 25
  },
  media: {
    height: 150
  },
});

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolio: []
    };
  }
  componentWillMount() {
    locale.portfolio.map((d, i) => {
      const s = Object.assign({}, this.state);
      s.portfolio[i] = false;
      return this.setState(s);
    });
  }

  portfolio = (c) => {
    const res = locale.portfolio.map((d, i) => (<Grid key={i} item="item" xs={12} sm={6}>
      <Card>
        <Img className='portfolio-image-placeholder' src={cloudinary.url(`portfolio/${d.image}.jpg`, {height: 200, quality: "auto:good", crop: "scale"})} title={d.name} alt={d.name} />
        <CardContent>
          <Typography variant="title">{d.name}</Typography>
          <Typography variant="body1" noWrap>{d.summary}</Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              const s = Object.assign({}, this.state);
              s.portfolio[i] = true;
              this.setState(s);
            }}
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
      <PortfolioModal state={this.state} index={i} portfolio={d} handleClose={state => this.setState(state)} />
    </Grid>));
    return res;
  }

  render() {
    const c = this.props.classes;

    return (
      <Grid container="container" className={c.container}>
        <Grid item="item" xs={12}>
          <Typography variant="title"><GroupWork className={c.iconLarge} />
                  &nbsp;Portfolio
          </Typography>
        </Grid>
        {this.portfolio(c)}
      </Grid>);
  }
}

export default withStyles(styles)(Portfolio);
