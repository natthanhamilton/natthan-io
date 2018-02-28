import React from 'react';
import {connect} from 'react-redux'
import cloudinary from 'cloudinary'
import Img from 'react-image-smooth-loading'
import PropTypes from 'prop-types';

import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Card, {CardActions, CardContent, CardMedia,} from 'material-ui/Card';
import Button from 'material-ui/Button';

import GroupWork from 'material-ui-icons/GroupWork';

import locale from '../../../assets/locale/en_us';
import {updatePortfolio} from '../../redux/actions'

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

const Portfolio = (props) => {
    const c = props.classes;

    return (
      <Grid container className={c.container} spacing={0} alignItems="flex-start" direction="row" justify="flex-start">
        <Grid item xs={12}>
          <Typography variant="title"><GroupWork className={c.iconLarge} />
                  &nbsp;Portfolio
          </Typography>
        </Grid>
        {
          locale.portfolio.map((d, i) => (<Grid key={i} item xs={12} sm={6}>
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
                  onClick={() => props.dispatch(updatePortfolio(i))}
                >
                Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>))
      }
      </Grid>);
  }

Portfolio.propTypes = {
  classes: PropTypes.object,
      dispatch: PropTypes.func
}
Portfolio.defaultProps = {
  classes: {}
};

// Use named export for unconnected component (for tests)
// Use default export for the connected component (for app)
export default connect(store => ({store}), undefined)(withStyles(styles)(Portfolio))
