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
          <LazyLoad className={c.lazyLoad} height={200}>
            <img className={c.imgPlaceholder} src={cloudinary.url(`portfolio/${d.image}.jpg`, {height: 200, quality: "auto:good", crop: "scale"})} title={t( `portfolio.list.${i}.name` )} alt={t( `portfolio.list.${i}.name` )} />
          </LazyLoad>
          <CardContent>
            <Typography variant="title">{t( `portfolio.list.${i}.name` )}</Typography>
            <Typography variant="body1" noWrap>{t( `portfolio.list.${i}.summary` )}</Typography>
            <Typography variant="body1" noWrap>&nbsp;</Typography>
            <Typography variant="body2" noWrap><i>{t( `portfolio.skillsTitle` )}</i></Typography>
            <GenerateSkillsList item={`portfolio.list.${i}.tools`} data={d.tools} />
          </CardContent>
          <CardActions className={c.cardActions}>
            {d.website != null && (
              <Button target="_new" href={d.website} color="primary">
                {t( `prompts.viewWebsite` )}
              </Button>
              )}
            <Button
              size="small"
              color="primary"
              variant="raised"
              onClick={() => this.setState({index: i})}
            >
              {t( `prompts.projectInformation` )}
            </Button>
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
          <Typography variant="title"><GroupWork className={c.iconLarge} />
            {t( `portfolio.title` )}
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
  t: PropTypes.object
}
Portfolio.defaultProps = {
  classes: {},
  c: {},
  t: {}
};

export default withStyles( styles )( translate( 'translations' )( Portfolio ) );