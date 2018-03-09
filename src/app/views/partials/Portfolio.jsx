import React, {
  Component
} from 'react'
import {
  Link
} from 'react-router-dom'
import cloudinary from 'cloudinary'
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazy-load';
import Img from 'react-image-smooth-loading'
import {
  translate
} from 'react-i18next';

import {
  withStyles
} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import Card, {
  CardActions,
  CardContent,
  CardMedia,
} from 'material-ui/Card';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography'
import GroupWork from 'material-ui-icons/GroupWork';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

import locale from '../../../assets/locales/en-US/translations';
import {
  closePortfolio
} from '../../redux/actions'
import GenerateSkillsList from './GenerateSkillsList'

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
  cardActions: {
    textAlign: 'right',
    display: 'block'
  },
  listImage: {
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
  skillsPanel: {
    textAlign: 'center'
  }
};


class Portfolio extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      index: null
    };
  }

  render() {
    const c = { ...this.props.c,
      ...this.props.classes
    };
    const s = this.state
    const t = this.props.t;

    const list = () => {
      const res = locale.portfolio.list.map( ( d, i ) => ( <Grid key={i} item xs={12} sm={6}>
        <Card>
          <LazyLoad className={c.listImage} height={200}>
            <div
              style={{ background: `url(${cloudinary.url(`portfolio/${d.image}.jpg`, {quality: "auto:good", crop: "scale"})}) 50% 50% no-repeat` }}
            />
          </LazyLoad>
          <CardContent>
            <Typography variant="title">{t( `portfolio.list.${i}.name` )}</Typography>
            <Typography variant="body1" noWrap>{t( `portfolio.list.${i}.summary` )}</Typography>
            <br />
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="body2" noWrap><i>{t( `portfolio.skillsTitle` )}</i></Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={c.skillsPanel}>
                <GenerateSkillsList item={`portfolio.list.${i}.tools`} data={d.tools} />
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </CardContent>
          <CardActions className={c.cardActions}>
            {d.website != null && (
              <Button target="_new" href={d.website} color="primary">
                {t( `prompts.viewWebsite` )}
              </Button>
              )}
            {/*}
            <Button
              size="small"
              color="primary"
              variant="raised"
              onClick={() => this.setState({index: i})}
            >
              {t( `prompts.projectInformation` )}
            </Button>
            */}
          </CardActions>
        </Card>
      </Grid> ) )
      return res
    }
    const dialog = () => {
      let i = s.index

      return ( <Dialog
        className={c.dialog}
        open={s.index != null ? true : false}
        onClose={() => this.setState({index: null})}
        aria-labelledby={t( `portfolio.list.${i}.name` )}
        aria-describedby={t( `portfolio.list.${i}.summary` )}
      >
        <DialogContent>
          <DialogContentText id={t( `portfolio.list.${i}.summary` )}>
            <Paper className={c.paper} elevation={4}>
              <img className={c.image} src={cloudinary.url(`portfolio/${t( `portfolio.list.${i}.image` )}.jpg`, {secure: true})} alt={t( `portfolio.list.${i}.name` )} />
            </Paper>
            <Typography className={c.title} variant="title">{t( `portfolio.list.${i}.name` )}</Typography>
            <Typography variant="body1">{t( `portfolio.list.${i}.content` )}</Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => this.setState({index: null})} color="primary">
            {t( `prompts.close` )}
          </Button>
        </DialogActions>
      </Dialog> )
    }

    return ( <div>
      <Grid container className={c.container} spacing={0}>
        <Grid item xs={12}>
          <Typography className={c.sectionTitle} variant="headline"><span><GroupWork className={c.iconLarge} /></span>
            {t( `portfolio.title` )}{" "}<i><small>Content currently under development!</small></i>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={24}>
            {list()}
          </Grid>
        </Grid>
      </Grid>
      {s.index != null && dialog()}
    </div> )
  }
}

Portfolio.propTypes = {
  classes: PropTypes.object,
  c: PropTypes.object,
  t: PropTypes.func.isRequired
}
Portfolio.defaultProps = {
  classes: {},
  c: {}
};

export default withStyles( styles )( translate()( Portfolio ) );