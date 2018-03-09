import React from 'react';
import PropTypes from 'prop-types';
import {
  translate
} from 'react-i18next';

import {
  withStyles
} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';

import LocationOn from 'material-ui-icons/LocationOn';
import DateRange from 'material-ui-icons/DateRange';
import Work from 'material-ui-icons/Work';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

import locale from '../../../assets/locales/en-US/translations';

const styles = theme => ( {
  padding: {
    paddingTop: 2.5,
    paddingBottom: 2.5
  },
  ul: {
    margin: 0
  },
} );

const Experience = ( props ) => {
  const c = { ...props.c,
    ...props.classes
  };
  const {
    t
  } = props;

  const res = locale.experience.jobs.map( ( d, i ) => {
    const activities = d.activity.map( ( content, ii ) => ( <li key={ii}>
      <Typography className={c.padding} variant="body1">{t(`experience.jobs.${i}.activity.${ii}`)}</Typography>
    </li> ) );

    return (
      <div key={i}>
        <Grid container spacing={0}>
          {i > 0 && (
          <Grid item xs={12} className={c.section}>
            <Divider />
          </Grid>
        )}
          <Grid item xs={12} className={c.section}>
            <Typography variant="title">{t(`experience.jobs.${i}.company`)}{"  "}<i><small>{t(`experience.jobs.${i}.title`)}</small></i></Typography>
            <Typography className={c.padding} variant="body2"><LocationOn className={c.iconSmall} /> {t(`experience.jobs.${i}.location`)}
              {"  "}
              <DateRange className={c.iconSmall} /> {t(`experience.jobs.${i}.started`)}{" - "}{t(`experience.jobs.${i}.ended`)}
            </Typography>
            <br />
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="body2" noWrap>{t(`prompts.viewExperience`)}</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <div>
                  <Typography className={c.padding} variant="body2"><strong>SITUATION</strong></Typography>
                  <Typography className={c.padding} variant="body1">{t(`experience.jobs.${i}.situation`)}</Typography>
                  <Typography className={c.padding} variant="body2"><strong>TASK</strong></Typography>
                  <Typography className={c.padding} variant="body1">{t(`experience.jobs.${i}.task`)}</Typography>
                  <Typography className={c.padding} variant="body2"><strong>ACTIVITY</strong></Typography>
                  <ul className={c.ul}>{activities}</ul>
                  <Typography className={c.padding} variant="body2"><strong>RESULT</strong></Typography>
                  <Typography className={c.padding} variant="body1">{t(`experience.jobs.${i}.result`)}</Typography>
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Grid>
        </Grid>
      </div> );
  } );

  return (
    <Grid container className={c.container} spacing={0}>
      <Grid item xs={12}>
        <Typography className={c.sectionTitle} variant="headline"><span><Work className={c.iconLarge} /></span>
          {t('experience.title')}
        </Typography>
      </Grid>
      <Grid item xs={12}>{res}</Grid>
    </Grid> );
}

Experience.propTypes = {
  classes: PropTypes.object,
  c: PropTypes.object,
  t: PropTypes.func.isRequired
}
Experience.defaultProps = {
  classes: {},
  c: {}
};
export default withStyles( styles )( translate()( Experience ) );