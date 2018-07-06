import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cloudinary from 'cloudinary';
import LazyLoad from 'react-lazy-load';
import { translate } from 'react-i18next';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Zoom from '@material-ui/core/Zoom';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

class MyStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
  }

  render() {
    const { classes, t } = this.props;
    const { open } = this.state;

    return (
      <ExpansionPanel className={classes.expansionPanel} expanded={open}>
        <ExpansionPanelDetails>
          <Grid container className={classes.root} spacing={24}>
            <Grid item xs={12} sm={6}>
              <Zoom in style={{ transitionDelay: 500 }}>
                <Paper className={classes.portraitPaper} elevation={4}>
                  <LazyLoad className={classes.portrait} height={400}>
                    <div
                      style={{
                        background: `url(${cloudinary.url(`portraits/fam.jpg`, {
                          height: 400,
                          quality: 'auto:good',
                          crop: 'scale',
                          secure: true
                        })}) 50% 50% no-repeat`
                      }}
                    />
                  </LazyLoad>
                </Paper>
              </Zoom>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Zoom in style={{ transitionDelay: 1000 }}>
                <div>
                  <Typography variant="headline" noWrap>
                    <i>
                      {t(`story.title`)}
                    </i>
                  </Typography>
                  <Typography variant="body1">
                    {t(`story.content`)}
                  </Typography>
                </div>
              </Zoom>
            </Grid>
            <Grid className={classes.close} item xs={12}>
              <Zoom in style={{ transitionDelay: 1500 }}>
                <Button
                  onClick={() => {
                    this.setState({ open: false });
                    window.scrollTo(0, 0);
                  }}
                  variant="raised"
                  color="primary"
                >
                  {t(`prompts.hideStory`)}
                </Button>
              </Zoom>
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

MyStory.propTypes = {
  classes: PropTypes.object,
  t: PropTypes.func.isRequired
};
MyStory.defaultProps = {
  classes: {}
};

// Theme
const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 5
  },
  expansionPanel: {
    background: 'transparent',
    boxShadow: 'none'
  },
  portrait: {
    position: 'relative',
    '& div': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundSize: 'cover !important'
    }
  },
  portraitPaper: {
    padding: 0
  },
  close: {
    textAlign: 'right'
  }
});

export default withStyles(styles)(translate()(MyStory));
