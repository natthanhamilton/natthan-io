import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import cloudinary from 'cloudinary'
import LazyLoad from 'react-lazy-load';
import {
  translate
} from 'react-i18next';

import {
  withStyles
} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import Zoom from 'material-ui/transitions/Zoom';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';

const styles = theme => ( {
  root: {
    padding: theme.spacing.unit * 5
  },
  expansionPanel: {
    background: 'transparent',
    boxShadow: 'none'
  },
  portait: {
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
    padding: 0,
  },
  close: {
    textAlign: 'right'
  }
} );

class MyStory extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      open: true
    };
  }

  render() {
    const {
      t
    } = this.props;
    const c = this.props.classes

    return (
      <div>
        <ExpansionPanel className={c.expansionPanel} expanded={this.state.open}>
          <ExpansionPanelDetails>
            <Grid container className={c.root} spacing={24}>
              <Grid item xs={12} sm={6}>
                <Zoom in style={{ transitionDelay: 500 }}>
                  <Paper className={c.portraitPaper} elevation={4}>
                    <LazyLoad className={c.portait} height={400}>
                      <div
                        style={{ background: `url(${cloudinary.url(`portraits/fam.jpg`, {height: 400, quality: "auto:good", crop: "scale"})}) 50% 50% no-repeat` }}
                      />
                    </LazyLoad>
                  </Paper>
                </Zoom>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Zoom in style={{ transitionDelay: 1000 }}>
                  <div>
                    <Typography variant="headline" noWrap><i>{t( `story.title` )}</i></Typography>
                    <Typography variant="body1">{t( `story.content` )}</Typography>
                  </div>
                </Zoom>
              </Grid>
              <Grid className={c.close} item xs={12}>
                <Zoom in style={{ transitionDelay: 1500 }}>
                  <Button onClick={() => this.setState({open: false})} variant="raised" color="primary">
                    {t( `prompts.hideStory` )}
                  </Button>
                </Zoom>
              </Grid>
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}


MyStory.propTypes = {
  classes: PropTypes.object,
  t: PropTypes.func.isRequired
}
MyStory.defaultProps = {
  classes: {}
};

export default withStyles( styles )( translate()( MyStory ) );